//Componentes
import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";
//Módulos.
import Link from "next/link";

interface PropsCardProjeto {
  nome: string;
  descrição: string;
 
  tec1: string;
  tec2: string;
  tec3: string;
  git: string;
  site: string;
  whats: string;
}

export default function CardProjeto(props: PropsCardProjeto) {


  return (
    <>
      <div className="alinha md:min-w-[49vw] md:min-h-[380px] lg:min-h-[575px] shadow-lg bg-gray-200 text-center p-2  md:p-4 my-5 rounded-lg">
        <div className="alinha md:w-[100%] ">
          <div className="md:w-[100%] flex flex-col md:flex md:justify-around items-center md:my-4 md:gap-2">
            <div className="w-full lg:w-[100%]">
              <h3 className="text-[var(--corPrincipal)] text-[1.3rem] md:text-[1.5rem] lg:text-[1.5rem] my-2 font-bold">
                {props.nome}
              </h3>
              <p className="text-[var(--corPrincipal)] text-[1rem] md:text-[1.4rem] lg:text-[1rem] my-2 ">
                {props.descrição}
              </p>
            </div>
            <Carrossel />
          </div>
          <div className="alinha2 w-full gap-2 shadow-md my-3  ">
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
                <BotaoInvertido texto="Fale Comigo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
