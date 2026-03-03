export const publisherLogos = [
  { src: '/publishers/aaadreamedtech.png', alt: 'Dream EdTech' },
  { src: '/publishers/aaaegitimpazarim.png', alt: 'Eğitim Pazarım' },
  { src: '/publishers/vocatooki.png', alt: 'Vocatooki' },
  { src: '/publishers/netgeo.png', alt: 'National Geographic Learning' },
  { src: '/publishers/collins.png', alt: 'Collins' },
  { src: '/publishers/express.png', alt: 'Express Publishing' },
  { src: '/publishers/universalelt.png', alt: 'Universal ELT' },
  { src: '/publishers/abcmouse.png', alt: 'ABCmouse' },
  { src: '/publishers/pickatale.png', alt: 'Pickatale' },
  { src: '/publishers/phonicshero.png', alt: 'Phonics Hero' },
  { src: '/publishers/burlington.png', alt: 'Burlington VTest' },
  { src: '/publishers/klett.png', alt: 'Klett' },
  { src: '/publishers/hachette.png', alt: 'Hachette' },
  { src: '/publishers/cle.png', alt: 'CLE International' },
  { src: '/publishers/didier.png', alt: 'Didier' },
  { src: '/publishers/maison.png', alt: 'Maison des Langues' },
  { src: '/publishers/edinumen.png', alt: 'Edinumen' },
  { src: '/publishers/difusion.png', alt: 'Difusión' },
]

export function getRoundedPublisherCount(): string {
  const count = publisherLogos.length;
  if (count <= 10) return `${count}+`;

  // Round down to nearest 10
  const roundedDown = Math.floor(count / 10) * 10;
  return `${roundedDown}+`;
}
