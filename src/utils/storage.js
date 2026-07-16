// Simple localStorage helpers to emulate a backend for the draft milestone.

const MOOD_KEY = 'mymymind_moods'
const JOURNAL_KEY = 'mymymind_journal'

export function loadList(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveList(key, list) {
  localStorage.setItem(key, JSON.stringify(list))
}

export function addMoodEntry(entry) {
  const list = loadList(MOOD_KEY)
  const updated = [...list, { ...entry, id: crypto.randomUUID(), createdAt: Date.now() }]
  saveList(MOOD_KEY, updated)
  return updated
}

export function addJournalEntry(entry) {
  const list = loadList(JOURNAL_KEY)
  const updated = [...list, { ...entry, id: crypto.randomUUID(), createdAt: Date.now() }]
  saveList(JOURNAL_KEY, updated)
  return updated
}

export function deleteEntry(key, id) {
  const list = loadList(key)
  const updated = list.filter((item) => item.id !== id)
  saveList(key, updated)
  return updated
}

export const KEYS = { MOOD_KEY, JOURNAL_KEY }
