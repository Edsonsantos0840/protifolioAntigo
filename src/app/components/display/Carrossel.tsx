// components/Carousel.js
import { ImagesProps } from '@/app/hooks/UseCarrossel';
import {} from '@/'
import Image from 'next/image';

export default function Carrossel({image}: ImagesProps) {

      return (
        <div className='lg:w-[100%] m-auto overflow-hidden relative'>
          <div
            className='flex ease-in duration-500'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 2.5s ease-in-out", // Transição aqui
            }}
          >
            {image.map((src, index) => (
              <div className='min-w-full ease-in duration-500' key={index}>
                <Image src={src} alt={`Imagem ${index }` } className='w-full block ease-in duration-500' />
              </div>
            ))}
          </div>
        </div>
      );
};


