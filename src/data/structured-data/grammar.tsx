/* eslint-disable @stylistic/js/max-len */
// source for all these grammar rules: 

import { GrammarLanguage, Topic } from '../../../types/learningSections/GrammarTypes'

const japaneseGrammarTopicSlugNames = {
  keigo: 'keigo',
  adjectives: 'adjectives',
}

const japaneseTopics: Topic[] = [
  { name:'Keigo', slugName: japaneseGrammarTopicSlugNames.keigo, contents: ['Keigo (敬語) is the Japanese system of polite or honorific language, used to show respect and social hierarchy. Essential in formal settings, it’s divided into three main types:','\0',
    'Sonkeigo (尊敬語) – Respectful Language: Used to elevate the status of the person you’re speaking about. Common in business or when speaking about superiors. For example, 行く (iku - to go) becomes いらっしゃる (irassharu).','\0',
    'Kenjougo (謙譲語) – Humble Language: Used to lower oneself, showing humility when talking about your own actions or those of your group. For instance, する (suru - to do) becomes いたす (itasu).','\0',
    'Teineigo (丁寧語) – Polite Language: Adds a general level of formality, often ending with -ます (masu) and -です (desu). It’s commonly used in everyday polite conversation.','\0',
    'Mastering keigo takes practice, as it involves specific word forms and vocabulary shifts. However, understanding keigo is essential for professional interactions and showing respect in Japanese culture.'
  ],
  isLocked: false
  }, 
]

export const languages: GrammarLanguage[] = 
        [
          { languageName: 'Japanese', topics: (japaneseTopics) },
        ]
      
