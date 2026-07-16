import { useState } from 'react'
import { addJournalEntry } from '../utils/storage.js'

const STEPS = [
  { key: 'situation', prompt: 'What happened? Describe the situation.' },
  { key: 'thought', prompt: 'What thought went through your mind?' },
  { key: 'emotion', prompt: 'What emotion did you feel, and how strong (1–10)?' },
  { key: 'alternative', prompt: 'What is a more balanced way to see it?' },
]

export default function ThoughtJournalForm({ refresh }) {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)

  const current = STEPS[step]

  function handleChange(value) {
    setAnswers((a) => ({ ...a, [current.key]: value }))
  }

  function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      addJournalEntry(answers)
      setAnswers({})
      setStep(0)
      refresh()
    }
  }

  function back() {
    if (step > 0) setStep(step - 1)
  }

  return (
    <section className="card">
      <h2>Thought Journal</h2>
      <p className="step-count">Step {step + 1} of {STEPS.length}</p>
      <label className="journal-prompt">{current.prompt}</label>
      <textarea
        rows={3}
        value={answers[current.key] || ''}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="journal-actions">
        <button className="btn-secondary" onClick={back} disabled={step === 0}>
          Back
        </button>
        <button className="btn-primary" onClick={next} disabled={!(answers[current.key] || '').trim()}>
          {step === STEPS.length - 1 ? 'Save entry' : 'Next'}
        </button>
      </div>
    </section>
  )
}
