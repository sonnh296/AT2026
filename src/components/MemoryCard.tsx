import type { CSSProperties } from 'react'
import type { Memory } from '../data/memories'
import { useInView } from '../hooks/useInView'

type Props = {
  memory: Memory
  index: number
}

export function MemoryCard({ memory, index }: Props) {
  const { ref, visible } = useInView<HTMLElement>(0.18)
  const flip = index % 2 === 1

  return (
    <article
      ref={ref}
      className={`memory ${flip ? 'memory--flip' : ''} ${visible ? 'is-in' : ''}`}
      style={{ '--i': index } as CSSProperties}
    >
      <figure className="memory__frame">
        <img
          className="memory__photo"
          src={memory.src}
          alt={memory.caption}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="memory__wish">
          <span className="memory__meta">
            <span className="memory__num">{memory.id}</span>
            <span className="memory__year">{memory.year}</span>
          </span>
          <h2 className="memory__caption">{memory.caption}</h2>
          <p className="memory__text">{memory.wish}</p>
        </figcaption>
      </figure>
    </article>
  )
}
