//Componentes
import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";
//Módulos.
import Link from "next/link";

interface PropsCardProjeto {
  nome: string;
  descrição: string;
  im1: any;
  im2?: any;
  im3?: any;
  im4?: any;
  im5?: any;
  im6?: any;
  im7?: any;
  im8?: any;
  im9?: any;
  im10?: any;
  im11?: any;
  tec1: string;
  tec2: string;
  tec3: string;
  git: string;
  site: string;
  whats: string;
}

export default function CardProjeto(props: PropsCardProjeto): JSX.Element {
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
  ];

  return (
    <>
      <div className="alinha shadow-lg bg-gray-200 text-center p-2  md:p-4 my-5 md:min-w-[45vw] md:min-h-[380px] lg:min-h-[575px]  rounded-lg">
        <div className="alinha md:w-[100%] ">
          <div className="flex flex-col md:flex md:justify-around items-center md:my-4 md:gap-2 md:w-[100%]">
            <div className="w-full lg:w-[100%]">
              <h3 className="text-[var(--corPrincipal)]  md:my-2 text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] my-2 font-bold">
                {props.nome}
              </h3>
              <p className="text-[var(--corPrincipal)] text-[1rem] md:text-[1.4rem] lg:text-[1.2rem] my-2 ">
                {props.descrição}
              </p>
            </div>
            <Carrossel images={imagens} />
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
