import { Closing } from './components/Closing'
import { Hero } from './components/Hero'
import { MemoryCard } from './components/MemoryCard'
import { memories } from './data/memories'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <main id="memories" className="album">
        {memories.map((memory, index) => (
          <MemoryCard key={memory.id} memory={memory} index={index} />
        ))}
      </main>
      <Closing />
    </div>
  )
}
