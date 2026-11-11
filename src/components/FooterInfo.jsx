import './FooterInfo.css'

const icons = {
  address: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  tel: (
    <path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7L16 13l4 1.5v3A2 2 0 0 1 18 19.5 15.5 15.5 0 0 1 4.5 6 2 2 0 0 1 6.5 4Z" />
  ),
  hours: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  night: <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10Z" />,
}

function Icon({ name }) {
  return (
    <svg
      className="footer-info__icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

const offices = [
  {
    name: '남부청사',
    address: '(16508) 경기도 수원시 영통구 도청로 28',
    tel: '031-1396, 031-249-0114',
    hours: '평일 09:00~18:00',
    night: '당직실(야간) 031-249-0341, 031-249-0342',
  },
  {
    name: '조원청사',
    address: '(16508) 경기도 수원시 장안구 조원로 18',
    tel: '031-1396, 031-249-0114',
    hours: '평일 09:00~18:00',
    night: '당직실(야간) 031-248-9662',
  },
  {
    name: '북부청사',
    address: '(16508) 경기도 수원시 영통구 도청로 28',
    tel: '031-1396, 031-249-0114',
    hours: '평일 09:00~18:00',
    night: '당직실(야간) 031-820-0514, 031-820-0524',
  },
]

const rows = [
  { key: 'address', label: '주소' },
  { key: 'tel', label: '전화' },
  { key: 'hours', label: '운영시간' },
  { key: 'night', label: '야간' },
]

/** 청사 안내 — 메인 카드와 같은 둥근 테두리 카드 3개 */
function FooterInfo() {
  return (
    <section className="footer-info" aria-labelledby="footer-info-heading">
      <h2 id="footer-info-heading" className="footer-info__heading">
        청사 안내
      </h2>
      <ul className="footer-info__list">
        {offices.map((office) => (
          <li key={office.name} className="footer-info__office">
            <h3 className="footer-info__name">
              <span className="footer-info__org">경기도교육청</span>
              {office.name}
            </h3>
            <dl className="footer-info__rows">
              {rows.map((row) => (
                <div key={row.key} className="footer-info__row">
                  <dt>
                    <Icon name={row.key} />
                    <span className="sr-only">{row.label}</span>
                  </dt>
                  <dd>{office[row.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FooterInfo
