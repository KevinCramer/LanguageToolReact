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
  // '/about': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/study-guide': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems-explained': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/hiragana-explained': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/katakana-explained': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/kanji-explained': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/how-to-type-japanese': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=hir-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=hirdak-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=hiryoon-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=kat-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=katdak-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=katyoon-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/writing-systems?s=katspecyoon-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=ani-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=body-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=clo-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=col-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=day-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=food-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=adj2-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=locations-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=mon-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=num-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/vocabulary?s=adj1-T0TFT': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/grammar/keigo': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
  // '/japanese/comprehension/aikos-book-sanctuary?eng=F': {
  //   title: 'Contact',
  //   meta: [
  //     { name: 'description', content: 'You can reach out to us at contact@lingocommand.com. Social media: Youtube, TikTok, Instragram, Facebook, Linkedin, Pinterest.' },
  //     { name: 'keywords', content: 'contact us, LingoCommand support, customer support, japanese language learning help, japanese language app support, contact japanese language platform, reach out, LingoCommand inquiries, contact page, social media, YouTube, TikTok, Instagram' },
  //   ],
  // },
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
