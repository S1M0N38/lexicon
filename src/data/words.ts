
export interface WordDefinition {
  definition: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'interjection';
}

export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  definitions: WordDefinition[];
  examples: string[];
  isFeatured?: boolean;
}

const words: Word[] = [
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The petrichor from the first spring rainfall filled the air with a refreshing scent.",
      "After months of drought, the petrichor that arose from the sudden downpour was particularly intense.",
      "Many people find the petrichor that accompanies rain on dry earth to be comforting and nostalgic."
    ],
    isFeatured: true
  },
  {
    id: "serendipity",
    word: "Serendipity",
    pronunciation: "/ˌsɛrənˈdɪpɪti/",
    definitions: [
      {
        definition: "The occurrence and development of events by chance in a happy or beneficial way.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Their meeting was pure serendipity—they were both reaching for the same book in the library.",
      "By serendipity, she discovered her talent for painting while helping her daughter with an art project.",
      "The discovery of penicillin was a case of serendipity in scientific research."
    ],
    isFeatured: true
  },
  {
    id: "limerence",
    word: "Limerence",
    pronunciation: "/ˈlɪmərəns/",
    definitions: [
      {
        definition: "The state of being infatuated or obsessed with another person, typically experienced involuntarily and characterized by a strong desire for reciprocation of one's feelings.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Her limerence for her colleague made it difficult to concentrate during meetings.",
      "He wrote poetry during the intense period of limerence, only to be embarrassed by it later.",
      "Psychologists distinguish between limerence and more mature forms of love."
    ],
    isFeatured: true
  },
  {
    id: "vellichor",
    word: "Vellichor",
    pronunciation: "/vɛlɪkɔːr/",
    definitions: [
      {
        definition: "The strange wistfulness of used bookstores, which are somehow infused with the passage of time.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The vellichor of the antiquarian bookshop transported her to another era.",
      "He spent hours browsing, enveloped in the vellichor of stacked shelves and forgotten tomes.",
      "There's a certain vellichor that can't be replicated in modern retail spaces."
    ]
  },
  {
    id: "ineffable",
    word: "Ineffable",
    pronunciation: "/ɪnˈɛfəbl/",
    definitions: [
      {
        definition: "Too great or extreme to be expressed or described in words.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The beauty of the sunset over the ocean was truly ineffable.",
      "She experienced an ineffable joy when holding her newborn for the first time.",
      "The poet struggled to capture the ineffable quality of the ancient temple."
    ]
  },
  {
    id: "apricity",
    word: "Apricity",
    pronunciation: "/əˈprɪsɪti/",
    definitions: [
      {
        definition: "The warmth of the sun in winter.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Despite the snow on the ground, we enjoyed the apricity while having lunch outdoors.",
      "The cat sought out spots of apricity by the window throughout the cold January day.",
      "There's nothing quite like the gentle apricity on your face during a crisp winter morning."
    ]
  },
  {
    id: "nemesis",
    word: "Nemesis",
    pronunciation: "/ˈnɛməsɪs/",
    definitions: [
      {
        definition: "The inescapable agent of someone's or something's downfall.",
        partOfSpeech: "noun"
      },
      {
        definition: "A long-standing rival; an archenemy.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His pride became his nemesis, ultimately causing his downfall.",
      "The detective had spent years tracking his nemesis, the elusive jewel thief.",
      "Procrastination was her nemesis throughout college."
    ]
  },
  {
    id: "quixotic",
    word: "Quixotic",
    pronunciation: "/kwɪkˈsɒtɪk/",
    definitions: [
      {
        definition: "Exceedingly idealistic; unrealistic and impractical.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Characterized by romantic idealism and impracticality.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "His quixotic plan to solve world hunger in a year earned sympathetic smiles from his colleagues.",
      "She pursued her quixotic dreams despite everyone telling her they were impossible.",
      "The quixotic nature of his proposals made them poetic but ultimately unfeasible."
    ]
  },
  {
    id: "ephemeral",
    word: "Ephemeral",
    pronunciation: "/ɪˈfɛm(ə)rəl/",
    definitions: [
      {
        definition: "Lasting for a very short time.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A plant that lives for just one growing season.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The beauty of cherry blossoms is ephemeral, lasting only about a week.",
      "Fame can be ephemeral, especially in the fast-paced world of social media.",
      "She specialized in ephemeral art installations that disappeared within hours."
    ]
  },
  {
    id: "mellifluous",
    word: "Mellifluous",
    pronunciation: "/məˈlɪfluəs/",
    definitions: [
      {
        definition: "Sweet or musical; pleasant to hear.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The singer's mellifluous voice captivated the entire audience.",
      "He had a mellifluous way of speaking that made even mundane topics interesting.",
      "The mellifluous sounds of the stream provided a perfect backdrop for meditation."
    ]
  }
];

export default words;
