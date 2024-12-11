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
    title: 'Home Page',
    meta: [
      { name: 'description', content: 'Learn foreign languages faster. Start now.' },
      { name: 'keywords', content: 'language learning, foreign languages, learn languages, language study tools, fast language learning, online language courses, language practice, multilingual, language learning platform' },
    ],
  },
  '/contact': {
    title: 'LingoCommand Contact',
    meta: [
      { name: 'description', content: 'You can reach out to us at contact@lingocommand.com' },
      { name: 'keywords', content: 'contact us, LingoCommand support, customer support, language learning help, language app support, contact language platform, reach out, LingoCommand inquiries, contact page' },
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
