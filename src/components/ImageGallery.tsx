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
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0
                ? 'col-span-2 row-span-2'
                : index === 3
                ? 'col-span-2'
                : ''
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={
                index === 0
                  ? '(max-width: 768px) 66vw, 50vw'
                  : index === 3
                  ? '(max-width: 768px) 66vw, 33vw'
                  : '(max-width: 768px) 33vw, 25vw'
              }
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
