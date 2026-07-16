import { useState } from 'react'

const EXERCISES = [
  {
    scenario: '"I made one mistake in the report, so I\'m terrible at my job."',
    options: ['Catastrophizing', 'Overgeneralization', 'Mind reading'],
    answer: 'Overgeneralization',
    explain: 'One mistake is being generalized into a sweeping judgment about overall ability.',
  },
  {
    scenario: '"If I fail this exam, my whole future is ruined."',
    options: ['Catastrophizing', 'Personalization', 'Black-and-white thinking'],
    answer: 'Catastrophizing',
    explain: 'A single setback is being blown up into the worst possible outcome.',
  },
  {
    scenario: '"She didn\'t say hi — she must be angry with me."',
    options: ['Mind reading', 'Overgeneralization', 'Catastrophizing'],
    answer: 'Mind reading',
    explain: 'Assuming what someone else is thinking without evidence.',
  },
]

export default function ReflectionExercise() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)

  const exercise = EXERCISES[index]
  const isCorrect = picked === exercise.answer

  function pick(option) {
    setPicked(option)
  }

  function nextExercise() {
    setPicked(null)
    setIndex((i) => (i + 1) % EXERCISES.length)
  }

  return (
    <section className="card">
      <h2>Spot the Distortion</h2>
      <p className="scenario">{exercise.scenario}</p>
      <div className="options">
        {exercise.options.map((opt) => (
          <button
            key={opt}
            className={`option-btn ${picked === opt ? (isCorrect ? 'option-correct' : 'option-wrong') : ''}`}
            onClick={() => pick(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {picked && (
        <p className="feedback">
          {isCorrect ? '✓ Correct. ' : `✗ Not quite — it's ${exercise.answer}. `}
          {exercise.explain}
        </p>
      )}
      <button className="btn-secondary" onClick={nextExercise}>
        Next example
      </button>
    </section>
  )
}
