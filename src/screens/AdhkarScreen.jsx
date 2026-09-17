import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdhkarCategoryGrid } from '../components/adhkar/AdhkarCategoryGrid.jsx'
import { AdhkarStats } from '../components/adhkar/AdhkarStats.jsx'
import { t, setLanguage, getLanguage } from '../locales/i18n.js';
export default function AdhkarScreen() {
  const [tab, setTab] = useState('adhkar')
  const navigate = useNavigate()
  const [lang, setLang] = useState(getLanguage())

  const toggleLanguage = () => {
    const next = lang === 'fr' ? 'ar' : 'fr'
    setLanguage(next)
    setLang(next)
  }
  return (
    <section className="screen adhkar">
            <button onClick={toggleLanguage}>
        {lang === 'fr' ? 'العربية' : 'Français'}
      </button>
      <div className="adhkar-hero">
        <p>{t('dailyPortion')}</p>
      </div>

      <div className="adhkar-tabs" role="tablist">
        <button
          className={'adhkar-tab' + (tab === 'adhkar' ? ' adhkar-tab--active' : '')}
          onClick={() => setTab('adhkar')}
        >
          {t('sections')}
        </button>
        <button
          className={'adhkar-tab' + (tab === 'stats' ? ' adhkar-tab--active' : '')}
          onClick={() => setTab('stats')}
        >
          {t('stats')}
        </button>
      </div>

      {tab === 'adhkar' ? (
        <AdhkarCategoryGrid onOpen={(categoryKey) => navigate(`/adhkar/${categoryKey}`)} />
      ) : (
        <AdhkarStats />
      )}
    </section>
  )
}
