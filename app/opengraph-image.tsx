import { socialImage } from '@/components/social-image'
import content from '@/data/portfolio.json'
export const alt=content.metadata.title
export const size={width:1200,height:630}
export const contentType='image/png'
export default function Image(){return socialImage()}
