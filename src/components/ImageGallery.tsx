import Image from 'next/image';
import BlurFade from './magicui/blur-fade';

const images = [
  { src: '/gallery/1.jpg', alt: '' },
  { src: '/gallery/2.jpg', alt: '' },
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
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`relative w-full ${getImageClass(index)}`}
            style={{
              paddingBottom: getAspectRatio(index),
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="rounded-lg object-cover"
              quality={90}
            />
          </div>
        ))}
      </div>
    </BlurFade>
  );
}

function getImageClass(index: number): string {
  const classes = [
    'transform translate-y-2',
    'transform -translate-y-2',
    'transform translate-y-4',
    'transform -translate-y-4',
    'transform translate-y-3',
    'transform -translate-y-3',
  ];
  return classes[index % classes.length];
}

function getAspectRatio(index: number): string {
  const ratios = ['100%', '90%', '110%', '95%', '105%', '100%'];
  return ratios[index % ratios.length];
}
