/* eslint-disable @stylistic/js/max-len */

import { AudioTranscriptionWithFourAlphabet, ComprehensionLanguage } from '../../../types/learningSections/ComprehensionTypes'

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
] 
export const 
  languages: ComprehensionLanguage[] = 
        [
          { languageName: 'Japanese', audioTranscriptions: (japaneseAudioTranscriptions), numForeignAlphabets: 4 },
        ]
      
