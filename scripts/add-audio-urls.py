# Get request to https://www.merriam-webster.com/dictionary/{{id}}
# // for example if id is "banana": https://www.merriam-webster.com/dictionary/banana
#
# // Then use css to select the url of the audio file
# const audioElement = document.querySelector(".play-pron-v2");
# const dataUrl = audioElement.getAttribute("data-url");
# // for example https://www.merriam-webster.com/dictionary/banana?pronunciation&lang=en_us&dir=b&file=banana01
# const audioUrl = https://media.merriam-webster.com/audio/prons/ + lang.replace("_", "/") + /mp3/ + dir + / + file + .mp3
# // https://media.merriam-webster.com/audio/prons/en/us/mp3/b/banana01.mp3
#
# Finally check if the audio file exists with a get request


import time
import json
import requests
from tqdm import tqdm
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs


def get_pronunciation_url(word_id):
    """
    Get the pronunciation audio URL for a word from Merriam-Webster dictionary.

    Args:
        word_id (str): The word to look up

    Returns:
        str or None: The audio URL if found and accessible, None otherwise
    """
    # Step 1: Make a GET request to the dictionary page
    dictionary_url = f"https://www.merriam-webster.com/dictionary/{word_id}"
    try:
        response = requests.get(dictionary_url)
        response.raise_for_status()  # Raise an exception for bad status codes
    except requests.exceptions.RequestException:
        return None

    # Step 2: Parse the HTML and find the audio element
    soup = BeautifulSoup(response.text, "html.parser")
    audio_element = soup.select_one(".play-pron-v2")

    # Check if the audio element exists
    if not audio_element:
        return None

    # Step 3: Get the data-url attribute
    data_url = audio_element.get("data-url")
    if not data_url:
        return None

    # Step 4: Parse the data_url to extract parameters
    parsed_url = urlparse(data_url)
    query_params = parse_qs(parsed_url.query)

    # Extract needed parameters, taking first value if multiple exist
    lang = query_params.get("lang", [""])[0]
    dir = query_params.get("dir", [""])[0]
    file = query_params.get("file", [""])[0]

    if not all([lang, dir, file]):
        return None

    # Step 5: Construct the actual audio URL
    lang_parts = lang.split("_")
    if len(lang_parts) != 2:
        return None

    audio_url = f"https://media.merriam-webster.com/audio/prons/{lang_parts[0]}/{lang_parts[1]}/mp3/{dir}/{file}.mp3"

    # Step 6: Check if the audio file exists
    try:
        audio_response = requests.head(audio_url)
        if audio_response.status_code == 200:
            return audio_url
        else:
            return None
    except requests.exceptions.RequestException:
        return None


with open("../src/data/words.json") as f:
    words = json.load(f)

for word in tqdm(words):
    word_id = word["id"]
    audio_url = get_pronunciation_url(word_id)
    if audio_url:
        word["audioUrl"] = audio_url
    else:
        print(f"Audio not found for: {word_id}")
    time.sleep(1)  # Be kind to the server


with open ("words.json", "w") as f:
    json.dump(words, f, indent=2)
