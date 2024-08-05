
import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";
import Link from "next/link";

interface PropsCardProjeto{
    nome: string,
    descrição: string,
    im1: any
    im2?: any
    im3?: any
    im4?: any
    im5?: any
    im6?: any
    im7?: any
    im8?: any
    im9?: any
    im10?: any
    im11?: any
    tec1: string,
    tec2: string,
    tec3: string,
    git: string
    site: string
    whats: string

}

export default function CardProjeto(props: PropsCardProjeto) {
  const imagens: any = [props.im1, props.im2, props.im3, props.im4, props.im5, props.im6, props.im7, props.im8, props.im9, props.im10, props.im11]

  return (
    <>
      <div className="flex flex-col justify-between items-center shadow-lg bg-[var(--corFundo)] text-center p-2  md:p-4 my-5 md:min-w-[45vw] md:min-h-[380px] ">

        <div className="flex flex-col justify-between items-center md:w-[100%] ">
          <div className="flex flex-col md:flex md:justify-around items-center md:my-4 md:gap-2 md:w-[100%]">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-[var(--base)]  md:my-2 text-[1.3rem] md:text-[1.5rem] my-2">
                {props.nome}
              </h3>
              <p className="text-[var(--base)] text-[1rem] md:text-[1.4rem] my-2 ">
                {props.descrição}
              </p>
            </div>
            <Carrossel images={imagens}/>
          </div>
          <div className="flex justify-between items-center w-[100%] gap-2 shadow-md my-3 ">
          <div className="bg-[var(--opacitySucess)] p-2 md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105  hover:bg-[var(--opacityError)] rounded-md min-h-[22vh] min-w-[29vw] md:min-h-[19vw] md:w-[33%]">
            <h3 className="text-[var(--base)] text-[1rem] md:text-[1.3rem] md:my-2 ">
               {props.tec1}
            </h3>
            <Link href={props.site} target="_blank" className=" w-[103%]">
            <BotaoInvertido texto="Site"/>
            </Link>
          </div>
          <div className="bg-[var(--opacitySucess)] p-2 md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105  hover:bg-[var(--opacityError)] rounded-md min-h-[22vh] min-w-[29vw] md:min-h-[19vw] md:w-[33%]">
          <h3 className="text-[var(--base)] text-[1rem] md:text-[1.3rem] md:my-2 ">
              {props.tec2}
            </h3>
            <Link href={props.git} target="_blank" className=" md:w-[103%]">
            <BotaoInvertido texto="Github"/>
            </Link>
          </div>
          <div className="bg-[var(--opacitySucess)] p-2 md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105  hover:bg-[var(--opacityError)] rounded-md min-h-[22vh] min-w-[29vw] md:min-h-[19vw] md:w-[33%]">
          <h3 className="text-[var(--base)] text-[1rem] md:text-[1.3rem] md:my-2 ">
             {props.tec3}
            </h3> 
            <Link href={props.whats} target="_blank" className=" md:w-[103%]">
            <BotaoInvertido texto="Fale Comigo"/>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
