//Módulos.
import Image from "next/image";
//Ícones.
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";

export default function CardTecnologia(): JSX.Element {
  return (
    <section
      id="tecnologias"
      className="md:flex flex-col justify-around items-center text-center body2 w-full p-2 pt-10 md:pt-14"
    >
        {/* Sessão de Tecnologias */}
      <div className="lg:w-[60%] md:flex flex-col justify-center items-center body2 w-full">
        <h2 className="text-[var(--corPrincipalEnd)] text-[1.1rem] md:text-[1.6rem]">
          Tecnologias
        </h2>
        <h3 className="text-[var(--corPrincipalEnd)] text-[1.4rem] md:text-[1.5rem]">
          Tecnologias que tenho me dedicado.
        </h3>
        <p className="text-[var(--corPrincipalEnd)] text-center md:my-3 text-[1rem] md:text-[1.4rem] lg:text-[1rem]">
          Eu tenho me identificado bastante com as tecnologias Front-end.
          Procuro me dedicar as tecnologias mais utilizadas no mercado no
          momento, mas meu fóco é de não me limitar.
        </p>
        <div className="body w-[100vw] lg:w-[98vw] text-center p-3 md:p-4">
          <h3 className=" md:my-5 text-[1.4rem] md:text-[1.5rem]">
            Minhas Habilidades Hoje.
          </h3>
          <div className="alinha3 gap-3 md:gap-6 mt-2 md:mt-2">
            <div className="tecIcone">
              <FaHtml5 className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">HTML</h3>
            </div>
            <div className="tecIcone">
              <FaCss3Alt className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">CSS</h3>
            </div>
            <div className="tecIcone">
              <TbBrandJavascript className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">JAVASCRIPT</h3>
            </div>
            <div className="tecIcone">
              <FaReact className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">REACT</h3>
            </div>
          </div>
          <div className="alinha3 gap-3 md:gap-6 mt-3 md:mt-4">
            <div className="tecIcone">
              <TbBrandNextjs className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">NEXTJS</h3>
            </div>
            <div className="tecIcone">
              <TbBrandTypescript className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">TYPESCRIPT</h3>
            </div>
            <div className="tecIcone">
              <TbBrandTailwind className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">TAILWIND</h3>
            </div>
            <div className="tecIcone">
              <TbBrandMongodb className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">MONGODB</h3>
            </div>
          </div>
          <div className="alinha3 gap-3 md:gap-6 mt-3 md:mt-4">
            <div className="tecImg ">
              <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full hover:scale-105">
                <Image
                  src="/NextAuth (2).png"
                  alt="Foto de perfil"
                  width={90}
                  height={90}
                  className=" rounded-full"
                />
              </div>
              <h3 className="tecLetras ">NEXTAUTH</h3>
            </div>
            <div className="tecImg ">
              <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full hover:scale-105  group ">
                <Image
                  src="/Prima ORM.png"
                  alt="Foto de perfil"
                  width={90}
                  height={90}
                  className=" rounded-full"
                />
              </div>
              <h3 className="tecLetras ">PRISMA</h3>
            </div>
          </div>
          <h3 className=" my-5 md:mt-14 text-[1.4rem] md:text-[1.5rem]">
            Tecnologias que estou estudando.
          </h3>
          <div className="alinha3">
            <div className="group bg-[var(--base)] w-[18%] md:w-[15%]  lg:w-[10%] md:my-6 text-[var(--corPrincipalEnd)] p-2 md:p-2 text-8xl rounded-lg shadow-md ">
              <FaNodeJs className="text-5xl md:text-8xl" />
              <h3 className="tecLetras ">NODEJS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
