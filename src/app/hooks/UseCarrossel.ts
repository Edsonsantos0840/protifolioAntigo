import { Images } from "@/types/img";
import { useEffect, useState } from "react";

export interface ImagesProps{
  imag: Images[]
}

export default function UseCarrossel(ima: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imag, setImag] = useState(ima);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imag.length);

        }, 4000); // Muda a cada 4 segundos
    
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
      }, [imag.length]);
    
      return {currentIndex, setImag, setCurrentIndex }
};
