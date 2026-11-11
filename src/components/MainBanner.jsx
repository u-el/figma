import { useState } from 'react'
import bannerImage from '../assets/banner-1.png'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import './MainBanner.css'

const banner = {
  label: '경기교육 주요 소식',
  title: ['함께 만드는', '안전한 학교'],
  description: ['학교폭력 예방과 행복한 교육환경을 ', '위한 안내'],
  image: bannerImage,
  alt: '2026년 2차 학교폭력 실태조사 안내',
}

// 디자인에는 슬라이드가 3개("01 / 03")로 표시되지만 이미지는 1장만 있어 같은 내용을 반복합니다.
const slides = [banner, banner, banner]

const pad = (n) => String(n).padStart(2, '0')

function MainBanner() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  const go = (step) => setIndex((i) => (i + step + slides.length) % slides.length)

  return (
    <section className="banner" aria-roledescription="carousel" aria-label="경기교육 주요 소식">
      <div className="banner__text">
        <p className="banner__label">{slide.label}</p>
        <h2 className="banner__title">
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="banner__desc">
          {slide.description.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <div className="banner__controls">
        <button type="button" className="banner__arrow" onClick={() => go(-1)} aria-label="이전 슬라이드">
          <img src={arrowLeft} alt="" width="30" height="30" />
        </button>
        <span className="banner__counter" aria-live="polite">
          {pad(index + 1)} / {pad(slides.length)}
        </span>
        <button
          type="button"
          className="banner__arrow banner__arrow--next"
          onClick={() => go(1)}
          aria-label="다음 슬라이드"
        >
          <img src={arrowRight} alt="" width="30" height="30" />
        </button>
      </div>

      <img className="banner__image" src={slide.image} alt={slide.alt} />
    </section>
  )
}

export default MainBanner
