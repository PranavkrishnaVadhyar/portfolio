import content from '@/data/portfolio.json'
import { ArrowUpRight, ArrowRight, Layers3, Network } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Article = typeof content.blogs.articles[number]
export function BlogCards(){return <div className="blog-grid">{content.blogs.articles.map(article=><BlogCard key={article.id} article={article}/>)}</div>}
function BlogCard({article}:{article:Article}) {
 const Icon=article.part===1?Layers3:Network
 return <article className={`blog-card blog-part-${article.part}`}>
 <div className="blog-art" aria-hidden="true"><div className="blog-art-grid"/><span className="blog-part">{content.blogs.partLabel} / {String(article.part).padStart(2,'0')}</span><Icon size={76} strokeWidth={1}/><div className="blog-pipeline">{article.diagram.map((step,index)=><span key={step}>{index>0&&<ArrowRight size={16}/>} {step}</span>)}</div></div>
 <div className="blog-card-copy"><div className="blog-meta"><time dateTime={article.published}>{new Intl.DateTimeFormat('en-IN',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(article.published))}</time><span>{article.readingMinutes} {content.blogs.minutes}</span></div><h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3><p>{article.summary}</p><ul className="blog-topics" aria-label={content.blogs.topicsLabel}>{article.topics.map(topic=><li key={topic}>{topic}</li>)}</ul><a className="blog-read" href={article.url} target="_blank" rel="noopener noreferrer">{content.blogs.read}<ArrowUpRight size={18}/></a></div></article>
}
export function BlogsSection(){return <section id="blogs" className="section-shell blogs-section"><div className="blog-section-top"><SectionHeading {...content.blogs.heading}/><a className="button-quiet" href="/blogs">{content.blogs.all}<ArrowUpRight size={17}/></a></div><BlogCards/></section>}
