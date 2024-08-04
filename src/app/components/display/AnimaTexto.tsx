'use Client'
// Módulos.
import { useState, useEffect } from 'react';

interface PropsAnimaTexto {
  texto: string,
  tipo?: string
}

export default function AnimaTexto(props: PropsAnimaTexto){
  const [containText, setContainText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < props.texto.length) {
      const timeoutId = setTimeout(() => {
        setContainText((prev) => prev + props.texto[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Tempo em milissegundos para cada letra aparecer
      return () => clearTimeout(timeoutId);
    }
  }, [index, props.texto]);

  return (
    <>
       {containText}
    </>
   
  );
};


