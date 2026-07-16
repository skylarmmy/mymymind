import { useState } from 'react'
import { addMoodEntry } from '../utils/storage.js'

const MOODS = [
  { value: 1, label: 'Low', color: 'var(--c-mauve)' },
  { value: 2, label: 'Uneasy', color: 'var(--c-amber)' },
  { value: 3, label: 'Neutral', color: 'var(--c-sage)' },
  { value: 4, label: 'Good', color: 'var(--c-sage-deep)' },
  { value: 5, label: 'Great', color: 'var(--c-ink)' },
]

export default function MoodTracker({ moods, refresh }) {
  const [note, setNote] = useState('')
  const [selected, setSelected] = useState(null)

  function handleLog() {
    if (selected === null) return
    addMoodEntry({ value: selected, note })
    setNote('')
    setSelected(null)
    refresh()
  }

  const recent = moods.slice(-7)
  const maxVal = 5

  return (
    <section className="card">
      <h2>How are you feeling today?</h2>
      <div className="mood-scale">
        {MOODS.map((m) => (
          <button
            key={m.value}
            className={`mood-dot ${selected === m.value ? 'mood-dot-active' : ''}`}
            style={{ '--dot-color': m.color }}
            onClick={() => setSelected(m.value)}
          >
            <span className="mood-dot-label">{m.label}</span>
          </button>
        ))}
      </div>
      <textarea
        placeholder="Anything notable about today? (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
      />
      <button className="btn-primary" onClick={handleLog} disabled={selected === null}>
        Log mood
      </button>

      <h3 className="chart-title">Last {recent.length || 0} entries</h3>
      <div className="mood-chart">
        {recent.length === 0 && <p className="empty">No mood entries yet — log one above.</p>}
        {recent.map((m) => (
          <div className="mood-bar-wrap" key={m.id} title={new Date(m.createdAt).toLocaleString()}>
            <div
              className="mood-bar"
              style={{ height: `${(m.value / maxVal) * 100}%` }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
