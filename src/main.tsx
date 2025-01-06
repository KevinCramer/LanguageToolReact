import 'bootstrap/dist/css/bootstrap.min.css'
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
    title: 'LingoCommand - Learn Foreign Languages Faster',
    meta: [
      { name: 'description', content: 'Fast-track your Japanese language studies with LingoCommand! Our innovative technology lets you customise study sessions to align with your goals and learning style.' },
      { name: 'keywords', content: 'japanese language learning, japanese language, learn japanese, japanese language study tools, fast japanese language learning, online japanese language courses, japanese language practice,, japanese language learning platform' },
    ],
  },
  '/contact': {
    title: 'Contact',
    meta: [
      { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
      { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
    ],
  },
  '/about': {
    title: 'About',
    meta: [
      { name: 'description', content: 'LingoCommand is an educational platform for learning Japanese. It accelerates progress by combining these three key principles: customisable exercises, active recall, and repeated exposure. ' },
      { name: 'keywords', content: 'LingoCommand overview, learn japanese platform, customizable learning tools, educational language app. ' },
    ],
  },
  '/japanese': {
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
      { name: 'keywords', content: 'Japanese writing systems explained, hiragana, katakana, kanji.' },
    ],
  },
  '/japanese/hiragana-explained': {
    title: 'Hiragana Explained',
    meta: [
      { name: 'description', content: 'Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. Basic hiragana has 46 sounds.' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/katakana-explained': {
    title: 'Katakana Explained',
    meta: [
      { name: 'description', content: 'Katakana is mainly used to write Japanese loan words. For example in Japanese the word for `camera` is カメラ (kamera). Learning all 5 concepts below is essential to learning Japanese.' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/kanji-explained': {
    title: 'Kanji Explained',
    meta: [
      { name: 'description', content: 'Kanji are characters used in the Japanese writing system, originally borrowed from Chinese characters. They represent ideas or meanings rather than just sounds. Each kanji can have multiple meanings and pronunciations depending on the context.' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/how-to-type-japanese': {
    title: 'How to Type Japanese',
    meta: [
      { name: 'description', content: 'How to Type Japanese on a Mac (Video Tutorial).' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=hir-T0TFT': {
    title: 'Basic Hiragana Quiz ',
    meta: [
      { name: 'description', content: 'a:あ, i:い, u:う, e:え, o:お, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=hirdak-T0TFT': {
    title: 'Hiragana with Dakuten / Handakuten Quiz ',
    meta: [
      { name: 'description', content: 'ga:が, gi:ぎ, gu:ぐ, ge:げ, go:ご, ...' }, 
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=hiryoon-T0TFT': {
    title: 'Yōon Hiragana Quiz ',
    meta: [
      { name: 'description', content: 'kya:きゃ, kyu:きゅ, kyo:きょ, sha:しゃ, shu:しゅ, sho:しょ, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=kat-T0TFT': {
    title: 'Katakana Quiz ',
    meta: [
      { name: 'description', content: 'a:ア, i:イ, u:ウ, e:エ, o:オ, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=katdak-T0TFT': {
    title: 'Katakana with Dakuten / Handakuten Quiz ',
    meta: [
      { name: 'description', content: 'ga:ガ, gi:ギ, gu:グ, ge:ゲ, go:ゴ, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=katyoon-T0TFT': {
    title: 'Yōon Katakana Quiz ',
    meta: [
      { name: 'description', content: 'kya:キャ, kyu:キュ, kyo:キョ, sha:シャ, shu:シュ, sho:ショ, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/writing-systems?s=katspecyoon-T0TFT': {
    title: 'Foreign Yōon Katakana Quiz',
    meta: [
      { name: 'description', content: 'bwa:ブァ, bwi:ブィ, bwe:ブェ, bwo:ブォ, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=ani-T0TFT': {
    title: 'Animals Vocabulary Quiz ',
    meta: [
      { name: 'description', content: ' bird: tori, cat: neko, chicken: niwatori, cow: ushi, dog: inu, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=body-T0TFT': {
    title: 'Body Parts Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'arm: ude, back: senaka, ear: mimi, eyes: me, feet: ashi, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=clo-T0TFT': {
    title: 'Clothing Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'hat: boushi, jacket: jaketto, scarf: suka-fu, shoes: kutsu, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=col-T0TFT': {
    title: 'Colors Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'black: kuro, blue: ao, brown: chairo, green: midori, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=day-T0TFT': {
    title: 'Days of the Week Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'Monday: getsuyōbi, Tuesday: kayōbi, Wednesday: suiyōbi, Thursday: mokuyōbi, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=food-T0TFT': {
    title: 'Food Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'apple: ringo, banana: banana, bread: pan, carrot: ninjin, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=adj2-T0TFT': {
    title: 'Irregular Adjectives Quiz ',
    meta: [
      { name: 'description', content: 'beautiful: utsukushii, calm: ochitsuita, easy: kantan, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=locations-T0TFT': {
    title: 'Locations Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'bakery: panya, cinema: eigakan, hospital: byouin, hotel: hoteru, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=mon-T0TFT': {
    title: 'Months of the Year Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'January: ichigatsu, February: nigatsu, March: sangatsu, April: shigatsu, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=num-T0TFT': {
    title: 'Numbers Vocabulary Quiz ',
    meta: [
      { name: 'description', content: 'one: ichi, two: ni, three: san, four: yon, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/vocabulary?s=adj1-T0TFT': {
    title: 'Regular Adjectives Quiz',
    meta: [
      { name: 'description', content: 'angry: okotteiru, annoy: iradatashii, bad: warui, ...' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/grammar/keigo': {
    title: 'Keigo Grammar Explanation',
    meta: [
      { name: 'description', content: 'Keigo (敬語) is the Japanese system of polite or honorific language, used to show respect and social hierarchy. Essential in formal settings, it’s divided into three main types:' },
      { name: 'keywords', content: '' },
    ],
  },
  '/japanese/comprehension/aikos-book-sanctuary?eng=F': {
    title: 'Japanese Reading and Listening Comprehension Exercise',
    meta: [
      { name: 'description', content: 'Aiko loves reading books and finds comfort and excitement at her local library. 愛子さんは本を読むことが大好きで、地元の図書館で心の安らぎと楽しさを見つけています。' },
      { name: 'keywords', content: '' },
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
