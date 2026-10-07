import { useEffect } from 'react'
import type { Memory } from '../data/memories'

type Props = {
  memory: Memory
  onClose: () => void
}

export function Lightbox({ memory, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={memory.caption}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} aria-label="Đóng" />
      <div className="lightbox__stage">
        <img className="lightbox__img" src={memory.src} alt={memory.caption} />
        <p className="lightbox__caption">
          <span>{memory.id}</span>
          {memory.caption}
        </p>
      </div>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Đóng">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>
    </div>
  )
}
