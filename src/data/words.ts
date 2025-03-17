
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
  },
  {
    id: "syzygy",
    word: "Syzygy",
    pronunciation: "/ˈsɪzɪdʒi/",
    definitions: [
      {
        definition: "An alignment of three celestial bodies (such as the sun, moon, and earth) in a straight line.",
        partOfSpeech: "noun"
      },
      {
        definition: "A pair of connected or corresponding things.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "A solar eclipse occurs during a syzygy of the sun, moon, and Earth.",
      "The poet explored the syzygy between human emotion and natural phenomena.",
      "Astronomers carefully track the timing of planetary syzygies to plan observations."
    ],
    isFeatured: true
  },
  {
    id: "defenestration",
    word: "Defenestration",
    pronunciation: "/dɪˌfɛnɪˈstreɪʃən/",
    definitions: [
      {
        definition: "The act of throwing someone or something out of a window.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The historical Defenestration of Prague in 1618 helped trigger the Thirty Years' War.",
      "His dramatic defenestration of the alarm clock every morning became a household joke.",
      "The novel climaxed with the defenestration of the incriminating documents just as the police arrived."
    ],
    isFeatured: true
  },
  {
    id: "palimpsest",
    word: "Palimpsest",
    pronunciation: "/ˈpælɪmpsɛst/",
    definitions: [
      {
        definition: "A manuscript or piece of writing material on which the original writing has been effaced to make room for later writing but of which traces remain.",
        partOfSpeech: "noun"
      },
      {
        definition: "Something reused or altered but still bearing visible traces of its earlier form.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Archaeologists discovered a medieval palimpsest with traces of an unknown Greek text beneath the visible Latin script.",
      "The city itself is a palimpsest, with Roman ruins visible beneath Renaissance architecture and modern developments.",
      "Her memoir reads like a palimpsest of memories, each layer partially obscuring yet revealing earlier experiences."
    ]
  },
  {
    id: "lacuna",
    word: "Lacuna",
    pronunciation: "/ləˈkuːnə/",
    definitions: [
      {
        definition: "An unfilled space or gap in a manuscript, text, or musical work.",
        partOfSpeech: "noun"
      },
      {
        definition: "A gap or missing part, especially in an abstract body of knowledge.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The damaged manuscript contained several lacunae that scholars have attempted to reconstruct.",
      "There remains a significant lacuna in our understanding of how these civilizations interacted.",
      "The professor identified an important lacuna in the current research on quantum gravity."
    ]
  },
  {
    id: "borborygmus",
    word: "Borborygmus",
    pronunciation: "/ˌbɔːrbəˈrɪɡməs/",
    definitions: [
      {
        definition: "A rumbling or gurgling noise made by the movement of fluid and gas in the intestines.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Her stomach's loud borborygmus during the quiet examination was embarrassing but perfectly normal.",
      "The medical student learned to distinguish between normal borborygmus and sounds indicating potential digestive issues.",
      "The silence in the library was broken only by the occasional borborygmus from a hungry student."
    ]
  },
  {
    id: "sonder",
    word: "Sonder",
    pronunciation: "/ˈsɒndər/",
    definitions: [
      {
        definition: "The profound realization that each random passerby is living a life as vivid and complex as your own.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Sitting in the busy cafe, she was overcome with sonder as she watched the countless lives intersecting around her.",
      "The documentary aimed to inspire sonder by portraying the rich inner lives of seemingly ordinary people.",
      "Travelers often report experiencing intense sonder when observing daily life in foreign cities."
    ],
    isFeatured: true
  },
  {
    id: "absquatulate",
    word: "Absquatulate",
    pronunciation: "/æbˈskwɒtʃəleɪt/",
    definitions: [
      {
        definition: "To leave somewhere abruptly.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "When the bill arrived, he absquatulated without paying his share.",
      "She planned to absquatulate from the boring conference as soon as she could do so unnoticed.",
      "The suspect absquatulated before the police could complete their investigation."
    ]
  },
  {
    id: "susurration",
    word: "Susurration",
    pronunciation: "/ˌsuːsəˈreɪʃən/",
    definitions: [
      {
        definition: "A soft murmuring or rustling sound; a whisper.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The susurration of leaves in the breeze was the only sound in the forest.",
      "There was a constant susurration of gossip following the unexpected announcement.",
      "The gentle susurration of the stream helped her fall asleep despite her worries."
    ]
  },
  {
    id: "eldritch",
    word: "Eldritch",
    pronunciation: "/ˈɛldrɪtʃ/",
    definitions: [
      {
        definition: "Strange or unnatural, especially in a way that inspires fear; weird and sinister.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "An eldritch howl echoed through the abandoned mansion, freezing everyone in their tracks.",
      "The ancient forest took on an eldritch quality as the mist descended at twilight.",
      "The author specialized in tales of eldritch horrors lurking just beyond human comprehension."
    ],
    isFeatured: true
  },
  {
    id: "hiraeth",
    word: "Hiraeth",
    pronunciation: "/hɪˈraɪθ/",
    definitions: [
      {
        definition: "A homesickness for a place that no longer exists or never was; a deep sense of nostalgia and longing.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "After decades abroad, she felt a profound hiraeth for the Wales of her childhood, which had changed beyond recognition.",
      "His poetry explores the hiraeth felt by displaced communities whose homelands have been transformed by war.",
      "The film evokes a universal hiraeth for simpler times that perhaps never truly existed."
    ],
    isFeatured: true
  },
  {
    id: "querencia",
    word: "Querencia",
    pronunciation: "/kəˈrɛnsiə/",
    definitions: [
      {
        definition: "A place where one feels safe, a place from which one's strength of character is drawn, a place where one feels at home.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The old library had become her querencia, a sanctuary where she could truly be herself.",
      "In bullfighting, a bull may establish a querencia in a particular part of the ring where it feels stronger.",
      "After years of wandering, he finally found his querencia in the small coastal village."
    ]
  },
  {
    id: "widdershins",
    word: "Widdershins",
    pronunciation: "/ˈwɪdərʃɪnz/",
    definitions: [
      {
        definition: "In a direction contrary to the sun's course, counterclockwise.",
        partOfSpeech: "adverb"
      },
      {
        definition: "In a direction opposite to the usual; contrary, reverse.",
        partOfSpeech: "adverb"
      }
    ],
    examples: [
      "Ancient superstitions warned against walking widdershins around a church.",
      "The ritual required participants to move widdershins around the stone circle three times.",
      "Her life seemed to be moving widdershins to everyone else's—sleeping during the day and working through the night."
    ]
  },
  {
    id: "meraki",
    word: "Meraki",
    pronunciation: "/meˈrɑːki/",
    definitions: [
      {
        definition: "The soul, creativity, or love put into something; the essence of yourself that is put into your work.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The handcrafted furniture was created with meraki, reflecting the artisan's passion and dedication.",
      "You can taste the meraki in her cooking—each dish contains a piece of her heritage and personal story.",
      "True artists approach their work with meraki, infusing each creation with their essence."
    ],
    isFeatured: true
  },
  {
    id: "osculate",
    word: "Osculate",
    pronunciation: "/ˈɒskjʊleɪt/",
    definitions: [
      {
        definition: "To kiss.",
        partOfSpeech: "verb"
      },
      {
        definition: "(Mathematics) To touch so as to have a common tangent at the point of contact.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "The romantic comedy ended with the protagonists finally osculating as the credits rolled.",
      "In mathematics, two curves are said to osculate when they touch at a single point and share the same tangent.",
      "Victorian literature often described characters osculating hands or cheeks as a sign of affection."
    ]
  },
  {
    id: "zugzwang",
    word: "Zugzwang",
    pronunciation: "/ˈzuːɡzwæŋ/",
    definitions: [
      {
        definition: "A situation, especially in chess, where a player is compelled to make a move that will worsen their position.",
        partOfSpeech: "noun"
      },
      {
        definition: "Any situation where one is forced to make a disadvantageous decision.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The chess master maneuvered her opponent into zugzwang, forcing a fatal move.",
      "The politician found himself in a political zugzwang: any response to the scandal would only damage his reputation further.",
      "Contract negotiations reached a zugzwang when neither side could concede without significant loss."
    ],
    isFeatured: true
  },
  {
    id: "logomachy",
    word: "Logomachy",
    pronunciation: "/lɒˈɡɒməki/",
    definitions: [
      {
        definition: "An argument or dispute about words or the meaning of words.",
        partOfSpeech: "noun"
      },
      {
        definition: "A battle fought with words; contentious rhetoric.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The academic conference devolved into logomachy rather than substantive debate about ideas.",
      "Politicians often engage in logomachy to avoid addressing the real issues at hand.",
      "What began as a simple disagreement escalated into a full-blown logomachy that lasted for hours."
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
      "Despite the snow on the ground, they enjoyed the apricity while having coffee on the south-facing terrace.",
      "The cat moved through the house throughout the day, following patches of apricity from window to window.",
      "There's a special quality to apricity that makes it more precious than summer's heat."
    ]
  },
  {
    id: "akrasia",
    word: "Akrasia",
    pronunciation: "/əˈkreɪziə/",
    definitions: [
      {
        definition: "The state of mind in which someone acts against their better judgment through weakness of will.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Though he knew he should be studying, akrasia led him to binge-watch another season of the show.",
      "The philosophy course examined akrasia as a central problem in understanding human behavior.",
      "Her repeated financial problems were less about ignorance and more about akrasia—she knew what she should do but couldn't bring herself to do it."
    ],
    isFeatured: true
  },
  {
    id: "scintilla",
    word: "Scintilla",
    pronunciation: "/sɪnˈtɪlə/",
    definitions: [
      {
        definition: "A tiny trace or spark of a specified quality or feeling.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "There wasn't a scintilla of evidence to support his wild claims.",
      "Even a scintilla of doubt should be enough to reconsider such a major decision.",
      "The detective searched for even a scintilla of proof that would link the suspect to the crime scene."
    ]
  },
  {
    id: "coruscate",
    word: "Coruscate",
    pronunciation: "/ˈkɒrəskeɪt/",
    definitions: [
      {
        definition: "To flash or sparkle; to emit flashes of light.",
        partOfSpeech: "verb"
      },
      {
        definition: "To display brilliant technique or style.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "Diamonds coruscated under the spotlights in the jewelry store display.",
      "Her coruscating wit made her a favorite guest on late-night talk shows.",
      "The ocean surface coruscated with countless reflections of the setting sun."
    ]
  },
  {
    id: "psithurism",
    word: "Psithurism",
    pronunciation: "/ˈsɪθərɪzəm/",
    definitions: [
      {
        definition: "The sound of wind in trees and rustling leaves.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "They sat in comfortable silence, listening to the psithurism of the forest around them.",
      "The psithurism outside her window was nature's perfect lullaby.",
      "Writers often mention psithurism when describing peaceful natural settings."
    ],
    isFeatured: true
  },
  {
    id: "crepuscular",
    word: "Crepuscular",
    pronunciation: "/krɪˈpʌskjʊlər/",
    definitions: [
      {
        definition: "Relating to or resembling twilight; dim.",
        partOfSpeech: "adjective"
      },
      {
        definition: "(Zoology) Becoming active at twilight or before sunrise, as certain insects and mammals.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The crepuscular light cast long shadows across the meadow.",
      "Rabbits are crepuscular animals, most active at dawn and dusk.",
      "The photographer specialized in capturing the crepuscular ambiance of cities just after sunset."
    ]
  },
  {
    id: "meliorism",
    word: "Meliorism",
    pronunciation: "/ˈmiːliərɪzəm/",
    definitions: [
      {
        definition: "The belief that the world can be made better by human effort.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Her philosophy combined pragmatism with meliorism—a conviction that dedicated effort could improve social conditions.",
      "The charity's mission statement reflected a strong sense of meliorism in its approach to global poverty.",
      "Despite setbacks, his meliorism never wavered; he remained convinced that positive change was possible."
    ]
  },
  {
    id: "quotidian",
    word: "Quotidian",
    pronunciation: "/kwɒˈtɪdiən/",
    definitions: [
      {
        definition: "Of or occurring every day; daily.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Ordinary or everyday, especially when mundane.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Her photographs find beauty in quotidian moments that most people overlook.",
      "The novel explores how extraordinary events disrupt the quotidian rhythms of small-town life.",
      "He found comfort in the quotidian routine of making coffee each morning."
    ]
  },
  {
    id: "aubade",
    word: "Aubade",
    pronunciation: "/əʊˈbɑːd/",
    definitions: [
      {
        definition: "A poem or piece of music appropriate to the dawn or early morning.",
        partOfSpeech: "noun"
      },
      {
        definition: "A song or poem of lovers separating at dawn.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The composer's aubade captured the gentle optimism of daybreak.",
      "John Donne's poem 'The Sun Rising' is a classic example of an aubade.",
      "She performed the traditional aubade from her balcony as the sun rose over the city."
    ]
  },
  {
    id: "dysania",
    word: "Dysania",
    pronunciation: "/dɪsˈeɪniə/",
    definitions: [
      {
        definition: "The state of finding it difficult to get out of bed in the morning.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His chronic dysania made him chronically late for morning meetings.",
      "Winter mornings intensified her dysania, making the warm bed nearly impossible to leave.",
      "The article suggested that dysania might be linked to certain sleep disorders or depression."
    ],
    isFeatured: true
  },
  {
    id: "hypnopompic",
    word: "Hypnopompic",
    pronunciation: "/ˌhɪpnəˈpɒmpɪk/",
    definitions: [
      {
        definition: "Relating to the semiconscious state immediately preceding waking up.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "She experienced vivid hypnopompic hallucinations that lingered briefly as she awakened.",
      "The hypnopompic state often produces unusual sensory experiences as the brain transitions to wakefulness.",
      "His artwork attempted to capture the strange logic and imagery of hypnopompic consciousness."
    ]
  },
  {
    id: "sempiternal",
    word: "Sempiternal",
    pronunciation: "/ˌsɛmpɪˈtɜːnl/",
    definitions: [
      {
        definition: "Eternal and unchanging; everlasting.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Their vows spoke of a sempiternal love that would transcend even death.",
      "Many religions posit a sempiternal afterlife or divine presence.",
      "The mountain stood as a sempiternal sentinel over the changing landscape below."
    ]
  },
  {
    id: "frangible",
    word: "Frangible",
    pronunciation: "/ˈfrændʒɪbl/",
    definitions: [
      {
        definition: "Easily broken or fragile.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The package was marked 'frangible' to ensure careful handling during shipping.",
      "They designed frangible bullets that would break apart upon impact to reduce the risk of ricochets.",
      "The archaeologist carefully excavated the frangible remains of the ancient pottery."
    ]
  },
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "The pleasant earthy smell after rain, especially after a long dry period.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The petrichor released by the sudden summer shower brought back childhood memories.",
      "Scientists have identified the chemical compounds responsible for petrichor.",
      "She opened the windows wide to let the petrichor fill the house."
    ],
    isFeatured: true
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
      "The beauty of the aurora borealis was truly ineffable.",
      "He struggled to describe the ineffable joy he felt holding his newborn child.",
      "Some religious experiences are considered ineffable, beyond the capacity of language to capture."
    ]
  },
  {
    id: "ethereal",
    word: "Ethereal",
    pronunciation: "/ɪˈθɪəriəl/",
    definitions: [
      {
        definition: "Extremely delicate and light in a way that seems not to be of this world.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Characterized by lightness and insubstantiality; intangible.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The dancer's ethereal movements seemed to defy gravity.",
      "Morning mist gave the landscape an ethereal quality.",
      "Her ethereal voice floated above the orchestral accompaniment."
    ]
  },
  {
    id: "numinous",
    word: "Numinous",
    pronunciation: "/ˈnjuːmɪnəs/",
    definitions: [
      {
        definition: "Having a strong religious or spiritual quality; indicating or suggesting the presence of a divinity.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The ancient cathedral had a numinous atmosphere that inspired reverence even in non-believers.",
      "Many people describe a numinous feeling when witnessing remarkable natural phenomena like eclipses.",
      "The artwork created a numinous space for contemplation and reflection."
    ],
    isFeatured: true
  },
  {
    id: "dendrochronology",
    word: "Dendrochronology",
    pronunciation: "/ˌdɛndrəʊkrəˈnɒlədʒi/",
    definitions: [
      {
        definition: "The science of dating events and environmental change by studying the annual growth rings in trees.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Using dendrochronology, researchers determined that the medieval building was constructed during a severe drought.",
      "Dendrochronology provides valuable data about climate patterns going back thousands of years.",
      "The archaeologist specialized in dendrochronology to date wooden artifacts from ancient settlements."
    ]
  },
  {
    id: "saudade",
    word: "Saudade",
    pronunciation: "/saʊˈdɑːdə/",
    definitions: [
      {
        definition: "A deep emotional state of melancholic longing for a person or thing that is absent or lost.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Portuguese fado music often expresses saudade for people, places, and times gone by.",
      "She felt an overwhelming saudade for her homeland while looking at old family photographs.",
      "The novel explores the immigrant experience through the lens of saudade."
    ],
    isFeatured: true
  },
  {
    id: "liminal",
    word: "Liminal",
    pronunciation: "/ˈlɪmɪnl/",
    definitions: [
      {
        definition: "Relating to a transitional or initial stage of a process.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Occupying a position at, or on both sides of, a boundary or threshold.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Airports are liminal spaces, existing between departure and arrival, between home and destination.",
      "Adolescence is a liminal phase between childhood and adulthood.",
      "The artwork explores the liminal states of consciousness between wakefulness and sleep."
    ],
    isFeatured: true
  },
  {
    id: "agastopia",
    word: "Agastopia",
    pronunciation: "/ˌæɡəˈstoʊpiə/",
    definitions: [
      {
        definition: "Admiration of a particular part of someone's body.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His poetry revealed an agastopia focused on his beloved's eyes.",
      "The art history lecture discussed how Renaissance portraits often reflected the artist's agastopia.",
      "Her agastopia for well-shaped hands influenced her career as a hand model photographer."
    ]
  },
  {
    id: "eucatastrophe",
    word: "Eucatastrophe",
    pronunciation: "/ˌjuːkəˈtæstrəfi/",
    definitions: [
      {
        definition: "A sudden and favorable resolution of events in a story; a happy ending.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Tolkien coined the term 'eucatastrophe' to describe the sudden joyous turn in fairy tales.",
      "The film's final scene provided a perfect eucatastrophe after two hours of mounting tension.",
      "Some critics argue that eucatastrophe in modern fiction often feels contrived and unearned."
    ]
  },
  {
    id: "kenopsia",
    word: "Kenopsia",
    pronunciation: "/kɛˈnɒpsiə/",
    definitions: [
      {
        definition: "The eerie, forlorn atmosphere of a place that's usually bustling with people but is now abandoned and quiet.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The kenopsia of the empty school during summer break was both peaceful and slightly unsettling.",
      "Urban explorers often seek out the kenopsia of abandoned buildings and forgotten places.",
      "The photograph captured the kenopsia of the amusement park after closing time."
    ],
    isFeatured: true
  },
  {
    id: "alexithymia",
    word: "Alexithymia",
    pronunciation: "/əˌlɛksɪˈθaɪmiə/",
    definitions: [
      {
        definition: "The inability to identify and describe emotions in oneself or others.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His alexithymia made it difficult for him to understand why his comments had upset his partner.",
      "The psychology course discussed alexithymia as a common feature in certain neurological conditions.",
      "She worked with a therapist to overcome her alexithymia and develop a richer emotional vocabulary."
    ]
  },
  {
    id: "desiderium",
    word: "Desiderium",
    pronunciation: "/ˌdɛsɪˈdɪəriəm/",
    definitions: [
      {
        definition: "An ardent desire or longing, especially a feeling of loss or grief for something gone.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The memoir was filled with desiderium for a childhood home that no longer existed.",
      "Even decades later, she felt a profound desiderium for the career she had abandoned.",
      "His poetry expresses a constant desiderium for a simpler, more authentic way of life."
    ]
  },
  {
    id: "novaturient",
    word: "Novaturient",
    pronunciation: "/ˌnoʊvəˈtjʊəriənt/",
    definitions: [
      {
        definition: "Desiring or seeking powerful change in one's life, behavior, or situation.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "After years in the same job, she felt novaturient and decided to pursue a completely different career.",
      "Novaturient travelers often seek experiences that will fundamentally challenge their worldview.",
      "His novaturient spirit led him to leave everything behind and start fresh in a new country."
    ],
    isFeatured: true
  },
  {
    id: "fernweh",
    word: "Fernweh",
    pronunciation: "/ˈfɛrnveː/",
    definitions: [
      {
        definition: "An ache for distant places; a craving for travel.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Stuck in his small town, he experienced intense fernweh whenever he saw travel documentaries.",
      "The pandemic intensified many people's fernweh as international travel became restricted.",
      "Her bedroom walls were covered with maps and photos of far-off places, a testament to her constant fernweh."
    ],
    isFeatured: true
  },
  {
    id: "kalopsia",
    word: "Kalopsia",
    pronunciation: "/kəˈlɒpsiə/",
    definitions: [
      {
        definition: "The delusion of things being more beautiful than they are.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Her kalopsia regarding the relationship prevented her from seeing its serious problems.",
      "New love often involves a degree of kalopsia that fades with time and familiarity.",
      "The travel brochure induced kalopsia with its carefully edited and enhanced photographs."
    ]
  },
  {
    id: "concinnity",
    word: "Concinnity",
    pronunciation: "/kənˈsɪnɪti/",
    definitions: [
      {
        definition: "Elegant arrangement or harmony of the different parts of something, especially in literary works.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The poem displayed remarkable concinnity, with each verse building perfectly upon the last.",
      "The architect's design was praised for its concinnity of form and function.",
      "Despite covering complex topics, her writing maintains a concinnity that makes it accessible and pleasant to read."
    ]
  },
  {
    id: "pandiculation",
    word: "Pandiculation",
    pronunciation: "/pændɪkjʊˈleɪʃən/",
    definitions: [
      {
        definition: "The act of stretching oneself, especially on waking.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The cat's morning pandiculation ritual included extending each leg one by one.",
      "Experts say that pandiculation is the body's natural way of transitioning from sleep to wakefulness.",
      "His luxurious pandiculation was interrupted by the blaring alarm clock."
    ]
  },
  {
    id: "weltschmerz",
    word: "Weltschmerz",
    pronunciation: "/ˈvɛltʃmɛrts/",
    definitions: [
      {
        definition: "A feeling of melancholy and world-weariness.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The poetry of the Romantic era often expressed a profound weltschmerz.",
      "Reading the news headlines induced a temporary weltschmerz that colored her whole day.",
      "His weltschmerz deepened as he realized how far reality fell short of his ideals."
    ],
    isFeatured: true
  },
  {
    id: "oneiric",
    word: "Oneiric",
    pronunciation: "/əʊˈnaɪrɪk/",
    definitions: [
      {
        definition: "Relating to dreams or dreaming.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The film director is known for creating oneiric sequences that blur the line between reality and fantasy.",
      "Her paintings have an oneiric quality, as if depicting scenes from half-remembered dreams.",
      "The novel's oneiric narrative makes it challenging but rewarding to follow."
    ]
  },
  {
    id: "nemophilist",
    word: "Nemophilist",
    pronunciation: "/nɛˈmɒfɪlɪst/",
    definitions: [
      {
        definition: "One who is fond of forests or forest scenery; a haunter of woods.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The dedicated nemophilist spent every weekend exploring different woodland trails.",
      "Thoreau might be considered America's most famous nemophilist, given his experiences at Walden Pond.",
      "As a passionate nemophilist, she could identify dozens of tree species by their bark alone."
    ]
  },
  {
    id: "anagnorisis",
    word: "Anagnorisis",
    pronunciation: "/ˌænəɡˈnɒrɪsɪs/",
    definitions: [
      {
        definition: "The moment in a play or story when a character makes a critical discovery or has a critical realization.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The protagonist's anagnorisis occurs when she finally understands the true intentions of her mentor.",
      "In Oedipus Rex, the anagnorisis is particularly devastating as Oedipus realizes his true identity.",
      "The film builds slowly toward an anagnorisis that forces the audience to reconsider everything they've seen."
    ]
  },
  {
    id: "verisimilitude",
    word: "Verisimilitude",
    pronunciation: "/ˌvɛrɪsɪˈmɪlɪtjuːd/",
    definitions: [
      {
        definition: "The appearance of being true or real.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The historical drama was praised for its verisimilitude in depicting 18th-century London.",
      "Good science fiction maintains verisimilitude by creating consistent rules for its imagined world.",
      "The courtroom scene lacked verisimilitude, containing procedures that would never happen in an actual trial."
    ]
  },
  {
    id: "sesquipedalian",
    word: "Sesquipedalian",
    pronunciation: "/ˌsɛskwɪpɪˈdeɪliən/",
    definitions: [
      {
        definition: "Given to using long words.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A long word.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His sesquipedalian writing style made the academic paper nearly impenetrable to the average reader.",
      "The professor was known for his sesquipedalian vocabulary, which intimidated new students.",
      "The word 'sesquipedalian' is itself an example of a sesquipedalian."
    ]
  },
  {
    id: "ephemeron",
    word: "Ephemeron",
    pronunciation: "/ɪˈfɛmərɒn/",
    definitions: [
      {
        definition: "Something that lasts for a notably brief time.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Social media trends are modern ephemera, often forgotten within days.",
      "The museum collected political ephemera such as campaign buttons and posters.",
      "A mayfly is the classic example of an ephemeron in the natural world."
    ]
  },
  {
    id: "nugatory",
    word: "Nugatory",
    pronunciation: "/ˈnjuːɡətəri/",
    definitions: [
      {
        definition: "Of no value or importance; trifling.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The contract included several nugatory clauses that added nothing substantial.",
      "His objections proved nugatory when the project received unanimous approval.",
      "She dismissed his concerns as nugatory details that wouldn't affect the outcome."
    ]
  },
  {
    id: "ultracrepidarian",
    word: "Ultracrepidarian",
    pronunciation: "/ˌʌltrəkrɛpɪˈdɛəriən/",
    definitions: [
      {
        definition: "Expressing opinions on matters outside the scope of one's knowledge or expertise.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A person who expresses opinions on matters outside the scope of their knowledge or expertise.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The talk show host's ultracrepidarian comments on complex scientific issues frequently frustrated actual experts.",
      "She was tired of ultracrepidarians on social media confidently dispensing medical advice without any qualifications.",
      "His ultracrepidarian tendencies diminished his credibility even when speaking about topics he genuinely understood."
    ],
    isFeatured: true
  },
  {
    id: "velleity",
    word: "Velleity",
    pronunciation: "/vɛˈliːɪti/",
    definitions: [
      {
        definition: "A wish or inclination not strong enough to lead to action.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His velleity to learn Japanese never progressed beyond purchasing a textbook that remained unopened.",
      "New Year's resolutions often remain mere velleities, abandoned by February.",
      "She had a persistent velleity to visit Antarctica, but never seriously researched or planned such a trip."
    ]
  },
  {
    id: "farrago",
    word: "Farrago",
    pronunciation: "/fəˈrɑːɡəʊ/",
    definitions: [
      {
        definition: "A confused mixture; a hodgepodge.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The report was a farrago of unsubstantiated claims and logical fallacies.",
      "The museum exhibition presented a farrago of artifacts from different periods with little coherent organization.",
      "His personal style was a farrago of influences from various decades and cultures."
    ]
  },
  {
    id: "recondite",
    word: "Recondite",
    pronunciation: "/ˈrɛkəndaɪt/",
    definitions: [
      {
        definition: "Little known; abstruse; difficult to understand.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The paper was filled with recondite terminology that only specialists in the field would recognize.",
      "She specialized in the most recondite aspects of medieval philosophy.",
      "His lectures were popular despite covering recondite subjects because he made them accessible to beginners."
    ]
  },
  {
    id: "mondegreen",
    word: "Mondegreen",
    pronunciation: "/ˈmɒndɪɡriːn/",
    definitions: [
      {
        definition: "A misinterpretation of a phrase as a result of mishearing it, especially in song lyrics.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The classic mondegreen 'excuse me while I kiss this guy' (instead of 'kiss the sky') from Jimi Hendrix's 'Purple Haze' is known by many.",
      "Children's songs are often full of mondegreens as young listeners try to make sense of unfamiliar words.",
      "The podcast collected listeners' favorite mondegreens, creating a hilarious compilation of misheard lyrics."
    ]
  },
  {
    id: "kakistocracy",
    word: "Kakistocracy",
    pronunciation: "/ˌkækɪˈstɒkrəsi/",
    definitions: [
      {
        definition: "Government by the least qualified or most unscrupulous citizens.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The satirist suggested that the country had devolved into a kakistocracy where incompetence was rewarded.",
      "Political scientists debate whether certain historical periods represent true kakistocracy or simply flawed leadership.",
      "The opinion piece warned that voter apathy could lead to kakistocracy if citizens abandoned their civic responsibilities."
    ],
    isFeatured: true
  },
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "The earthy scent produced when rain falls on dry soil.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "After months of drought, the petrichor from the first rainfall filled everyone with hope.",
      "The perfumer tried unsuccessfully to capture the elusive petrichor in a bottle.",
      "Nothing reminds her of childhood summers like the petrichor after a thunderstorm."
    ],
    isFeatured: true
  },
  {
    id: "lethologica",
    word: "Lethologica",
    pronunciation: "/ˌlɛθəˈlɒdʒɪkə/",
    definitions: [
      {
        definition: "The inability to remember a word or put your finger on the right word.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "He suffered from temporary lethologica during his presentation, forgetting key terms he had practiced.",
      "Stress and fatigue can worsen episodes of lethologica.",
      "The irony of experiencing lethologica when trying to remember the word 'lethologica' wasn't lost on her."
    ]
  },
  {
    id: "zeugma",
    word: "Zeugma",
    pronunciation: "/ˈzuːɡmə/",
    definitions: [
      {
        definition: "A figure of speech in which a word applies to two others in different senses or to two others of which it semantically suits only one.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The classic example of zeugma is 'She broke his car and his heart.'",
      "The headline used zeugma cleverly: 'Politician Loses Election and Mind.'",
      "Skilled comedians often employ zeugma to create unexpected humorous connections."
    ]
  },
  {
    id: "callipygian",
    word: "Callipygian",
    pronunciation: "/ˌkælɪˈpɪdʒiən/",
    definitions: [
      {
        definition: "Having well-shaped buttocks.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The ancient Greek statue was celebrated for its callipygian subject.",
      "The fitness instructor promised callipygian results from following the specialized exercise regimen.",
      "Art historians note that standards for callipygian beauty have varied across cultures and time periods."
    ]
  },
  {
    id: "chatoyant",
    word: "Chatoyant",
    pronunciation: "/ʃəˈtɔɪənt/",
    definitions: [
      {
        definition: "(Of a gemstone) having a changeable luster or color with an undulating narrow band of white light.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A gemstone, such as a cat's-eye, that displays chatoyancy.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The tiger's eye stone is prized for its chatoyant properties.",
      "The interior designer chose chatoyant silk fabrics that shifted color as visitors moved through the room.",
      "Her chatoyant eyes seemed to change from green to gold depending on the light."
    ]
  },
  {
    id: "hypocorism",
    word: "Hypocorism",
    pronunciation: "/haɪˈpɒkərɪzəm/",
    definitions: [
      {
        definition: "A pet name or diminutive form of a name.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "'Bobby' and 'Bob' are common hypocorisms for 'Robert.'",
      "Different cultures have distinctive patterns for forming hypocorisms from given names.",
      "The toddler couldn't pronounce his sister's name, creating an adorable hypocorism that the family adopted."
    ]
  },
  {
    id: "abstemious",
    word: "Abstemious",
    pronunciation: "/əbˈstiːmiəs/",
    definitions: [
      {
        definition: "Not self-indulgent, especially when eating and drinking.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Her abstemious lifestyle included a plant-based diet and no alcohol.",
      "The monk lived an abstemious existence, consuming only what was necessary for survival.",
      "Despite the lavish banquet, he remained abstemious, taking only small portions."
    ]
  },
  {
    id: "tarradiddle",
    word: "Tarradiddle",
    pronunciation: "/ˌtærəˈdɪdl/",
    definitions: [
      {
        definition: "A petty lie or fabrication.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The child told a charming tarradiddle about why the cookies had disappeared.",
      "The memoir was filled with tarradiddles that exaggerated the author's adventures.",
      "She considered the white lie a harmless tarradiddle to spare her friend's feelings."
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
      "The narrator's mellifluous voice made the audiobook a pleasure to listen to.",
      "The mellifluous tones of the cello filled the concert hall.",
      "Her mellifluous speech pattern reflected her extensive vocal training."
    ]
  },
  {
    id: "persiflage",
    word: "Persiflage",
    pronunciation: "/ˈpɜːsɪflɑːʒ/",
    definitions: [
      {
        definition: "Light, good-natured mockery or banter.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The dinner party was filled with witty persiflage rather than serious conversation.",
      "Their public interactions consisted mainly of affectionate persiflage that concealed their deep respect for each other.",
      "The talk show host was known for his skilled persiflage that put nervous guests at ease."
    ]
  },
  {
    id: "evanescent",
    word: "Evanescent",
    pronunciation: "/ˌɛvəˈnɛsnt/",
    definitions: [
      {
        definition: "Soon passing out of sight, memory, or existence; quickly fading or disappearing.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The evanescent beauty of cherry blossoms makes them all the more precious.",
      "Fame in the age of social media can be particularly evanescent.",
      "The photographer specialized in capturing evanescent moments of everyday life."
    ]
  },
  {
    id: "taradiddle",
    word: "Taradiddle",
    pronunciation: "/tæˈrædɪdl/",
    definitions: [
      {
        definition: "A petty lie; a fib.",
        partOfSpeech: "noun"
      },
      {
        definition: "Pretentious or empty talk; nonsense.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The child's story about where the missing cookies went was an obvious taradiddle.",
      "Politicians often resort to taradiddle when they don't want to address difficult questions directly.",
      "The memoir was an entertaining mixture of truth and taradiddle."
    ]
  },
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "The pleasant earthy smell after rain, especially after a long dry period.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The petrichor after the first rainfall in months reminded him of childhood summers.",
      "No artificial fragrance has successfully captured the complex scent of petrichor.",
      "She opened the windows wide to let the petrichor fill the house after the thunderstorm."
    ],
    isFeatured: true
  },
  {
    id: "sillage",
    word: "Sillage",
    pronunciation: "/siːˈjɑːʒ/",
    definitions: [
      {
        definition: "The trail of scent left by someone wearing perfume.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Her distinctive perfume left a sillage that lingered in the room long after she had departed.",
      "Luxury fragrances often boast of their impressive sillage and longevity.",
      "He could track her movement through the party by following her sillage."
    ]
  },
  {
    id: "mumpsimus",
    word: "Mumpsimus",
    pronunciation: "/ˈmʌmpsɪməs/",
    definitions: [
      {
        definition: "A traditional custom or notion that is adhered to despite being unreasonable.",
        partOfSpeech: "noun"
      },
      {
        definition: "A person who obstinately adheres to old customs or ideas in spite of evidence that they are wrong.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His mumpsimus about never updating software led to serious security vulnerabilities.",
      "The department was run by a mumpsimus who refused to consider any new methodologies.",
      "Despite scientific evidence to the contrary, she maintained her mumpsimus about the supposed health benefits."
    ]
  },
  {
    id: "lucubration",
    word: "Lucubration",
    pronunciation: "/ˌluːkjʊˈbreɪʃən/",
    definitions: [
      {
        definition: "Study or work done during the night.",
        partOfSpeech: "noun"
      },
      {
        definition: "The product of such study; an elaborate, often pedantic treatise.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The dissertation was the result of years of lucubration in the university library.",
      "His lucubrations on obscure philosophical questions filled several thick volumes.",
      "She preferred early morning work to evening lucubration."
    ]
  },
  {
    id: "anfractuous",
    word: "Anfractuous",
    pronunciation: "/ænˈfræktʃuəs/",
    definitions: [
      {
        definition: "Winding or circuitous; full of twists and turns.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The anfractuous mountain road made the journey twice as long as the straight-line distance would suggest.",
      "Her explanation was so anfractuous that everyone lost track of her original point.",
      "The anfractuous tunnels of the ancient catacomb confused even experienced guides."
    ]
  },
  {
    id: "vellichor",
    word: "Vellichor",
    pronunciation: "/ˈvɛlɪkɔːr/",
    definitions: [
      {
        definition: "The strange wistfulness of used bookshops, which are somehow infused with the passage of time.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The vellichor of the dusty bookshop transported her to another era.",
      "He spent hours browsing, enveloped in the vellichor of stacked shelves and forgotten tomes.",
      "The owner cultivated the vellichor of his bookstore, understanding its appeal to literary visitors."
    ],
    isFeatured: true
  },
  {
    id: "pareidolia",
    word: "Pareidolia",
    pronunciation: "/ˌpærɪˈdoʊliə/",
    definitions: [
      {
        definition: "The tendency to perceive a specific, often meaningful image in a random or ambiguous visual pattern.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Seeing faces in clouds is a common example of pareidolia.",
      "The scientist explained that supposed ghost sightings are often cases of pareidolia in low light conditions.",
      "The inkblot test relies on pareidolia to reveal patterns in the subject's thinking."
    ],
    isFeatured: true
  },
  {
    id: "conflate",
    word: "Conflate",
    pronunciation: "/kənˈfleɪt/",
    definitions: [
      {
        definition: "To combine or blend two or more elements into a whole.",
        partOfSpeech: "verb"
      },
      {
        definition: "To mistakenly treat two distinct concepts as the same.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "The student's essay conflated several different philosophical concepts, causing confusion.",
      "Media reports often conflate correlation with causation.",
      "The artwork conflated classical and modern imagery to create something surprisingly harmonious."
    ]
  },
  {
    id: "deliquescent",
    word: "Deliquescent",
    pronunciation: "/ˌdɛlɪˈkwɛsnt/",
    definitions: [
      {
        definition: "(Chemistry) Becoming liquid by absorbing moisture from the air.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Becoming fluid or soft; melting away.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Certain salts are highly deliquescent and must be stored in airtight containers.",
      "The ice sculpture became deliquescent in the afternoon sun.",
      "The painter captured the deliquescent quality of the sunset melting into the ocean."
    ]
  },
  {
    id: "quiddity",
    word: "Quiddity",
    pronunciation: "/ˈkwɪdɪti/",
    definitions: [
      {
        definition: "The inherent nature or essence of someone or something.",
        partOfSpeech: "noun"
      },
      {
        definition: "A distinctive feature; a peculiarity.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The philosophy course explored the quiddity of consciousness.",
      "Her photographs aimed to capture the quiddity of everyday objects.",
      "The novel's strength was its ability to convey the quiddity of life in a small rural community."
    ]
  },
  {
    id: "ennui",
    word: "Ennui",
    pronunciation: "/ɒnˈwiː/",
    definitions: [
      {
        definition: "A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The endless summer days at the country house filled the teenagers with ennui.",
      "Chronic ennui, rather than sadness, characterized his middle-aged crisis.",
      "The novel explores the ennui of suburban life and its unexpected consequences."
    ]
  },
  {
    id: "riparian",
    word: "Riparian",
    pronunciation: "/rɪˈpɛəriən/",
    definitions: [
      {
        definition: "Relating to or situated on the banks of a river.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A person who owns land along the bank of a natural watercourse.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Riparian vegetation helps prevent erosion and provides habitat for numerous species.",
      "The dispute between riparians over water rights went to court.",
      "Local conservation efforts focused on restoring damaged riparian zones."
    ]
  },
  {
    id: "soporific",
    word: "Soporific",
    pronunciation: "/ˌsɒpəˈrɪfɪk/",
    definitions: [
      {
        definition: "Tending to induce drowsiness or sleep.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A drug or substance that induces sleep.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The professor's monotonous voice had a soporific effect on the entire class.",
      "The herbal tea contained several natural soporifics to aid with insomnia.",
      "The soporific quality of the heavy meal made it difficult to return to work afterward."
    ]
  },
  {
    id: "apophenia",
    word: "Apophenia",
    pronunciation: "/ˌæpəˈfiːniə/",
    definitions: [
      {
        definition: "The tendency to perceive meaningful connections between unrelated things.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Conspiracy theories often result from apophenia, as people connect random events into patterns.",
      "The researcher cautioned against apophenia when looking for patterns in the data.",
      "Gamblers frequently exhibit apophenia, believing they can detect patterns in truly random outcomes."
    ],
    isFeatured: true
  },
  {
    id: "anodyne",
    word: "Anodyne",
    pronunciation: "/ˈænədaɪn/",
    definitions: [
      {
        definition: "Not likely to provoke dissent or offense; inoffensive, often deliberately so.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A medicine that relieves or soothes pain.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The politician gave an anodyne statement that avoided addressing the controversy directly.",
      "Traditional anodynes like willow bark contain natural salicylates similar to aspirin.",
      "The gallery displayed pleasant but anodyne landscapes that wouldn't challenge any viewer."
    ]
  },
  {
    id: "demesne",
    word: "Demesne",
    pronunciation: "/dɪˈmeɪn/",
    definitions: [
      {
        definition: "Land attached to a manor and retained for the owner's own use.",
        partOfSpeech: "noun"
      },
      {
        definition: "A region or domain.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The lord's demesne comprised the finest agricultural land on the estate.",
      "Quantum physics was considered outside her demesne of expertise.",
      "The castle and its surrounding demesne have been preserved as a historical site."
    ]
  },
  {
    id: "haecceity",
    word: "Haecceity",
    pronunciation: "/hɛkˈsiːɪti/",
    definitions: [
      {
        definition: "The quality that makes a thing the individual thing that it is; the essence of a particular thing.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The philosopher's work focused on the concept of haecceity in personal identity.",
      "The artist sought to capture the haecceity of each subject in her portraits.",
      "Identical twins may look the same, but each has their own haecceity that makes them unique."
    ]
  },
  {
    id: "epizeuxis",
    word: "Epizeuxis",
    pronunciation: "/ˌɛpɪˈzuːksɪs/",
    definitions: [
      {
        definition: "The repetition of a word or phrase in immediate succession, for emphasis or emotional effect.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Shakespeare used epizeuxis in Hamlet's soliloquy with 'Words, words, words.'",
      "The speech culminated in an emotional epizeuxis: 'Never, never, never give up.'",
      "Children naturally employ epizeuxis when they're excited: 'Now, now, now!'"
    ]
  },
  {
    id: "phosphene",
    word: "Phosphene",
    pronunciation: "/ˈfɒsfiːn/",
    definitions: [
      {
        definition: "A ring or spot of light produced by pressure on the eyeball or direct electrical stimulation of the visual system.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Rubbing your eyes can produce phosphenes, which appear as temporary flashes or patterns of light.",
      "The migraine started with phosphenes that obscured parts of her vision.",
      "Some meditation practitioners report seeing phosphenes during deep concentration."
    ]
  },
  {
    id: "chiaroscuro",
    word: "Chiaroscuro",
    pronunciation: "/kiˌɑːrəˈskjʊərəʊ/",
    definitions: [
      {
        definition: "The treatment of light and shade in drawing and painting.",
        partOfSpeech: "noun"
      },
      {
        definition: "An effect of contrasted light and shadow.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Rembrandt was a master of chiaroscuro, using dramatic lighting to create depth and mood.",
      "The black and white film used chiaroscuro techniques to enhance its noir atmosphere.",
      "The photographer's portraits featured striking chiaroscuro that highlighted the subject's facial structure."
    ]
  },
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "The pleasant smell that accompanies the first rain after a long period of dry weather.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "After months of drought, the petrichor from the first rainfall was intoxicating.",
      "Scientists have identified the chemical compounds responsible for petrichor.",
      "The perfumer attempted to capture petrichor in a new fragrance line."
    ],
    isFeatured: true
  },
  {
    id: "susurrus",
    word: "Susurrus",
    pronunciation: "/səˈsʊrəs/",
    definitions: [
      {
        definition: "A whispering or rustling sound.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The susurrus of leaves in the breeze was the only sound in the forest.",
      "She could hear the susurrus of hushed conversations as she entered the room.",
      "The poem attempted to capture in words the gentle susurrus of waves on a pebble beach."
    ]
  },
  {
    id: "blandishment",
    word: "Blandishment",
    pronunciation: "/ˈblændɪʃmənt/",
    definitions: [
      {
        definition: "Flattery or cajolery; something that tends to coax or flatter.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "All his blandishments failed to convince her to change her mind.",
      "The salesperson used expert blandishments to persuade customers to upgrade their purchases.",
      "She was immune to the blandishments of fame and fortune."
    ]
  },
  {
    id: "compunction",
    word: "Compunction",
    pronunciation: "/kəmˈpʌŋkʃən/",
    definitions: [
      {
        definition: "A feeling of guilt or moral scruple that prevents or follows the doing of something bad.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "He felt no compunction about lying to protect his friend.",
      "The executioner carried out his duties without compunction.",
      "Her compunction over the harsh words led her to apologize immediately."
    ]
  },
  {
    id: "lassitude",
    word: "Lassitude",
    pronunciation: "/ˈlæsɪtjuːd/",
    definitions: [
      {
        definition: "A state of physical or mental weariness; lack of energy.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The extreme heat caused a lassitude that made it difficult to concentrate.",
      "His chronic lassitude was eventually diagnosed as a symptom of an underlying health condition.",
      "A strange lassitude overcame her in the middle of the workday."
    ]
  },
  {
    id: "effervescent",
    word: "Effervescent",
    pronunciation: "/ˌɛfəˈvɛsnt/",
    definitions: [
      {
        definition: "Giving off bubbles; fizzy.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Vivacious and enthusiastic.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "She dropped the effervescent tablet into water and watched it dissolve.",
      "His effervescent personality made him the life of every gathering.",
      "The review praised the film's effervescent energy and wit."
    ]
  },
  {
    id: "obfuscate",
    word: "Obfuscate",
    pronunciation: "/ˈɒbfʌskeɪt/",
    definitions: [
      {
        definition: "To make obscure, unclear, or unintelligible.",
        partOfSpeech: "verb"
      },
      {
        definition: "To bewilder or confuse someone.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "The politician tried to obfuscate the issue with technical jargon.",
      "The contract's language was deliberately obfuscated to hide unfavorable terms.",
      "Programmers sometimes obfuscate their code to protect intellectual property."
    ]
  },
  {
    id: "ailurophile",
    word: "Ailurophile",
    pronunciation: "/aɪˈlʊərəfaɪl/",
    definitions: [
      {
        definition: "A cat lover.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "As an ailurophile, she couldn't resist adopting yet another rescue cat.",
      "The café was designed specifically for ailurophiles who wanted to enjoy coffee in feline company.",
      "Ancient Egyptians were known ailurophiles, even worshipping cats as sacred animals."
    ]
  },
  {
    id: "desultory",
    word: "Desultory",
    pronunciation: "/ˈdɛsəltəri/",
    definitions: [
      {
        definition: "Lacking a plan, purpose, or enthusiasm; random, disconnected.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The conversation was desultory, jumping from topic to topic without any real engagement.",
      "She made a desultory attempt to clean the apartment before giving up.",
      "His desultory approach to studying resulted in poor exam performance."
    ]
  },
  {
    id: "ineluctable",
    word: "Ineluctable",
    pronunciation: "/ˌɪnɪˈlʌktəbl/",
    definitions: [
      {
        definition: "Unable to be avoided or escaped; inevitable.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Death is an ineluctable fact of life.",
      "The committee faced the ineluctable conclusion that the project had failed.",
      "There was an ineluctable logic to her argument that no one could refute."
    ]
  },
  {
    id: "cantankerous",
    word: "Cantankerous",
    pronunciation: "/kænˈtæŋkərəs/",
    definitions: [
      {
        definition: "Bad-tempered, argumentative, and uncooperative.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The cantankerous old man shouted at children who ventured near his property.",
      "She became increasingly cantankerous as the meeting dragged on without resolution.",
      "The reviewer was known for his cantankerous critiques of even the most popular restaurants."
    ]
  },
  {
    id: "languor",
    word: "Languor",
    pronunciation: "/ˈlæŋɡə/",
    definitions: [
      {
        definition: "A state of pleasant tiredness or dreaminess.",
        partOfSpeech: "noun"
      },
      {
        definition: "A lack of energy or vitality; listlessness.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The afternoon heat induced a pleasant languor that made it impossible to work.",
      "She moved with the languor of someone who had nowhere particular to be.",
      "The tropical setting of the novel is characterized by an oppressive languor that affects all the characters."
    ]
  },
  {
    id: "insouciant",
    word: "Insouciant",
    pronunciation: "/ɪnˈsuːsiənt/",
    definitions: [
      {
        definition: "Showing a casual lack of concern; indifferent.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "He responded to the crisis with insouciant ease, as if such emergencies were everyday occurrences.",
      "Her insouciant attitude toward deadlines frustrated her more conscientious colleagues.",
      "The character's insouciant charm made him appealing despite his moral failings."
    ]
  },
  {
    id: "saudade",
    word: "Saudade",
    pronunciation: "/saʊˈdɑːdə/",
    definitions: [
      {
        definition: "A deep emotional state of melancholic longing for a person or thing that is absent.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Portuguese fado music often expresses saudade for people and places lost to time.",
      "Looking at old photographs filled her with saudade for her childhood home.",
      "The immigrant's memoir captured the saudade felt for a homeland that existed now only in memory."
    ],
    isFeatured: true
  },
  {
    id: "obstreperous",
    word: "Obstreperous",
    pronunciation: "/əbˈstrɛpərəs/",
    definitions: [
      {
        definition: "Noisy and difficult to control.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The obstreperous children made it impossible to hear the museum guide.",
      "After a few drinks, he became obstreperous and had to be asked to leave.",
      "The obstreperous debate in parliament made headlines the next day."
    ]
  },
  {
    id: "jejune",
    word: "Jejune",
    pronunciation: "/dʒɪˈdʒuːn/",
    definitions: [
      {
        definition: "Lacking in nutritive value.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Naive, simplistic, or superficial.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Dull; insipid.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The critic dismissed the bestseller as jejune entertainment with no literary merit.",
      "His jejune understanding of international politics led him to propose unrealistic solutions.",
      "The documentary offered a refreshing alternative to the jejune content on most channels."
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
      "His quixotic plan to eliminate world hunger in a year earned sympathetic smiles.",
      "She pursued her quixotic dream of becoming an astronaut despite all obstacles.",
      "The quixotic project consumed all his savings before ultimately failing."
    ]
  },
  {
    id: "perfidious",
    word: "Perfidious",
    pronunciation: "/pəˈfɪdiəs/",
    definitions: [
      {
        definition: "Deceitful and untrustworthy.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The hero was betrayed by his perfidious friend in the final chapter.",
      "Her perfidious behavior destroyed all trust within the team.",
      "The diplomatic cables revealed the seemingly friendly nation to be a perfidious ally."
    ]
  },
  {
    id: "phantasmagoria",
    word: "Phantasmagoria",
    pronunciation: "/ˌfæntæzməˈɡɔːriə/",
    definitions: [
      {
        definition: "A sequence of real or imaginary images like those seen in a dream.",
        partOfSpeech: "noun"
      },
      {
        definition: "An exhibition of optical illusions and other visual effects.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The fever induced a phantasmagoria of strange creatures and landscapes.",
      "The film was a phantasmagoria of surreal images and discordant sounds.",
      "The fairground's hall of mirrors created a phantasmagoria that delighted and disoriented visitors."
    ]
  },
  {
    id: "maladroit",
    word: "Maladroit",
    pronunciation: "/ˌmæləˈdrɔɪt/",
    definitions: [
      {
        definition: "Ineffective or clumsy; not skillful.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "His maladroit attempt at an apology only made the situation worse.",
      "The maladroit handling of the crisis led to a wave of resignations.",
      "She felt maladroit at the formal dinner, unsure which fork to use for each course."
    ]
  },
  {
    id: "inchoate",
    word: "Inchoate",
    pronunciation: "/ɪnˈkəʊət/",
    definitions: [
      {
        definition: "Just begun and so not fully formed or developed; rudimentary.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Confused or incoherent.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The protest movement remained inchoate, lacking clear leadership or demands.",
      "She had only an inchoate understanding of the complex legal issues involved.",
      "His inchoate thoughts on the subject gradually crystallized into a coherent theory."
    ]
  },
  {
    id: "torpid",
    word: "Torpid",
    pronunciation: "/ˈtɔːpɪd/",
    definitions: [
      {
        definition: "Mentally or physically inactive; lethargic.",
        partOfSpeech: "adjective"
      },
      {
        definition: "(Of an animal) dormant from a lowered body temperature and metabolic rate.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The extreme heat left everyone torpid and unable to concentrate.",
      "Many reptiles become torpid during cold weather.",
      "The economy remained torpid despite attempts to stimulate growth."
    ]
  },
  {
    id: "trenchant",
    word: "Trenchant",
    pronunciation: "/ˈtrɛntʃənt/",
    definitions: [
      {
        definition: "Vigorous or incisive in expression or style.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Sharp; cutting.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Her trenchant analysis of the policy revealed its fundamental flaws.",
      "The book review was so trenchant that the author publicly responded to defend his work.",
      "His trenchant wit made him a popular but feared dinner guest."
    ]
  },
  {
    id: "verisimilitude",
    word: "Verisimilitude",
    pronunciation: "/ˌvɛrɪsɪˈmɪlɪtjuːd/",
    definitions: [
      {
        definition: "The appearance of being true or real.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The historical novel was praised for its verisimilitude in depicting ancient Rome.",
      "The film's verisimilitude was enhanced by extensive on-location shooting.",
      "Scientific accuracy adds verisimilitude to science fiction, making the impossible seem plausible."
    ]
  },
  {
    id: "denouement",
    word: "Denouement",
    pronunciation: "/deɪˈnuːmɒ̃/",
    definitions: [
      {
        definition: "The final part of a play, movie, or narrative in which the strands of the plot are drawn together and matters are explained or resolved.",
        partOfSpeech: "noun"
      },
      {
        definition: "The outcome of a situation, when something is decided or made clear.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The denouement revealed that the butler was indeed the murderer all along.",
      "After months of negotiations, the denouement came swiftly when both parties signed the agreement.",
      "Critics felt the denouement was rushed and left too many questions unanswered."
    ]
  },
  {
    id: "petrichor",
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    definitions: [
      {
        definition: "The earthy scent produced when rain falls on dry soil.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "After months of drought, the petrichor from the first rainfall filled everyone with hope.",
      "The perfumer tried unsuccessfully to capture the elusive petrichor in a bottle.",
      "Nothing reminds her of childhood summers like the petrichor after a thunderstorm."
    ],
    isFeatured: true
  },
  {
    id: "erstwhile",
    word: "Erstwhile",
    pronunciation: "/ˈɜːstwaɪl/",
    definitions: [
      {
        definition: "Former; onetime.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The erstwhile allies soon became bitter competitors.",
      "She ran into her erstwhile neighbor at the conference.",
      "The erstwhile champion watched from the sidelines as a new record was set."
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
      "The beauty of the aurora borealis was truly ineffable.",
      "He experienced an ineffable joy when reunited with his long-lost sister.",
      "The mystic described an ineffable sense of oneness with the universe during meditation."
    ]
  },
  {
    id: "perspicacious",
    word: "Perspicacious",
    pronunciation: "/ˌpɜːspɪˈkeɪʃəs/",
    definitions: [
      {
        definition: "Having keen mental perception and understanding; discerning.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "Her perspicacious analysis identified problems that others had missed entirely.",
      "The perspicacious detective noticed the subtle inconsistency in the suspect's story.",
      "As a perspicacious investor, she anticipated market trends before they became obvious."
    ]
  },
  {
    id: "redolent",
    word: "Redolent",
    pronunciation: "/ˈrɛdələnt/",
    definitions: [
      {
        definition: "Strongly reminiscent or suggestive of something.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Having a strong or pleasant smell.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The old letters were redolent of a bygone era.",
      "The kitchen was redolent with the aroma of freshly baked bread.",
      "His writing style is redolent of Hemingway's spare prose."
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
      }
    ],
    examples: [
      "The beauty of cherry blossoms is ephemeral, lasting only about a week.",
      "Internet memes are typically ephemeral, forgotten almost as quickly as they appear.",
      "The ephemeral nature of fame in the digital age can be psychologically challenging for celebrities."
    ]
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
      "Meeting her future business partner was pure serendipity—they were seated next to each other on a delayed flight.",
      "Many scientific discoveries have resulted from serendipity rather than deliberate research.",
      "The perfect job opening appeared with such serendipity that she couldn't ignore it."
    ],
    isFeatured: true
  },
  {
    id: "bibliophile",
    word: "Bibliophile",
    pronunciation: "/ˈbɪbliəfʌɪl/",
    definitions: [
      {
        definition: "A person who has a great love for books or reading.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "As a dedicated bibliophile, he spent most weekends browsing secondhand bookshops.",
      "The rare book auction attracted bibliophiles from around the world.",
      "Her apartment revealed her as a bibliophile, with bookshelves covering every available wall."
    ]
  },
  {
    id: "collywobbles",
    word: "Collywobbles",
    pronunciation: "/ˈkɒliwɒblz/",
    definitions: [
      {
        definition: "A state of intestinal disorder, usually accompanied by a rumbling stomach.",
        partOfSpeech: "noun"
      },
      {
        definition: "A feeling of fear, apprehension, or nervousness.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "Public speaking always gave him a bad case of the collywobbles.",
      "She complained of collywobbles after eating the questionable street food.",
      "The anticipation of the job interview gave her collywobbles all morning."
    ]
  },
  {
    id: "cicisbeo",
    word: "Cicisbeo",
    pronunciation: "/ˌtʃɪtʃɪzˈbeɪəʊ/",
    definitions: [
      {
        definition: "A married woman's male companion or lover in 18th-century Italy.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The historical novel depicted the complex social role of the cicisbeo in Venetian society.",
      "The countess appeared at the opera with her husband on one arm and her cicisbeo on the other.",
      "The institution of the cicisbeo was a formalized aspect of aristocratic Italian life, though it scandalized foreign visitors."
    ]
  },
  {
    id: "lambent",
    word: "Lambent",
    pronunciation: "/ˈlæmbənt/",
    definitions: [
      {
        definition: "(Of light or fire) glowing, gleaming, or flickering with a soft radiance.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Brilliantly playful, lightness of touch, especially in literary or artistic expression.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The room was illuminated by the lambent flame of a single candle.",
      "Her essay on urban life revealed a lambent wit that never became caustic.",
      "The sunset cast a lambent light across the ocean."
    ]
  },
  {
    id: "lithomorphic",
    word: "Lithomorphic",
    pronunciation: "/lɪθəˈmɔːfɪk/",
    definitions: [
      {
        definition: "Resembling a stone or rock; having the form of stone.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The landscape featured lithomorphic sculptures that blended naturally with the rocky terrain.",
      "The architect designed lithomorphic concrete structures that seemed to have been carved from the mountain itself.",
      "Over centuries, the wooden pillars had undergone lithomorphic transformation, mineralizing into stone-like structures."
    ]
  },
  {
    id: "inure",
    word: "Inure",
    pronunciation: "/ɪˈnjʊə/",
    definitions: [
      {
        definition: "To accustom (someone) to something, especially something unpleasant.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "Soldiers become inured to hardship through rigorous training.",
      "Years of rejection had inured her to criticism.",
      "Working in emergency medicine gradually inured him to the sight of severe injuries."
    ]
  },
  {
    id: "peripatetic",
    word: "Peripatetic",
    pronunciation: "/ˌpɛrɪpəˈtɛtɪk/",
    definitions: [
      {
        definition: "Traveling from place to place, especially working or based in various places for relatively short periods.",
        partOfSpeech: "adjective"
      },
      {
        definition: "A person who travels from place to place.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "His peripatetic lifestyle made it difficult to maintain long-term relationships.",
      "She worked as a peripatetic music teacher, visiting five different schools each week.",
      "The peripatetic nature of the consultant's job meant he was rarely home for more than a few days at a time."
    ]
  },
  {
    id: "acatalepsy",
    word: "Acatalepsy",
    pronunciation: "/ˌækəˈtælɪpsi/",
    definitions: [
      {
        definition: "The impossibility of comprehending or knowing something with certainty.",
        partOfSpeech: "noun"
      }
    ],
    examples: [
      "The philosopher's work centered on acatalepsy, arguing that absolute knowledge is unattainable.",
      "The mystery of consciousness represents a form of acatalepsy that continues to challenge scientists and philosophers alike.",
      "Her essay explored the acatalepsy inherent in trying to fully understand another person's subjective experience."
    ]
  },
  {
    id: "nidificate",
    word: "Nidificate",
    pronunciation: "/nɪˈdɪfɪkeɪt/",
    definitions: [
      {
        definition: "To build a nest.",
        partOfSpeech: "verb"
      }
    ],
    examples: [
      "The ornithologist studied how different bird species nidificate using various materials and techniques.",
      "Swallows typically nidificate under eaves or inside buildings.",
      "Some wasps nidificate in the ground rather than building exposed paper nests."
    ]
  },
  {
    id: "zaftig",
    word: "Zaftig",
    pronunciation: "/ˈzɑːftɪɡ/",
    definitions: [
      {
        definition: "(Of a woman) having a full, rounded figure; pleasingly plump.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The painter was known for his portraits of zaftig women, a contrast to the fashion industry's ideals.",
      "Historical beauty standards often preferred zaftig figures, as evidenced in Renaissance art.",
      "The actress embraced her zaftig physique rather than pursuing the industry's typical slender aesthetic."
    ]
  },
  {
    id: "scintillating",
    word: "Scintillating",
    pronunciation: "/ˈsɪntɪleɪtɪŋ/",
    definitions: [
      {
        definition: "Sparkling or shining brightly.",
        partOfSpeech: "adjective"
      },
      {
        definition: "Brilliantly and excitingly clever or skillful.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The night sky was scintillating with countless stars.",
      "Her scintillating wit made her the most sought-after dinner guest in the city.",
      "The critic described the performance as scintillating, captivating the audience from start to finish."
    ]
  },
  {
    id: "umbriferous",
    word: "Umbriferous",
    pronunciation: "/ʌmˈbrɪfərəs/",
    definitions: [
      {
        definition: "Casting or making shade.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "They sought relief from the summer heat under the umbriferous oak trees.",
      "The architect designed umbriferous courtyards to create cool spaces in the hot climate.",
      "The umbriferous forest canopy prevented much sunlight from reaching the forest floor."
    ]
  },
  {
    id: "panglossian",
    word: "Panglossian",
    pronunciation: "/pænˈɡlɒsiən/",
    definitions: [
      {
        definition: "Excessively optimistic, regardless of the circumstances.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "His Panglossian outlook on the failing business was at odds with the financial reality.",
      "The Panglossian belief that technology will solve all environmental problems prevents necessary immediate action.",
      "Despite repeated setbacks, she maintained a Panglossian faith that everything would work out perfectly."
    ]
  },
  {
    id: "ulotrichous",
    word: "Ulotrichous",
    pronunciation: "/juːˈlɒtrɪkəs/",
    definitions: [
      {
        definition: "Having woolly or crispy hair.",
        partOfSpeech: "adjective"
      }
    ],
    examples: [
      "The anthropology paper discussed the distribution of ulotrichous populations around the world.",
      "His ulotrichous hair formed tight coils that he wore in a natural style.",
      "The ulotrichous texture of the sheep's coat made it particularly valuable for certain types of wool production."
    ]
  }
];

export default words;
