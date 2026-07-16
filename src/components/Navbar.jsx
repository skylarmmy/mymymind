const TABS = [
  { id: 'mood', label: 'Mood' },
  { id: 'journal', label: 'Journal' },
  { id: 'reflect', label: 'Reflect' },
  { id: 'history', label: 'History' },
]

export default function Navbar({ active, onChange }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">◒</span>
        MyMyMind
      </div>
      <div className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`tab ${active === tab.id ? 'tab-active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
