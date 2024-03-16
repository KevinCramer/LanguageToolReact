/* eslint-disable @stylistic/js/max-len */
// source for all these grammar rules: 

import { Language, Topic } from '../../types/grammarTypes'

// https://www.spanish.academy/blog/spanish-grammar-for-beginners-8-parts-of-speech/
const spanishTopics: Topic[] = [
  { name:'definite article', slugName: 'def', contents: [' The definite article specificies which object, person, or place is being talked about. English only has one definite article, namely the word "the". For example we say "the car", or "the city" in English. Spanish on the other hand has 4 definite articles:','\0', '1) Masculine singular: el','2) Masculine plural: los', '3) Feminine singular: la', '4) Feminine plural: las','\0', 'For example the word for hand in Spanish is mano. Mano is a feminine noun in Spanish. Thus "the hand" is in Spanish "la mano".'] }, 
  { name:'indefinite article', slugName: 'ind', contents: [' The indefinite article is a non specific way to refer to a noun. English has two indefinite articles, namely "a" and "an". Spanish has 4 indefinite articles: ','\0', '1) Masculine singular: un', '2) Masculine plural: unos', '3) Feminine singular: una', '4) Feminine plural: unas', '\0', 'For example the word for eye in Spanish is ojo. Ojo is a masculine noun in Spanish. Thus "an eye" is in Spanish "un ojo".'] },
  { name:'nouns', slugName: 'nou', contents: ['In english a noun is a person, place, or thing. This is the same for Spanish. The only difference is that Spanish nouns also have a gender, i.e masculine or feminine. So whenever you learn a noun in Spanish it helps to learn what the gender of that noun is. Moreover Many Spanish words have a specific ending that tells you that the word is a noun.',
    '\0', 'Spanish Noun Ending:','\0', '-ción/-ión', '1) canción - song  ', '2) transición - transition', '3) aprobación - approval' , '\0', '-idad', '1) unidad - unity', '2) profundidad - depth', '3) hermandad - brother/sisterhood' , '\0', '-ez', '1) sencillez - simplicity', '2) fluidez - fluidity', '3) diez - ten' ] },
  { name:'adjectives',slugName: 'adj', contents: ['An adjective describes a noun, i.e it describes a person, place, or thing. In Spanish the adjective comes before the noun, and the adjective is modified depending on the gender and plurality of the noun it describes. Here are some examples:','\0', 'Alto hombre = tall man (masculine singular)', 'Alta mujer = tall woman (feminine singular)','Altos niños =  tall children (masculine plural)', 'Atlas niñas = tall girls (feminine plural)' ] },
  { name:'verbs', slugName: 'ver', contents: ['Verbs describe an action or state of being, and every sentence has a verb. Verbs have a neutral state called the infinitive. However most sentences do not use the infinitive form of a verb. Instead they use a conjugated form of the verb. Which indicates whether the action or state of being is in the past, present, or future, as well as who is doing the state of being. Their are AR, ER, IR verbs as well as irregular verbs in Spanish.' ] },

]

export const languages: Language[] = 
        [
          { languageName: 'Spanish', topics: (spanishTopics) },
        ]
      
