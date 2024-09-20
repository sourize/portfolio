import Image from 'next/image';
import BlurFade from './magicui/blur-fade';

const images = [
  { src: '/gallery/1.jpg', alt: '' },
  { src: '/gallery/4.jpg', alt: '' },
  { src: '/gallery/5.jpg', alt: '' },
  { src: '/gallery/6.jpg', alt: '' },
  { src: '/gallery/7.jpg', alt: '' },
];

export function ImageGallery() {
  return (
    <BlurFade delay={0.1}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((img, index) => (
          <div key={index} className={`relative aspect-square ${index === 2 ? 'col-span-2 row-span-2' : ''}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}