import { AudioTranscription, Language } from '../../../types/listeningComprehension'

import iLikeReadingPart1 from '../raw-data/listening-comprehension//spanish/i-like-reading-part1.mp3'
import iLikeReadingPart2 from '../raw-data/listening-comprehension//spanish/i-like-reading-part2.mp3'
import iLikeReadingPart3 from '../raw-data/listening-comprehension//spanish/i-like-reading-part3.mp3'

import aikosBookSanctuaryPart1 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-part1.mp3'
import aikosBookSanctuaryPart2 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-part2.mp3'
import aikosBookSanctuaryPart3 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-part3.mp3'

/* eslint-disable @stylistic/js/max-len */
const japaneseAudioTranscriptions: AudioTranscription[] = [
  {
    name:'Aiko’s Book Sanctuary', slugName: 'aiko’s-book-sanctuary', contents: [
      { 
        englishText: 'Aiko loves reading books and finds comfort and excitement at her local library. Every Saturday morning, she spends hours exploring the shelves, searching for her next adventure or something interesting to learn. For Aiko, the library is more than just a place to read; it’s a quiet escape from her busy life. She enjoys the variety—one week, she might be lost in a historical novel, and the next, she’s reading a collection of poems or a book on psychology.',
        foreignText: '愛子さんは本を読むことが大好きで、地元の図書館で心の安らぎと楽しさを見つけています。毎週土曜日の朝、彼女は次の冒険や興味深い学びを探して、何時間も棚を歩き回ります。愛子さんにとって図書館はただの読書場所ではなく、忙しい日常からの静かな逃避場所です。週によって、歴史小説に没頭することもあれば、詩集や心理学の本を読むこともあります。',
        audioFile: aikosBookSanctuaryPart1
      },
      { 
        englishText: 'The calm atmosphere helps her focus, letting her dive deeply into each story. Aiko likes to sit by the large windows where sunlight fills the room, making each reading session feel warm and relaxing. She often brings a notebook to write down her favorite lines or new ideas she finds along the way.', 
        foreignText: '図書館の落ち着いた雰囲気は集中力を高めてくれ、物語に深く入り込むことができます。愛子さんは大きな窓のそばに座るのが好きで、そこから差し込む陽光が部屋を温かく照らし、リラックスした読書時間を過ごせます。彼女はお気に入りの文章や新しいアイデアを書き留めるために、ノートを持ってくることもあります。', 
        audioFile: aikosBookSanctuaryPart2

      },
      { 
        englishText: 'One of her favorite parts of the library is the sense of community. She enjoys talking with the librarian, who suggests new books, and sometimes chats with other readers. To Aiko, the library is a place of both learning and connection—a special space where she can grow and meet others who love books too.', 
        foreignText: '図書館で彼女が特に好きなのは、そこで感じるコミュニティの雰囲気です。司書さんと話をして新しい本を教えてもらったり、時々ほかの読書好きと会話を楽しんだりします。愛子さんにとって、図書館は学びとつながりの場所であり、成長でき、同じく本が好きな人々と出会える特別な場所なのです。',
        audioFile: aikosBookSanctuaryPart3

      },
      
    ] },
]

const spanishAudioTranscriptions: AudioTranscription[] = [
  // https://snappyspanish.com/beginner-spanish-story-the-feeling-of-winning/
  {
    name:'Me gusta leer', slugName: 'me-gusta-leer', contents: [
      { 
        englishText: 'Do you like reading? I read a book every week. And sometimes I read two books. Also, I’m a journalist and I have to read a lot at work. I’m a specialist in scientific news and everyday I write one article.', 
        foreignText: '¿Te gusta leer? Yo leo un libro todas las semanas. Y a veces, leo dos libros. Además, soy periodista y tengo que leer mucho en el trabajo. Soy especialista en noticias científicas y todos los días escribo un artículo.',
        audioFile: iLikeReadingPart1
      },
      { 
        englishText: 'I always buy books in this bookstore. It is very big, right? The owner’s name is Teresa and she is a very nice woman. Also, she knows alot about books. Every week I go to the bookstore to buy a new book. Sometimes, I don’t know which book to choose. So, I ask Teresa and she always says “The best books are those of Cervantes and Gabriel García Márquez”.', 
        foreignText: 'Yo siempre compro libros en esta librería. Es muy grande, ¿verdad? La dueña se llama Teresa y es una mujer muy simpática. Además, ella sabe mucho sobre libros. Todas las semanas voy a la librería a comprar un nuevo libro. A veces, no sé qué libro escoger. Entonces, yo pregunto a Teresa y ella siempre dice “Los mejores libros son los de Cervantes y Gabriel García Márquez”.', 
        audioFile: iLikeReadingPart2

      },
      { 
        englishText: 'At night, after dinner, I go to the living room to rest. I sit down, open a book and start to read. Sometimes, I listen to music at the same time. I like history books. I esepcially like biographies. The lives of actors, athletes or politicians are very interesting. And I always learn a lot of new things. Books are better than the television.', 
        foreignText: 'Por la noche, después de cenar, voy al salón a descansar. Me siento, abro un libro y empiezo a leer. A veces, escucho música al mismo tiempo. Me gustan los libros de historia. En especial, me gustan las biografías. La vida de actores, deportistas o políticos es muy interesante. Y yo siempre aprendo muchas cosas nuevas. Los libros son mejores que la televisión.',
        audioFile: iLikeReadingPart3

      },
      
    ] },
]

export const 
  languages: Language[] = 
        [
          { languageName: 'Spanish', audioTranscriptions: (spanishAudioTranscriptions) },
          { languageName: 'Japanese', audioTranscriptions: (japaneseAudioTranscriptions) },
        ]
      
