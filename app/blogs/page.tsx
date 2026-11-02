import content from '@/data/portfolio.json'
import { MotionSystem } from '@/components/motion-system'
import { Navigation } from '@/components/navigation'
import { BlogCards } from '@/components/blogs-section'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata, blogSchema } from '@/lib/seo'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
export const metadata=pageMetadata('/blogs')
export default function BlogsPage(){return <MotionSystem><div className="portfolio-shell"><a className="skip-link" href="#main-content">{content.navigation.skip}</a><Navigation/><JsonLd value={blogSchema()}/><main id="main-content" className="blog-page section-shell"><header className="blog-page-intro"><a className="button-quiet" href="/"><ArrowLeft size={16}/>{content.blogs.home}</a><p className="section-kicker">{content.blogs.eyebrow}</p><h1>{content.blogs.title}<span className="cyan">.</span></h1><p className="blog-page-description">{content.blogs.intro}</p><div className="blog-author"><span className="status-light"/>{content.personal.name}<span>{content.blogs.published}</span></div></header><section aria-labelledby="series-title"><div className="blog-series-heading"><h2 id="series-title">{content.blogs.seriesTitle}</h2><p>{content.blogs.seriesDescription}</p></div><BlogCards/></section><footer className="blog-footer"><a href={content.blogs.mediumUrl} target="_blank" rel="noopener noreferrer">{content.blogs.mediumLabel}<ArrowUpRight size={18}/></a><span>© {content.footer.year} {content.personal.name}</span></footer></main></div></MotionSystem>}
