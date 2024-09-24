import Image from 'next/image';
import BlurFade from './magicui/blur-fade';

const images = [
  { src: '/gallery/1.jpg', alt: '' },
  { src: '/gallery/4.jpg', alt: '' },
  { src: '/gallery/3.jpg', alt: '' },
  { src: '/gallery/5.jpg', alt: '' },
  { src: '/gallery/6.jpg', alt: '' },
  { src: '/gallery/7.jpg', alt: '' },
  { src: '/gallery/8.jpg', alt: '' },
];

export function ImageGallery() {
  return (
    <BlurFade delay={0.1}>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`relative ${
              index === 0 ? 'col-span-2 row-span-2' :
              index === 5 ? 'col-span-2' :
              'aspect-square'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
