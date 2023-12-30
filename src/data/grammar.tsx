/* eslint-disable @stylistic/js/max-len */
// source for all these grammar rules: 
// https://www.spanish.academy/blog/spanish-grammar-for-beginners-8-parts-of-speech/
const spanishTopics: any[] = [
  {name:'definite article', contents: [' The definite article specificies which object, person, or place is being talked about. English only has one definite article, namely the word "the". For example we say "the car", or "the city" in English. Spanish on the other hand has 4 definite articles:','\0', '1) Masculine singular: el','2) Masculine plural: los', '3) Feminine singular: la', '4) Feminine plural: las','\0', 'For example the word for hand in Spanish is mano. Mano is a feminine noun in Spanish. Thus "the hand" is in Spanish "la mano".']}, 
  {name:'indefinite article', contents: [' The indefinite article is a non specific way to refer to a noun. English has two indefinite articles, namely "a" and "an". Spanish has 4 indefinite articles: ','\0', '1) Masculine singular: un', '2) Masculine plural: unos', '3) Feminine singular: una', '4) Feminine plural: unas', '\0', 'For example the word for eye in Spanish is ojo. Ojo is a masculine noun in Spanish. Thus "an eye" is in Spanish "un ojo".']},
  {name:'nouns', contents: ['In english a noun is a person, place, or a thing. This is the same for Spanish. The only difference is that Spanish nouns also have a gender, i.e masculine or feminine. So whenever you learn a noun in Spanish it helps to learn what the gender of that noun is.', '\0', 'Moreover many Spanish words have a specific ending that tells you that the word is a noun. For example: ',
    '\0', '-ción/-ión', '1) canción - song  ', '2) transición - transition', '3) aprobación - approval' , '\0', '-idad', '1) unidad - unity', '2) profundidad - depth', '3) hermandad - brother/sisterhood' , '\0', '-ez', '1) sencillez - simplicity', '2) fluidez - fluidity', '3) diez - ten' ]},

]

export const languages: any[] = 
        [
          {languageName: 'Spanish', topics: (spanishTopics)},
        ]
      
