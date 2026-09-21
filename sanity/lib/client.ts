import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

// Extracts the exact image source type without relying on internal library paths
type ImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: ImageSource) {
  return builder.image(source);
}