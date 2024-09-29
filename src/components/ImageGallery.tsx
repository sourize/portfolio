import Image from 'next/image';
import BlurFade from './magicui/blur-fade';

const images = [
  { src: '/gallery/1.jpg', alt: '' },
  { src: '/gallery/2.jpg', alt: '' },
  { src: '/gallery/3.jpg', alt: '' },
  { src: '/gallery/4.jpg', alt: '' },
  { src: '/gallery/5.jpg', alt: '' },
  { src: '/gallery/6.jpg', alt: '' },
  { src: '/gallery/7.jpg', alt: '' },
  { src: '/gallery/8.jpg', alt: '' },
  { src: '/gallery/9.jpg', alt: '' },
  { src: '/gallery/10.jpg', alt: '' },
];

export function ImageGallery() {
  return (
    <BlurFade delay={0.1}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative aspect-square"
            style={{
              '--image-size': index % 2 === 0 ? '100%' : 'calc(100% + 3px)',
            } as React.CSSProperties}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="rounded-lg object-cover"
              style={{
                width: 'var(--image-size)',
                height: 'var(--image-size)',
              }}
              quality={90}
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
