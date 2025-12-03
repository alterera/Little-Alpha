import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 's33kbbxh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

