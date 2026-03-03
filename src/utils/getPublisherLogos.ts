export const publisherLogos = [
  { src: '/publishers/abcmouse.png', alt: 'ABCmouse' },
  { src: '/publishers/burlington.png', alt: 'Burlington' },
  { src: '/publishers/cle.png', alt: 'CLE International' },
  { src: '/publishers/collins.png', alt: 'Collins' },
  { src: '/publishers/didier.png', alt: 'Didier' },
  { src: '/publishers/difusion.png', alt: 'Difusión' },
  { src: '/publishers/dreamedtech.png', alt: 'Dream EdTech' },
  { src: '/publishers/edinumen.png', alt: 'Edinumen' },
  { src: '/publishers/egitimpazarim.png', alt: 'Eğitim Pazarım' },
  { src: '/publishers/express.png', alt: 'Express Publishing' },
  { src: '/publishers/hachette.png', alt: 'Hachette' },
  { src: '/publishers/klett.png', alt: 'Klett' },
  { src: '/publishers/maison.png', alt: 'Maison des Langues' },
  { src: '/publishers/mm.png', alt: 'MM Publications' },
  { src: '/publishers/natgeo.png', alt: 'National Geographic Learning' },
  { src: '/publishers/phonicshero.png', alt: 'Phonics Hero' },
  { src: '/publishers/pickatale.png', alt: 'Pickatale' },
  { src: '/publishers/scholastic.png', alt: 'Scholastic' },
  { src: '/publishers/studysync.png', alt: 'StudySync' },
  { src: '/publishers/universalelt.png', alt: 'Universal ELT' },
  { src: '/publishers/vocatooki.png', alt: 'Vocatooki' },
]

export function getRoundedPublisherCount(): string {
  const count = publisherLogos.length;
  if (count <= 10) return `${count}+`;

  // Round down to nearest 10
  const roundedDown = Math.floor(count / 10) * 10;
  return `${roundedDown}+`;
}
