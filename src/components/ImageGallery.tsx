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
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative"
            style={{
              width: '197px',
              height: index % 3 === 1 ? '147px' : '172px',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="197px"
              className="rounded-lg object-cover"
              quality={90}
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
