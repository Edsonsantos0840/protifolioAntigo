//Componentes

import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";
//Módulos.
import Link from "next/link";
import { ProdutoProps } from "@/app/interfaces";
import Container from "../Container";

export default function CardProjeto(props: ProdutoProps) {
  const imagens = [
    props.im1,
    props.im2,
    props.im3,
    props.im4,
    props.im5,
    props.im6,
    props.im7,
    props.im8,
    props.im9,
    props.im10,
    props.im11,
  ].filter(Boolean);

  return (
    <>
      <Container>
      <div className="alinha shadow-lg bg-gray-200 p-2  my-2 md:my-4 rounded-lg md:p-4">
        <div className="alinha ">
          <div className=" flex flex-col md:justify-around items-center md:my-2 ">
            <div className="w-full ">
              <h3 className="text-[var(--corPrincipal)] my-2 font-bold">
                {props.nome}
              </h3>
              <p className="text-[var(--corPrincipal)] my-2 line-clamp-1 ">
                {props.descrição}
              </p>
            </div>
            <Carrossel images={imagens} />
          </div>
          <div className="alinha2 w-full gap-3 shadow-md my-3  ">
            <div className="conTec ">
              <h3 className="tec ">{props.tec1}</h3>
              <Link href={props.site} target="_blank" className=" w-full">
                <BotaoInvertido texto="Site" />
              </Link>
            </div>
            <div className="conTec ">
              <h3 className="tec ">{props.tec2}</h3>
              <Link href={props.git} target="_blank" className=" w-full">
                <BotaoInvertido texto="Github" />
              </Link>
            </div>
            <div className="conTec hidden md:alinha ">
              <h3 className="tec ">{props.tec3}</h3>
              <Link href={props.whats} target="_blank" className=" w-full ">
                <BotaoInvertido texto="Contato" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
}
