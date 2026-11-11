import './PageHero.css'

/**
 * 하위 화면 상단 히어로 — 메인 배너(MainBanner)와 같은 연파랑 카드 스타일
 * title / description 은 줄 단위 배열, children 은 설명 아래 추가 영역(검색창 등)
 */
function PageHero({ label, title, description, image, alt = '', visual, children }) {
  return (
    <section className={`page-hero${image || visual ? '' : ' page-hero--text'}`}>
      <div className="page-hero__text">
        {label && <p className="page-hero__label">{label}</p>}
        <h1 className="page-hero__title">
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        {description && (
          <p className="page-hero__desc">
            {description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        )}
        {children && <div className="page-hero__extra">{children}</div>}
      </div>
      {visual ? (
        <div className="page-hero__visual">{visual}</div>
      ) : (
        image && <img className="page-hero__image" src={image} alt={alt} />
      )}
    </section>
  )
}

export default PageHero
