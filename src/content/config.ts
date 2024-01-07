// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({image}) => 
  z.object({
    title: z.string(),
    tags: z.array(z.string()
    .refine(tags => !tags.includes(' '), 'Please ensure tags have no spaces!')),
    image: image().optional(),
    alt: z.string().optional(),
    date: z.date(),
    author: z.enum(["Michael Hayslip"]),
    description: z.string()
  }).refine(schema => schema.image ? !!schema.alt : true, {
    message: 'alt is required when you define an image'
}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postsCollection,
};