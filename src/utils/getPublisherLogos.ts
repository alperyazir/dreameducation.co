export const publisherLogos = [
  '/publishers/dream-education-logo.svg',
  '/publishers/dream-education-logo copy.svg',
  '/publishers/dream-education-logo copy 2.svg',
  '/publishers/dream-education-logo copy 3.svg',
  '/publishers/dream-education-logo copy 4.svg',
  '/publishers/dream-education-logo copy 5.svg',
  '/publishers/dream-education-logo copy 6.svg',
  '/publishers/dream-education-logo copy 7.svg',
  '/publishers/dream-education-logo copy 8.svg',
].map(src => ({
  src,
  alt: src.split('/').pop()?.split('.')[0].replace(/-/g, ' ') || 'Publisher logo'
}))

export function getRoundedPublisherCount(): string {
  const count = publisherLogos.length;
  if (count <= 10) return `${count}+`;
  
  // Round down to nearest 10
  const roundedDown = Math.floor(count / 10) * 10;
  return `${roundedDown}+`;
} 