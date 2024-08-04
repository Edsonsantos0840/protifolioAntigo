import Image from "next/image";
import projeto from "../../../../public/projeto.png";
import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";

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

}

export default function CardProjeto(props: PropsCardProjeto) {
  const imagens: any = [props.im1, props.im2, props.im3, props.im4, props.im5, props.im6, props.im7, props.im8, props.im9, props.im10, props.im11]

  return (
    <>
      <div className="flex flex-col justify-between items-center shadow-lg bg-[var(--corFundo)] md:p-4 md:my-5 md:min-w-[45vw] ">

        <div className="flex flex-col justify-between items-center md:w-[100%] ">

          <div className="md:flex justify-around items-center md:my-4 md:gap-2 md:w-[100%]">

            <div className=" w-[50%]">
              <h3 className="text-[var(--base)] md:my-2 md:text-[1.3rem] ">
                {props.nome}
              </h3>
              <p className="text-[var(--base)] md:text-[.8rem] ">
                {props.descrição}
              </p>
            </div>
            <Carrossel images={imagens}/>

          </div>

          <div className="flex justify-between items-center md:w-[100%] md:gap-3 shadow-md ">
          <div className="bg-[var(--opacitySucess)] md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105  hover:bg-[var(--opacityError)] rounded-md md:w-[33%]">
            <h3 className="text-[var(--base)] md:my-2 md:text-[1rem]">
               {props.tec1}
            </h3>
            <BotaoInvertido texto="Site"/>
          </div>
          <div className="bg-[var(--opacitySucess)]  md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105 hover:bg-[var(--opacityError)] rounded-md md:w-[33%]">
            <h3 className="text-[var(--corTexto)] hover:text-[var(--base)] md:my-2 md:text-[1rem] ">
              {props.tec2}
            </h3>
            <BotaoInvertido texto="Github"/>
          </div>
          <div className="bg-[var(--opacitySucess)]  md:p-4 flex flex-col justify-between items-center shadow-md hover:scale-105 hover:bg-[var(--opacityError)] rounded-md md:w-[33%]">
            <h3 className="text-[var(--corTexto)] hover:text-[var(--base)] md:my-2 md:text-[1rem] ">
             {props.tec3}
            </h3> 
            <BotaoInvertido texto="Fale Comigo"/>
          </div>

        </div>

        </div>
      </div>
    </>
  );
}
