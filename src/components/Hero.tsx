import { album } from '../data/memories'

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/IMG_4731.JPG"
          alt=""
          className="hero__img"
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <p className="hero__brand">{album.brand}</p>
        <h1 className="hero__title">{album.headline}</h1>
        <p className="hero__tagline">{album.tagline}</p>
        <a className="hero__cta" href="#memories">
          Mở album
          <span className="hero__cta-arrow" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
