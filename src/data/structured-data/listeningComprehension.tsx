import { AudioTranscription, Language } from '../../../types/listeningComprehension'

import iLikeReading from '../raw-data/listening-comprehension/i-like-reading.mp3'

/* eslint-disable @stylistic/js/max-len */
const japaneseAudioTranscriptions: AudioTranscription[] = [
  // source: http://tomray.me/stories/momotarou.html
  // { name:'Momotarou, the Peach Boy', slugName: 'mpb', contents: [
  //   'むかし、 むかし、 ある ところ に', 'おじいさん と おばあさん が いました。',
  //   'おじいさん が 山（やま） へ 木（き） を きり に いけば、',
  //   'おばあさん は 川（かわ） へ せんたく に でかけます。',
  //   '「おじいさん、 はよう もどって きなされ。」',
  //   '「おばあさん も き を つけて な。」',
  //   'まい日（にち） やさしく いい あって でかけます。'
  // ] }, 
]

const spanishAudioTranscriptions: AudioTranscription[] = [
  // https://snappyspanish.com/beginner-spanish-story-the-feeling-of-winning/
  {
    name:'Me gusta leer', slugName: 'mgl', contents: [
      { 
        englishText: 'Do you like reading? I read a book every week. And sometimes I read two books. Also, I’m a journalist and I have to read a lot at work. I’m a specialist in scientific news and everyday I write one article.', 
        foreignText: '¿Te gusta leer? Yo leo un libro todas las semanas. Y a veces, leo dos libros. Además, soy periodista y tengo que leer mucho en el trabajo. Soy especialista en noticias científicas y todos los días escribo un artículo.' 
      },
      { 
        englishText: 'I always buy books in this bookstore. It is very big, right? The owner’s name is Teresa and she is a very nice woman. Also, she knows alot about books. Every week I go to the bookstore to buy a new book. Sometimes, I don’t know which book to choose. So, I ask Teresa and she always says “The best books are those of Cervantes and Gabriel García Márquez”.', 
        foreignText: 'Yo siempre compro libros en esta librería. Es muy grande, ¿verdad? La dueña se llama Teresa y es una mujer muy simpática. Además, ella sabe mucho sobre libros. Todas las semanas voy a la librería a comprar un nuevo libro. A veces, no sé qué libro escoger. Entonces, yo pregunto a Teresa y ella siempre dice “Los mejores libros son los de Cervantes y Gabriel García Márquez”.' 
      },
      { 
        englishText: 'At night, after dinner, I go to the living room to rest. I sit down, open a book and start to read. Sometimes, I listen to music at the same time. I like history books. I esepcially like biographies. The lives of actors, athletes or politicians are very interesting. And I always learn a lot of new things. Books are better than the television.', 
        foreignText: 'Por la noche, después de cenar, voy al salón a descansar. Me siento, abro un libro y empiezo a leer. A veces, escucho música al mismo tiempo. Me gustan los libros de historia. En especial, me gustan las biografías. La vida de actores, deportistas o políticos es muy interesante. Y yo siempre aprendo muchas cosas nuevas. Los libros son mejores que la televisión.' 
      },
      
    ], audioFile: iLikeReading },
]

export const 
  languages: Language[] = 
        [
          { languageName: 'Japanese', audioTranscriptions: (japaneseAudioTranscriptions) },
          { languageName: 'Spanish', audioTranscriptions: (spanishAudioTranscriptions) },
        ]
      
