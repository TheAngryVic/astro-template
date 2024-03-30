// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content'

// 2. Define your collections
const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      author: reference('author').optional(),
      publishDate: z.date(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional(),
      minutesRead: z.string().optional()
    })
})

const page = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: reference('author').optional(),
      publishDate: z.date().optional(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional()
    })
})
const doc = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      section: z.string(),
      weight: z.number().default(0),
      title: z.string(),
      description: z.string(),
      images: z.array(image()).optional(),
      gallery: z.string().optional()
    })
})

const category = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      coverSVG: image(),
      socialImage: image()
    })
})

const author = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      contact: z.string()
    })
})

const social = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    link: z.string(),
    icon: z.string()
  })
})

const propiedad = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),      
      publishDate: z.date().optional(),
      images: z.array(image()).optional(),
      comunas: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
     })
})

// 3. Export multiple collections to register them
export const collections = {
  blog,
  page,
  doc,
  category,
  author,
  social,
  propiedad
}
