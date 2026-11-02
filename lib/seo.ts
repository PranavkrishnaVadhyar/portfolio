import type { Metadata } from 'next'
import content from '@/data/portfolio.json'

export const siteUrl = content.metadata.siteUrl.replace(/\/$/, '')
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString()
export const author = {'@type':'Person','@id':absoluteUrl('/#person'),name:content.personal.name,url:absoluteUrl('/'),jobTitle:content.personal.role,image:absoluteUrl(content.personal.photo.src),sameAs:[...content.contact.links.filter(link=>['github','linkedin','medium'].includes(link.id)).map(link=>link.href)]}
export function pageMetadata(path: '/' | '/blogs'): Metadata {
 const blog=path==='/blogs'
 const title=blog?`${content.blogs.title} | ${content.personal.name}`:content.metadata.title
 const description=blog?content.blogs.description:content.metadata.description
 const image=absoluteUrl(blog?'/blogs/opengraph-image':'/opengraph-image')
 return {title,description,alternates:{canonical:absoluteUrl(path)},openGraph:{type:'website',url:absoluteUrl(path),title,description,siteName:content.metadata.siteName,locale:'en_IN',images:[{url:image,width:1200,height:630,alt:title}]},twitter:{card:'summary_large_image',title,description,images:[image]}}
}
export function homeSchema(){return {'@context':'https://schema.org','@graph':[
 {...author,knowsAbout:content.skills.categories.flatMap(category=>category.skills),homeLocation:{'@type':'Place',name:content.personal.location}},
 {'@type':'WebSite','@id':absoluteUrl('/#website'),url:absoluteUrl('/'),name:content.metadata.siteName,inLanguage:content.metadata.language,publisher:{'@id':author['@id']}},
 {'@type':'ProfilePage','@id':absoluteUrl('/#page'),url:absoluteUrl('/'),name:content.metadata.title,description:content.metadata.description,mainEntity:{'@id':author['@id']},isPartOf:{'@id':absoluteUrl('/#website')}}]}}
export function blogSchema(){return {'@context':'https://schema.org','@graph':[
 author,
 {'@type':'CollectionPage','@id':absoluteUrl('/blogs#page'),url:absoluteUrl('/blogs'),name:content.blogs.title,description:content.blogs.description,author:{'@id':author['@id']},mainEntity:{'@id':absoluteUrl('/blogs#articles')}},
 {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:content.metadata.siteName,item:absoluteUrl('/')},{'@type':'ListItem',position:2,name:content.blogs.title,item:absoluteUrl('/blogs')}]},
 {'@type':'ItemList','@id':absoluteUrl('/blogs#articles'),itemListElement:content.blogs.articles.map((article,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'BlogPosting','@id':article.url,url:article.url,mainEntityOfPage:article.url,headline:article.title,description:article.summary,datePublished:article.published,author:{'@id':author['@id']},inLanguage:content.metadata.language,keywords:article.topics.join(', ')}}))}]}}
