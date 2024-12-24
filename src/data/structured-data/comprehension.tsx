import { AudioTranscriptionWithFourAlphabet, AudioTranscriptionWithOneAlphabet, ComprehensionLanguage } from '../../../types/learningSections/ComprehensionTypes'

import shoppingForFamilyMealsParagraph1 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1.mp3'
import shoppingForFamilyMealsParagraph2 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2.mp3'
import shoppingForFamilyMealsParagraph3 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3.mp3'

import shoppingForFamilyMealsParagraph1Sentence1 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence1.mp3'
import shoppingForFamilyMealsParagraph1Sentence2 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence2.mp3'
import shoppingForFamilyMealsParagraph1Sentence3 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence3.mp3'
import shoppingForFamilyMealsParagraph1Sentence4 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence4.mp3'
import shoppingForFamilyMealsParagraph1Sentence5 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence5.mp3'
import shoppingForFamilyMealsParagraph1Sentence6 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph1-sentence6.mp3'

import shoppingForFamilyMealsParagraph2Sentence1 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence1.mp3'
import shoppingForFamilyMealsParagraph2Sentence2 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence2.mp3'
import shoppingForFamilyMealsParagraph2Sentence3 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence3.mp3'
import shoppingForFamilyMealsParagraph2Sentence4 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence4.mp3'
import shoppingForFamilyMealsParagraph2Sentence5 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence5.mp3'
import shoppingForFamilyMealsParagraph2Sentence6 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence6.mp3'
import shoppingForFamilyMealsParagraph2Sentence7 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph2-sentence7.mp3'

import shoppingForFamilyMealsParagraph3Sentence1 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence1.mp3'
import shoppingForFamilyMealsParagraph3Sentence2 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence2.mp3'
import shoppingForFamilyMealsParagraph3Sentence3 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence3.mp3'
import shoppingForFamilyMealsParagraph3Sentence4 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence4.mp3'
import shoppingForFamilyMealsParagraph3Sentence5 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence5.mp3'
import shoppingForFamilyMealsParagraph3Sentence6 from '../raw-data/listening-comprehension//spanish/shopping-for-family-meals-paragraph3-sentence6.mp3'

import aikosBookSanctuaryParagraph1 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph1.mp3'
import aikosBookSanctuaryParagraph2 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph2.mp3'
import aikosBookSanctuaryParagraph3 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph3.mp3'

import aikosBookSanctuaryParagraph1Sentence1 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph1-sentence1.mp3'
import aikosBookSanctuaryParagraph1Sentence2 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph1-sentence2.mp3'
import aikosBookSanctuaryParagraph1Sentence3 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph1-sentence3.mp3'
import aikosBookSanctuaryParagraph1Sentence4 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph1-sentence4.mp3'

import aikosBookSanctuaryParagraph2Sentence1 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph2-sentence1.mp3'
import aikosBookSanctuaryParagraph2Sentence2 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph2-sentence2.mp3'
import aikosBookSanctuaryParagraph2Sentence3 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph2-sentence3.mp3'

import aikosBookSanctuaryParagraph3Sentence1 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph3-sentence1.mp3'
import aikosBookSanctuaryParagraph3Sentence2 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph3-sentence2.mp3'
import aikosBookSanctuaryParagraph3Sentence3 from '../raw-data/listening-comprehension/japanese/aiko-book-sanctuary-paragraph3-sentence3.mp3'

/* eslint-disable @stylistic/js/max-len */
const japaneseComprehensionTopicSlugNames = {
  aikosBookSanctuary: 'aikos-book-sanctuary'
}
const japaneseAudioTranscriptions: AudioTranscriptionWithFourAlphabet[] = [
  {
    name:'Aiko’s Book Sanctuary', slugName: japaneseComprehensionTopicSlugNames.aikosBookSanctuary, contents: [
      { sentences: [
        { 
          englishText: 'Aiko loves reading books and finds comfort and excitement at her local library.',
          foreignText: [
            'Aiko-san wa hon o yomu koto ga daisuki de, jimoto no toshokan de kokoro no yasuragi to tanoshisa o mitsuketeimasu.',
            'あいこさんはほんをよむことがだいすきで、じもとのとしょかんでこころのやすらぎとたのしさをみつけています。',
            'あいこさん は ほん を よむ こと が だいすき で、 じもと の としょかん で こころ の やすらぎ と たのしさ を みつけています。',
            '愛子さんは本を読むことが大好きで、地元の図書館で心の安らぎと楽しさを見つけています。'
          ],
          audioFile: aikosBookSanctuaryParagraph1Sentence1
        },
        { 
          englishText: 'Every Saturday morning, she spends hours exploring the shelves, searching for her next adventure or something interesting to learn.',
          foreignText: [
            'Maishuu doyoubi no asa, kanojo wa tsugi no bouken ya kyoumi-bukai manabi o sagashite, nanjikan mo tana o arukimawari masu.',
            'まいしゅうどようびのあさ、かのじょはつぎのぼうけんやきょうみぶかいまなびをさがして、なんじかんもたなをあるきまわります。',
            'まいしゅう どようび の あさ、 かのじょ は つぎ の ぼうけん や きょうみぶかい まなび を さがして、 なんじかん も たな を あるきまわり ます。',
            '毎週土曜日の朝、彼女は次の冒険や興味深い学びを探して、何時間も棚を歩き回ります。'
          ],
          audioFile: aikosBookSanctuaryParagraph1Sentence2
        }, 
        { 
          englishText: 'For Aiko, the library is more than just a place to read; it’s a quiet escape from her busy life.',
          foreignText: [
            'Aiko-san ni totte toshokan wa tada no dokusho basho de wa naku, isogashii nichijou kara no shizuka na touhi basho desu.',
            'あいこさんにとってとしょかんはただのどくしょばしょではなく、いそがしいにちじょうからのしずかなとうひばしょです。',
            'あいこさん に とって としょかん は ただ の どくしょ ばしょ で は なく、 いそがしい にちじょう から の しずか な とうひ ばしょ です。',
            '愛子さんにとって図書館はただの読書場所ではなく、忙しい日常からの静かな逃避場所です。'
          ],
          audioFile: aikosBookSanctuaryParagraph1Sentence3
        }, 
        { 
          englishText: 'She enjoys the variety—one week, she might be lost in a historical novel, and the next, she’s reading a collection of poems or a book on psychology.',
          foreignText: [
            'Shuu ni yotte, rekishi shousetsu ni bottou suru koto mo areba, shishuu ya shinrigaku no hon o yomu koto mo arimasu.',
            'しゅうによって、れきししょうせつにぼっとうすることもあれば、ししゅうやしんりがくのほんをよむこともあります。',
            'しゅう に よって、 れきし しょうせつ に ぼっとう する こと も あれば、 ししゅう や しんりがく の ほん を よむ こと も あります。',
            '週によって、歴史小説に没頭することもあれば、詩集や心理学の本を読むこともあります。'
          ],
          audioFile: aikosBookSanctuaryParagraph1Sentence4
        },
      ],
      audioFile: aikosBookSanctuaryParagraph1
      },
      { sentences: [
        { 
          englishText: 'The calm atmosphere helps her focus, letting her dive deeply into each story.', 
          foreignText: [
            'Toshokan no ochitsuita fun’iki wa shuchuuryoku o takamete kure, monogatari ni fukaku hairikomu koto ga dekimasu.',
            'としょかんのおちついたふんいきはしゅうちゅうりょくをたかめてくれ、ものがたりにふかくはいりこむことができます。',
            'としょかん の おちついた ふんいき は しゅうちゅうりょく を たかめて くれ、 ものがたり に ふかく はいりこむ こと が できます。',
            '図書館の落ち着いた雰囲気は集中力を高めてくれ、物語に深く入り込むことができます。',
          ],
          audioFile: aikosBookSanctuaryParagraph2Sentence1
        },
              
        { 
          englishText: 'Aiko likes to sit by the large windows where sunlight fills the room, making each reading session feel warm and relaxing.', 
          foreignText: [
            'Aiko-san wa ookina mado no soba ni suwaru no ga suki de, soko kara sashikomu youkou ga heya o atatakaku terashi, rirakkusu shita dokusho jikan o sugoseru masu.',
            'あいこさんはおおきなまどのそばにすわるのがすきで、そこからさしこむようこうがへやをあたたかくてらし、リラックスしたどくしょじかんをすごせるます。',
            'あいこさん は おおきな まど の そば に すわる の が すき で、 そこ から さしこむ ようこう が へや を あたたかく てらし、 リラックス した どくしょじかん を すごせる ます。',
            '愛子さんは大きな窓のそばに座るのが好きで、そこから差し込む陽光が部屋を暖かく照らし、リラックスした読書時間を過ごせます。'
          ],
          audioFile: aikosBookSanctuaryParagraph2Sentence2
        },      
        { 
          englishText: 'She often brings a notebook to write down her favorite lines or new ideas she finds along the way.', 
          foreignText: [
            'Kanojo wa okiniiri no bunshou ya atarashii aidea o kakitomeru tame ni, nooto o motte kuru koto mo arimasu.',
            'かのじょはおきにいりのぶんしょうやあたらしいアイデアをかきとめるために、ノートをもってくることもあります。',
            'かのじょ は おきにいり の ぶんしょう や あたらしい アイデア を かきとめる ため に、 ノート を もって くる こと も あります。',
            '彼女はお気に入りの文章や新しいアイデアを書き留めるために、ノートを持ってくることもあります。'
          ],
          audioFile: aikosBookSanctuaryParagraph2Sentence3
        },
      ],
      audioFile: aikosBookSanctuaryParagraph2
      },
      {
        sentences: [
          { 
            englishText: 'One of her favorite parts of the library is the sense of community.', 
            foreignText: [
              'Toshokan de kanojo ga toku ni suki na no wa, soko de kanjiru komyuniti no fun’iki desu.',
              'としょかんでかのじょがとくにすきなのは、そこでかんじるコミュニティのふんいきです。',
              'としょかん で かのじょ が とくに すき な の は、 そこで かんじる コミュニティ の ふんいき です。',
              '図書館で彼女が特に好きなのは、そこで感じるコミュニティの雰囲気です。'
            ],
            audioFile: aikosBookSanctuaryParagraph3Sentence1
          },
          { 
            englishText: 'She enjoys talking with the librarian, who suggests new books, and sometimes chats with other readers.', 
            foreignText: [
              'Shishosan to hanashi o shite atarashii hon o oshiete morattari, tokidoki hoka no dokushozuki to kaiwa o tanoshindari shimasu.',
              'ししょさんとはなしをしてあたらしいほんをおしえてもらったり、ときどきほかのどくしょずきとかいわをたのしんだりします。',
              'ししょさん と はなし を して あたらしい ほん を おしえて もらったり、 ときどき ほか の どくしょずき と かいわ を たのしんだり します。',
              '司書さんと話をして新しい本を教えてもらったり、時々ほかの読書好きと会話を楽しんだりします。'
            ],
            audioFile: aikosBookSanctuaryParagraph3Sentence2
          }, 
          { 
            englishText: 'To Aiko, the library is a place of both learning and connection—a special space where she can grow and meet others who love books too.', 
            foreignText: [
              'Aiko-san ni totte, toshokan wa manabi to tsunagari no basho de ari, seichou deki, onajiku hon ga suki na hitobito to deairu tokubetsu na basho na no desu.',
              'あいこさんにとって、としょかんはまなびとつながりのばしょであり、せいちょうでき、おなじくほんがすきなひとびととであえるとくべつなばしょなのです。',
              'あいこさん に とって、 としょかん は まなび と つながり の ばしょ で  あり、 せいちょう でき、 おなじく ほん が すき な ひとびと と であえる とくべつ な ばしょ な の です。',
              '愛子さんにとって、図書館は学びとつながりの場所であり、成長でき、同じく本が好きな人々と出会える特別な場所なのです。'
            ],
            audioFile: aikosBookSanctuaryParagraph3Sentence3
          },
        ],
        audioFile: aikosBookSanctuaryParagraph3
      }
    ],
    isLocked: false
  },
  /*
  {
    name:'Rai Plays Tennis', slugName: 'rai-plays-tennis', contents: [
      { sentences:[
        { 
          englishText: 'Rai, a boy who loved tennis, spent every afternoon at the nearby park, practicing at the tennis courts. At first, he struggled to swing his racket correctly and often missed the ball. However, Rai didn’t give up and continued to practice, gradually improving his skills.',
          foreignText: [
            'Aiko-san wa hon o yomu koto ga daisuki de, jimoto no toshokan de kokoro no yasuragi to tanoshisa o mitsuketeimasu. Maishuu doyoubi no asa, kanojo wa tsugi no bouken ya kyoumi-bukai manabi o sagashite, nanjikan mo tana o arukimawari masu. Aiko-san ni totte toshokan wa tada no dokusho basho de wa naku, isogashii nichijou kara no shizuka na touhi basho desu. Shuu ni yotte, rekishi shousetsu ni bottou suru koto mo areba, shishuu ya shinrigaku no hon o yomu koto mo arimasu.',
            'あいこさんはほんをよむことがだいすきで、じもとのとしょかんでこころのやすらぎとたのしさをみつけています。まいしゅうどようびのあさ、かのじょはつぎのぼうけんやきょうみぶかいまなびをさがして、なんじかんもたなをあるきまわります。あいこさんにとってとしょかんはただのどくしょばしょではなく、いそがしいにちじょうからのしずかなとうひばしょです。しゅうによって、れきししょうせつにぼっとうすることもあれば、ししゅうやしんりがくのほんをよむこともあります。',
            '',
            'ライという名前の少年は、テニスが大好きだった。毎日放課後、近くの公園にあるテニスコートに行っては練習に励んでいた。彼は最初、ラケットを上手に振ることができず、ボールを何度も外してしまった。しかし、ライは諦めずに練習を続け、少しずつ上達していった。'
          ],
          audioFile: aikosBookSanctuaryParagraph1
        },
      ],
      audioFile: aikosBookSanctuaryParagraph1
      },
      { sentences:[
        { 
          englishText: 'One day, Rai entered a junior tennis tournament held at the park. Although he was nervous at the start, once the match began, he was able to play confidently. Rai faced strong serves and smashes from his opponents but responded calmly. The spectators cheered him on, and Rai was able to perform even better under the pressure.',
          foreignText: [
            'Toshokan no ochitsuita fun’iki wa shuchuuryoku o takamete kure, monogatari ni fukaku hairikomu koto ga dekimasu. Aiko-san wa ookina mado no soba ni suwaru no ga suki de, soko kara sashikomu youkou ga heya o atataku terashi, rirakkusu shita dokusho jikan o sugoseru masu. Kanojo wa okiniiri no bunshou ya atarashii aidea o kakitomeru tame ni, nooto o motte kuru koto mo arimasu.',
            'としょかんの落ち着いたふんいきはしゅうちゅうりょくをたかめてくれ、ものがたりにふかくはいりこむことができます。あいこさんはおおきなまどのそばにすわるのがすきで、そこからさしこむようこうがへやをあたたかくてらし、リラックスしたどくしょじかんをすごせます。かのじょはおきにいりのぶんしょうやあたらしいアイデアをかきとめるために、ノートをもってくることもあります。',
            '',
            'ある日、公園で行われるジュニアテニス大会に参加することになった。ライは最初は緊張していたが、試合が始まると自信を持ってプレーできるようになった。彼は、相手の強いサーブやスマッシュにも負けず、冷静に対応していった。周りの観客からは応援の声が上がり、ライはますます力を出すことができた。'
          ],
          audioFile: aikosBookSanctuaryParagraph2
        },
      ],
      audioFile: aikosBookSanctuaryParagraph1
      }, 
      { sentences:[
        { 
          englishText: 'In the end, Rai won the tournament. Tears filled his eyes as he received the trophy, celebrating with his family and friends. Rai realized that through continued effort, he could overcome any challenge, and this victory strengthened his resolve to keep playing tennis in the future.',
          foreignText: [
            'Toshokan de kanojo ga toku ni suki na no wa, soko de kanjiru komyuniti no fun’iki desu. Shishosan to hanashi o shite atarashii hon o oshiete morattari, tokidoki hoka no dokushozuki to kaiwa o tanoshindari shimasu. Aiko-san ni totte, toshokan wa manabi to tsunagari no basho de ari, seichou deki, onajiku hon ga suki na hitobito to deairu tokubetsu na basho na no desu.',
            'としょかんでかのじょがとくにすきなのは、そこでかんじるコミュニティのふんいきです。ししょさんとはなしをしてあたらしいほんをおしえてもらったり、ときどきほかのどくしょずきと会話をたのしんだりします。あいこさんにとって、としょかんはまなびとつながりのばしょであり、せいちょうでき、おなじくほんがすきなひとびととであえるとくべつなばしょなのです。',
            '',
            '最終的に、ライはその大会で優勝を果たした。彼は涙を浮かべながらトロフィーを手にし、家族や友達と一緒に喜びを分かち合った。ライは、努力を続ければどんな困難も乗り越えられることを実感し、これからもテニスを続けていく決意を新たにした。'
          ],
          audioFile: aikosBookSanctuaryParagraph3
        },
      ],
      audioFile: aikosBookSanctuaryParagraph1
      },
    ],
    isLocked: true
  },
  */
] 

const spanishComprehensionTopicSlugNames = {
  shoppingForFamilyMeals: 'shopping-for-family-meals'
}
const spanishAudioTranscriptions: AudioTranscriptionWithOneAlphabet[] = [
  // https://snappyspanish.com/beginner-spanish-story-the-feeling-of-winning/
  {
    name:'Shopping for Family Meals', slugName: spanishComprehensionTopicSlugNames.shoppingForFamilyMeals, contents: [
      { 
        sentences: [
          { 
            englishText: 'Every week, I go to the grocery store to buy food for my family.', 
            foreignText: ['Cada semana, voy al supermercado a comprar comida para mi familia.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence1
          },
          { 
            englishText: 'It’s one of my favorite tasks because I love cooking.', 
            foreignText: ['Es una de mis tareas favoritas porque me encanta cocinar.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence2
          }, 
          { 
            englishText: 'As I walk through the store, I start in the fresh produce section.', 
            foreignText: ['Al caminar por la tienda, empiezo en la sección de productos frescos.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence3
          }, 
          { 
            englishText: 'I pick up bright red apples, green lettuce, and ripe bananas.', 
            foreignText: ['Tomo manzanas rojas brillantes, lechuga verde y plátanos maduros.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence4
          }, 
          { 
            englishText: 'The smell of fresh fruits and vegetables always makes me feel good.', 
            foreignText: ['El olor de las frutas y verduras frescas siempre me hace sentir bien.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence5
          },
          { 
            englishText: 'I love the colors, too; everything looks so fresh and inviting.', 
            foreignText: ['También me encantan los colores; todo se ve tan fresco y atractivo.'],
            audioFile: shoppingForFamilyMealsParagraph1Sentence6
          },
        ],
        audioFile: shoppingForFamilyMealsParagraph1
      },
      { 
        sentences: [
          { 
            englishText: 'Next, I head to the bakery.', 
            foreignText: ['A continuación, me dirijo a la panadería.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence1
          },
          { 
            englishText: 'I can’t resist the soft, warm bread.', 
            foreignText: ['No puedo resistirme al pan suave y caliente.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence2
          }, 
          { 
            englishText: 'I choose a loaf of whole wheat and some sweet pastries for breakfast.', 
            foreignText: ['Elijo un pan integral y algunos pasteles dulces para el desayuno.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence3
          }, 
          { 
            englishText: 'The smell of baked goods fills the air, making my mouth water.', 
            foreignText: ['El aroma de los productos horneados llena el aire, haciendo que se me haga agua la boca.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence4
          }, 
          { 
            englishText: 'Then, I go to the meat section.', 
            foreignText: ['Luego, voy a la sección de carne.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence5
          }, 
          { 
            englishText: 'I look for chicken breasts and ground beef, checking the packages to find the freshest options.', 
            foreignText: ['Busco pechugas de pollo y carne molida, revisando los paquetes para encontrar las opciones más frescas.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence6
          }, 
          { 
            englishText: 'I always try to pick lean cuts to keep our meals healthy.', 
            foreignText: ['Siempre trato de elegir cortes magros para mantener nuestras comidas saludables.'], 
            audioFile: shoppingForFamilyMealsParagraph2Sentence7
          },
        ],
        audioFile: shoppingForFamilyMealsParagraph2
      }, 
      { 
        sentences: [
          { 
            englishText: 'Finally, I visit the dairy aisle, grabbing some milk, cheese, and yogurt.', 
            foreignText: ['Finalmente, visito la sección de lácteos, agarrando leche, queso y yogur.'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence1
          },
          { 
            englishText: 'I like to eat healthy, so I also pick up a few boxes of whole grain cereal.', 
            foreignText: ['Me gusta comer sano, así que también llevo algunas cajas de cereales integrales.'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence2
          },
          { 
            englishText: 'As I make my way to the snack aisle, I choose some nuts and dark chocolate for treats.', 
            foreignText: ['A medida que me dirijo a la sección de snacks, elijo algunos frutos secos y chocolate negro para mis antojos.'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence3
          },
          { 
            englishText: 'As I finish my shopping, I feel satisfied.', 
            foreignText: ['Cuando termino de comprar, me siento satisfecho.'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence4
          },
          { 
            englishText: 'I love filling my cart with good food, ready to make delicious meals for my family.', 
            foreignText: ['Me encanta llenar mi carrito con buena comida, lista para preparar deliciosas comidas para mi familia.'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence5
          },
          { 
            englishText: 'Shopping at the grocery store is a simple joy in my week!', 
            foreignText: ['¡Hacer las compras en el supermercado es una alegría simple en mi semana!'],
            audioFile: shoppingForFamilyMealsParagraph3Sentence6
          },
        ],
        audioFile: shoppingForFamilyMealsParagraph3
      },
    ],
    isLocked: false
  },
]

export const 
  languages: ComprehensionLanguage[] = 
        [
          { languageName: 'Spanish', audioTranscriptions: (spanishAudioTranscriptions), numForeignAlphabets: 1 },
          { languageName: 'Japanese', audioTranscriptions: (japaneseAudioTranscriptions), numForeignAlphabets: 4 },
        ]
      
