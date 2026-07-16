import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import MoodTracker from './components/MoodTracker.jsx'
import ThoughtJournalForm from './components/ThoughtJournalForm.jsx'
import ReflectionExercise from './components/ReflectionExercise.jsx'
import PastEntriesList from './components/PastEntriesList.jsx'
import { loadList, KEYS } from './utils/storage.js'

export default function App() {
  const [active, setActive] = useState('mood')
  const [moods, setMoods] = useState([])
  const [journals, setJournals] = useState([])

  function refresh() {
    setMoods(loadList(KEYS.MOOD_KEY))
    setJournals(loadList(KEYS.JOURNAL_KEY))
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <div className="app">
      <Navbar active={active} onChange={setActive} />
      <main className="main">
        {active === 'mood' && <MoodTracker moods={moods} refresh={refresh} />}
        {active === 'journal' && <ThoughtJournalForm refresh={refresh} />}
        {active === 'reflect' && <ReflectionExercise />}
        {active === 'history' && (
          <PastEntriesList moods={moods} journals={journals} refresh={refresh} />
        )}
      </main>
    </div>
  )
}
