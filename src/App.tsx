import { useCallback, useState } from 'react'
import { Closing } from './components/Closing'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { MemoryCard } from './components/MemoryCard'
import { memories, type Memory } from './data/memories'
import './App.css'

export default function App() {
  const [active, setActive] = useState<Memory | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <div className="page">
      <Hero />
      <main id="memories" className="album">
        {memories.map((memory, index) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            index={index}
            onExpand={setActive}
          />
        ))}
      </main>
      <Closing />
      {active ? <Lightbox memory={active} onClose={close} /> : null}
    </div>
  )
}
