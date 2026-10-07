import { album } from '../data/memories'
import { useInView } from '../hooks/useInView'

export function Closing() {
  const { ref, visible } = useInView<HTMLElement>(0.3)

  return (
    <footer ref={ref} className={`closing ${visible ? 'is-in' : ''}`}>
      <p className="closing__brand">{album.brand}</p>
      <p className="closing__text">{album.closing}</p>
      <p className="closing__from">{album.from}</p>
    </footer>
  )
}
