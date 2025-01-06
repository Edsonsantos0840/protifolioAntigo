import { StaticImageData } from "next/image";

export interface ProdutoProps {
   im1: (StaticImageData | string);
   im2: (StaticImageData | string);
   im3: (StaticImageData | string);
   im4: (StaticImageData | string);
   im5: (StaticImageData | string);
   im6: (StaticImageData | string);
   im7: (StaticImageData | string);
   im8: (StaticImageData | string);
   im9: (StaticImageData | string);
   im10: (StaticImageData | string);
   im11: (StaticImageData | string);
   nome: string;
   descrição: string;
   tec1: string;
   tec2: string;
   tec3: string;
   git: string;
   site: string;
   whats: string;
}

export interface PropsBotao {
   texto: string,
   bgCor?: string;
   textoCor?: string,
}