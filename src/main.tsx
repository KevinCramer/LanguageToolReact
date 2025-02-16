import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux-store/store'
import { Helmet } from 'react-helmet'

// Meta Data Configuration
const routesMeta = {
  '/': {
    title: 'LingoCommand - Learn Japanese Faster',
    meta: [
      { name: 'description', content: 'Fast-track your Japanese language studies with LingoCommand! Our innovative technology lets you customise study sessions to align with your goals and learning style.' },
      { name: 'keywords', content: 'japanese language learning, japanese language, learn japanese, japanese language study tools, fast japanese language learning, online japanese language courses, japanese language practice, japanese language learning platform, japanese' },
    ],
  },
  '/contact': {
    title: 'Contact',
    meta: [
      { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
      { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram, Facebook, LinkedIn' },
    ],
  },
  '/about': {
    title: 'About',
    meta: [
      { name: 'description', content: 'LingoCommand is an educational platform for learning Japanese. It accelerates progress by combining these three key principles: customisable exercises, active recall, and repeated exposure. ' },
      { name: 'keywords', content: 'LingoCommand overview, learn japanese platform, customizable learning tools, educational language app, active recall, repeated exposure, innovative learning methods, accelerated Japanese studies' },
    ],
  },
  '/japanese/home-page': {
    title: 'Japanese',
    meta: [
      { name: 'description', content: 'LingoCommand helps beginners learn Japanese and gain confidence in their skills. We also offer valuable content for advanced users.' },
      { name: 'keywords', content: 'Japanese, language studies, beginners course, advanced course, study guide, writing systems, vocabulary, grammar, listening and reading comprehension.' },
    ],
  },
  '/japanese/study-guide': {
    title: 'Japanese Study Guide',
    meta: [
      { name: 'description', content: 'This Japanese language study guide provides a step by step breakdown on how to learn the Japanese language including all the resources you will need.' },
      { name: 'keywords', content: 'Japanese language study guide, japanese writing systems, step by step guide, hiragana, katakana, kanji, how to type Japanese, vocabulary, comprehension.' },
    ],
  },
  '/japanese/writing-systems-explained': {
    title: 'Japanese Writing Systems Explained',
    meta: [
      { name: 'description', content: 'The Japanese language has 3 writing systems: Hiragana - a phonetic writing system used for native japanese words. Katakana - a phonetic writing system mainly used for loan words from other languages. Kanji - a non phonetic writing system. (It has over 50,000 characters).' },
      { name: 'keywords', content: 'Japanese writing systems explained, hiragana, katakana, kanji, how to write Japanese' },
    ],
  },
  '/japanese/hiragana-explained?lesson=1': {
    title: 'Lesson 1 - Basic Hiragana',
    meta: [
      { name: 'description', content: 'Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. Basic hiragana has 46 sounds.' },
      { name: 'keywords', content: 'hiragana, japanese writing systems, japanese pronunciation, basics of japanese, phonetic script, hiragana sounds, how to write Japanese. ' },
    ],
  },
  '/japanese/hiragana-explained?lesson=2': {
    title: 'Lesson 2 - Hiragana with Dakuten and Handakuten',
    meta: [
      { name: 'description', content: 'Dakuten and handakuten are marks added on top of hiragana that alter pronunciation. The dakuten mark is ( ゛). There are 20 dakuten variations. For example: か (ka) → が (ga). ' },
      { name: 'keywords', content: 'hiragana, dakuten, handakuten, japanese writing systems, japanese pronunciation, basics of japanese, phonetic script, hiragana sounds, How to write Japanese' },
    ],
  },
  '/japanese/hiragana-explained?lesson=3': {
    title: 'Lesson 3 - Yoōn Hiragana',
    meta: [
      { name: 'description', content: 'Some hiragana combine to form Yōon sounds. In these combinations, the first character remains full-sized, while the second is smaller. There are 36 of these combinations in total.' },
      { name: 'keywords', content: 'hiragana, japanese writing systems, yoōn, japanese pronunciation, basics of japanese, phonetic script, hiragana sounds, How to write Japanese' },
    ],
  },
  '/japanese/katakana-explained?lesson=1': {
    title: 'Lesson 1 - Basic Katakana',
    meta: [
      { name: 'description', content: 'Katakana is mapinly used to write Japanese loan words. For example in Japanese the word for `camera` is カメラ (kamera). Learning all 5 concepts below is essential to learning Japanese.' },
      { name: 'keywords', content: 'katakana, japanese loan words, japanese writing systems, phonetic script, learn japanese, katakana usage, How to write Japanese' },
    ],
  },
  '/japanese/katakana-explained?lesson=2': {
    title: 'Lesson 2 - Katakana with Dakuten and Handakuten',
    meta: [
      { name: 'description', content: 'Dakuten and handakuten are marks added on top of katakana (and hiragana) that alter pronunciation. The dakuten mark is ( ゛). There are 20 dakuten variations.' },
      { name: 'keywords', content: 'katakana, dakuten, handakuten, japanese loan words, japanese writing systems, phonetic script, learn japanese, katakana usage, How to write Japanese' },
    ],
  },
  '/japanese/katakana-explained?lesson=3': {
    title: 'Lesson 3 - Yoōn Katakana',
    meta: [
      { name: 'description', content: 'Some katakana combine to form Yōon sounds. In these combinations, the first character remains full-sized, while the second is smaller. There are 36 of these combinations.' },
      { name: 'keywords', content: 'katakana, yoōn, japanese loan words, japanese writing systems, phonetic script, learn japanese, katakana usage, How to write Japanese' },
    ],
  },
  '/japanese/katakana-explained?lesson=4': {
    title: 'Lesson 4 - Foreign Yoōn Katakana',
    meta: [
      { name: 'description', content: 'Some sounds from non Japanese languages cannot be captured by the 36 native katakana yōon sounds. For Example ヴァ (bwa/va) and フィ (fi) are foreign sounds in the Japanese loan words ヴァイオリン (vaiorin, violin) and フィルム (firumu, film) respectively.' },
      { name: 'keywords', content: 'katakana, foreign yoōn combinations, japanese loan words, japanese writing systems, phonetic script, learn japanese, katakana usage, How to write Japanese' },
    ],
  },
  '/japanese/katakana-explained?lesson=5': {
    title: 'Lesson 5 - Katakana Long Vowels',
    meta: [
      { name: 'description', content: 'Long Vowels In Katakana, long vowels are handled differently compared to Hiragana. Instead of adding extra vowels to extend the sound, Katakana uses a simple dash-like symbol: ー' },
      { name: 'keywords', content: 'katakana, japanese loan words, japanese writing systems, phonetic script, learn japanese, katakana usage, How to write Japanese' },
    ],
  },
  '/japanese/kanji-explained': {
    title: 'Kanji Explained',
    meta: [
      { name: 'description', content: 'Kanji are characters used in the Japanese writing system, originally borrowed from Chinese characters. They represent ideas or meanings rather than just sounds. Each kanji can have multiple meanings and pronunciations depending on the context.' },
      { name: 'keywords', content: 'kanji, japanese writing systems, chinese characters, japanese language, kanji meanings, kanji pronunciations, How to write Japanese' },
    ],
  },
  '/japanese/how-to-type-japanese': {
    title: 'How to Type Japanese',
    meta: [
      { name: 'description', content: 'How to Type Japanese on a Mac (Video Tutorial).' },
      { name: 'keywords', content: 'type japanese, japanese keyboard, mac tutorial, how to type japanese, japanese typing guide, How to write Japanese' },
    ],
  },
  '/japanese/writing-systems?s=hir-T0TFT': {
    title: 'Basic Hiragana Quiz ',
    meta: [
      { name: 'description', content: 'a:あ, i:い, u:う, e:え, o:お, ...' },
      { name: 'keywords', content: 'hiragana quiz, basic hiragana, japanese writing systems, phonetic quiz' },
    ],
  },
  '/japanese/writing-systems?s=hirdak-T0TFT': {
    title: 'Hiragana with Dakuten / Handakuten Quiz ',
    meta: [
      { name: 'description', content: 'ga:が, gi:ぎ, gu:ぐ, ge:げ, go:ご, ...' },
      { name: 'keywords', content: 'hiragana dakuten quiz, handakuten quiz, japanese phonetics, hiragana quiz, japanese writing systems' },
    ],
  },
  '/japanese/writing-systems?s=hiryoon-T0TFT': {
    title: 'Yōon Hiragana Quiz ',
    meta: [
      { name: 'description', content: 'kya:きゃ, kyu:きゅ, kyo:きょ, sha:しゃ, shu:しゅ, sho:しょ, ...' },
      { name: 'keywords', content: 'yoon hiragana quiz, hiragana combinations, japanese writing systems, hiragana phonetics, learn japanese' },
    ],
  },
  '/japanese/writing-systems?s=kat-T0TFT': {
    title: 'Katakana Quiz ',
    meta: [
      { name: 'description', content: 'a:ア, i:イ, u:ウ, e:エ, o:オ, ...' },
      { name: 'keywords', content: 'katakana quiz, japanese loan words, japanese writing systems, phonetic quiz' },
    ],
  },
  '/japanese/writing-systems?s=katdak-T0TFT': {
    title: 'Katakana with Dakuten / Handakuten Quiz ',
    meta: [
      { name: 'description', content: 'ga:ガ, gi:ギ, gu:グ, ge:ゲ, go:ゴ, ...' },
      { name: 'keywords', content: 'katakana dakuten quiz, handakuten quiz, japanese phonetics, katakana quiz, learn japanese' },
    ],
  },
  '/japanese/writing-systems?s=katyoon-T0TFT': {
    title: 'Yōon Katakana Quiz ',
    meta: [
      { name: 'description', content: 'kya:キャ, kyu:キュ, kyo:キョ, sha:シャ, shu:シュ, sho:ショ, ...' },
      { name: 'keywords', content: 'yoon katakana quiz, katakana combinations, japanese writing systems, katakana phonetics, learn japanese' },
    ],
  },
  '/japanese/writing-systems?s=katspecyoon-T0TFT': {
    title: 'Foreign Yōon Katakana Quiz',
    meta: [
      { name: 'description', content: 'bwa:ブァ, bwi:ブィ, bwe:ブェ, bwo:ブォ, ...' },
      { name: 'keywords', content: 'foreign yoon katakana quiz, katakana combinations, japanese writing systems, katakana phonetics, learn japanese' },
    ],
  },
  '/japanese/vocabulary?s=ani-T0TFT': {
    title: 'Animals Vocabulary Quiz ',
    meta: [
      { name: 'description', content: ' bird: tori, cat: neko, chicken: niwatori, cow: ushi, dog: inu, ...' },
      { name: 'keywords', content: 'animals vocabulary quiz, japanese vocabulary, learn japanese animals, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=body-T0TFT': {
    title: 'Body Parts Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'arm: ude, back: senaka, ear: mimi, eyes: me, feet: ashi, ...' },
      { name: 'keywords', content: 'body parts vocabulary quiz, japanese vocabulary, learn japanese body parts, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=clo-T0TFT': {
    title: 'Clothing Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'hat: boushi, jacket: jaketto, scarf: suka-fu, shoes: kutsu, ...' },
      { name: 'keywords', content: 'clothing vocabulary quiz, japanese vocabulary, learn japanese clothing, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=col-T0TFT': {
    title: 'Colors Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'black: kuro, blue: ao, brown: chairo, green: midori, ...' },
      { name: 'keywords', content: 'colors vocabulary quiz, japanese vocabulary, learn japanese colors, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=day-T0TFT': {
    title: 'Days of the Week Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'Monday: getsuyōbi, Tuesday: kayōbi, Wednesday: suiyōbi, Thursday: mokuyōbi, ...' },
      { name: 'keywords', content: 'days of the week vocabulary quiz, japanese vocabulary, learn japanese days, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=food-T0TFT': {
    title: 'Food Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'apple: ringo, banana: banana, bread: pan, carrot: ninjin, ...' },
      { name: 'keywords', content: 'food vocabulary quiz, japanese vocabulary, learn japanese food, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=adj2-T0TFT': {
    title: 'Irregular Adjectives Quiz ',
    meta: [
      { name: 'description', content: 'beautiful: utsukushii, calm: ochitsuita, easy: kantan, ...' },
      { name: 'keywords', content: 'irregular adjectives quiz, japanese adjectives, japanese grammar, learn japanese language' },
    ],
  },
  '/japanese/vocabulary?s=locations-T0TFT': {
    title: 'Locations Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'bakery: panya, cinema: eigakan, hospital: byouin, hotel: hoteru, ...' },
      { name: 'keywords', content: 'locations vocabulary quiz, japanese vocabulary, learn japanese locations, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=mon-T0TFT': {
    title: 'Months of the Year Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'January: ichigatsu, February: nigatsu, March: sangatsu, April: shigatsu, ...' },
      { name: 'keywords', content: 'months vocabulary quiz, japanese vocabulary, learn japanese months, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=num-T0TFT': {
    title: 'Numbers Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'one: ichi, two: ni, three: san, four: yon, ...' },
      { name: 'keywords', content: 'numbers vocabulary quiz, japanese vocabulary, learn japanese numbers, japanese language practice' },
    ],
  },
  '/japanese/vocabulary?s=adj1-T0TFT': {
    title: 'Regular Adjectives Quiz',
    meta: [
      { name: 'description', content: 'angry: okotteiru, annoy: iradatashii, bad: warui, ...' },
      { name: 'keywords', content: 'regular adjectives quiz, japanese adjectives, japanese grammar, learn japanese language' },
    ],
  },
  '/japanese/grammar/keigo': {
    title: 'Keigo Grammar Explanation',
    meta: [
      { name: 'description', content: 'Keigo (敬語) is the Japanese system of polite or honorific language, used to show respect and social hierarchy. Essential in formal settings, it’s divided into three main types:' },
      { name: 'keywords', content: 'keigo grammar, japanese honorific language, japanese politeness, learn japanese grammar, formal japanese' },
    ],
  },
  '/japanese/reading-listening/aikos-book-sanctuary?eng=F': {
    title: 'Japanese Reading and Listening Comprehension Exercise',
    meta: [
      { name: 'description', content: 'Aiko loves reading books and finds comfort and excitement at her local library. 愛子さんは本を読むことが大好きで、地元の図書館で心の安らぎと楽しさを見つけています。' },
      { name: 'keywords', content: 'reading comprehension, listening comprehension, japanese practice, japanese exercises, learn japanese' },
    ],
  },
};

// Dynamic Helmet Component
const DynamicMeta = () => {
  const location = useLocation(); 
  const metaInfo = routesMeta[location.pathname as keyof typeof routesMeta] || {};

  return (
    <Helmet>
      {metaInfo.title && <title>{metaInfo.title}</title>}
      {metaInfo.meta &&
      metaInfo.meta.map((tag: any, index: any) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Helmet>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DynamicMeta/>
      <Provider store = {store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
