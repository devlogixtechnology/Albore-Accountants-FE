import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import author from './author'
import caseStudy from './caseStudy'
import career from './career'
import news from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, caseStudy, career, news],
}