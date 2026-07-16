import { deleteEntry, KEYS } from '../utils/storage.js'

export default function PastEntriesList({ moods, journals, refresh }) {
  function removeMood(id) {
    deleteEntry(KEYS.MOOD_KEY, id)
    refresh()
  }

  function removeJournal(id) {
    deleteEntry(KEYS.JOURNAL_KEY, id)
    refresh()
  }

  return (
    <section className="card">
      <h2>History</h2>

      <h3>Mood entries</h3>
      {moods.length === 0 && <p className="empty">Nothing logged yet.</p>}
      <ul className="entry-list">
        {[...moods].reverse().map((m) => (
          <li key={m.id} className="entry-row">
            <span>{new Date(m.createdAt).toLocaleDateString()} — level {m.value}{m.note ? `: ${m.note}` : ''}</span>
            <button className="btn-delete" onClick={() => removeMood(m.id)} aria-label="Delete mood entry">
              ✕
            </button>
          </li>
        ))}
      </ul>

      <h3>Journal entries</h3>
      {journals.length === 0 && <p className="empty">Nothing logged yet.</p>}
      <ul className="entry-list">
        {[...journals].reverse().map((j) => (
          <li key={j.id} className="entry-row">
            <span>{new Date(j.createdAt).toLocaleDateString()} — {j.situation?.slice(0, 40)}</span>
            <button className="btn-delete" onClick={() => removeJournal(j.id)} aria-label="Delete journal entry">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
