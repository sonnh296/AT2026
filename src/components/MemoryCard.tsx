import type { CSSProperties } from 'react'
import type { Memory } from '../data/memories'
import { useInView } from '../hooks/useInView'

type Props = {
  memory: Memory
  index: number
  onExpand: (memory: Memory) => void
}

export function MemoryCard({ memory, index, onExpand }: Props) {
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
        <button
          type="button"
          className="memory__expand"
          onClick={() => onExpand(memory)}
          aria-label={`Phóng to: ${memory.caption}`}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
            />
          </svg>
        </button>
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
