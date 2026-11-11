import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SubLayout from '../components/SubLayout.jsx'
import PageHero from '../components/PageHero.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import TabMenu from '../components/TabMenu.jsx'
import QuickServices from '../components/QuickServices.jsx'
import { posts } from '../data/posts.js'
import chevron from '../assets/chevron.svg'
import searchIcon from '../assets/icon-search.svg'
import fileText from '../assets/icon-file-text.svg'
import clipboard from '../assets/icon-clipboard.svg'
import monitor from '../assets/icon-monitor.svg'
import building from '../assets/icon-building.svg'
import './NewsPage.css'

const categories = ['전체', '공지사항', '보도자료', '고시/공고', '홍보/소통']
const sorts = ['최신순', '오래된순']

const disclosures = [
  { label: '정보공개 청구', icon: fileText },
  { label: '사전정보 공표', icon: clipboard },
  { label: '예산·결산 공개', icon: monitor },
  { label: '법령·자치법규', icon: building },
]

function NewsPage() {
  const [category, setCategory] = useState('전체')
  const [sort, setSort] = useState('최신순')
  // 검색어는 주소(?q=)에 둡니다 — 헤더 통합검색에서 넘어온 검색어도 그대로 반영
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('q') ?? ''
  const setKeyword = (q) => setSearchParams(q.trim() ? { q: q.trim() } : {}, { replace: true })
  const [input, setInput] = useState(keyword)
  const [prevKeyword, setPrevKeyword] = useState(keyword)
  if (keyword !== prevKeyword) {
    setPrevKeyword(keyword)
    setInput(keyword)
  }
  const [pinnedOnly, setPinnedOnly] = useState(false)

  const list = useMemo(() => {
    const q = keyword.trim()
    const filtered = posts.filter(
      (post) =>
        (category === '전체' || post.category === category) &&
        (!pinnedOnly || post.pinned) &&
        (!q || post.title.includes(q) || post.summary.includes(q)),
    )
    return filtered.sort((a, b) => (sort === '최신순' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)))
  }, [category, sort, keyword, pinnedOnly])

  return (
    <SubLayout sideActive="news">
      <PageHero
        label="정보"
        title={['경기도교육청 소식과', '교육 정보를 한눈에']}
        description={['공지사항, 보도자료, 고시·공고를 검색해 보세요.']}
        visual={
          <HeroVisual
            icon="news"
            tone="sky"
            label="정보: 공지사항, 보도자료, 고시·공고"
            items={[
              { icon: 'megaphone', label: '공지사항' },
              { icon: 'news', label: '보도자료' },
              { icon: 'check', label: '고시·공고' },
            ]}
          />
        }
      >
        <form
          className="news-search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault()
            setKeyword(input)
          }}
        >
          <span className="news-search__icon">
            <img src={searchIcon} alt="" />
          </span>
          <input
            type="search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              if (!e.target.value) setKeyword('')
            }}
            placeholder="검색어를 입력하세요"
            aria-label="검색어"
          />
          <button type="submit" className="news-search__btn">
            검색
          </button>
        </form>
      </PageHero>

      <section className="news" aria-labelledby="news-heading">
        <h2 id="news-heading" className="sr-only">
          소식 목록
        </h2>
        <TabMenu tabs={categories} active={category} onChange={setCategory} className="news__tabs" label="소식 분류" />

        <div className="news__toolbar">
          <p className="news__count">
            총 <strong>{list.length}</strong>건
            {keyword && <span className="news__keyword"> · “{keyword}” 검색 결과</span>}
          </p>
          <div className="news__actions">
            <button
              type="button"
              className={`news__chip${pinnedOnly ? ' is-active' : ''}`}
              aria-pressed={pinnedOnly}
              onClick={() => setPinnedOnly((v) => !v)}
            >
              주요 공지
            </button>
            <label className="news-select">
              <span className="sr-only">정렬</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {sorts.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <span className="news-select__chevron" aria-hidden="true">
                <img src={chevron} alt="" width="16" height="16" />
              </span>
            </label>
          </div>
        </div>

        {list.length > 0 ? (
          <ul className="news__cards">
            {list.map((post) => (
              <li key={post.id}>
                <a href="#" className="news-card">
                  <div className="news-card__meta">
                    <span className="news-card__badge">{post.category}</span>
                    {post.pinned && <span className="news-card__pin">주요</span>}
                  </div>
                  <h3 className="news-card__title">{post.title}</h3>
                  <p className="news-card__summary">{post.summary}</p>
                  <time className="news-card__date">{post.date}.</time>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="news__empty">조건에 맞는 게시물이 없습니다.</p>
        )}
      </section>

      <QuickServices title="정보공개" items={disclosures} allTo={null} className="news__disclosure" />
    </SubLayout>
  )
}

export default NewsPage
