import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import globalEs from './locale/es/global.json'
import globalEn from './locale/en/global.json'

const lng = localStorage.getItem('lng') || 'es'

i18next.init({
  interpolation: { escapeValue: false },
  lng: lng,
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
)
