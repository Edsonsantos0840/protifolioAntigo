// components/Carousel.js
import { useEffect, useState } from 'react';

import Image from 'next/image';

interface PropsCarrossel{
    images: any[];
}

export default function Carrossel(props: PropsCarrossel): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
 
    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
        }, 4000); // Muda a cada 4 segundos
    
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
      }, [props.images.length]);
    
      return (
        <div className='lg:w-[100%] m-auto overflow-hidden relative'>
          <div
            className='flex ease-in duration-500'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {props.images.map((src, index) => (
              <div className='min-w-full ease-in duration-500' key={index}>
                <Image src={src} alt={`Imagem ${index }` } className='w-full block ease-in duration-500' />
              </div>
            ))}
          </div>
        </div>
      );
};


