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
      className="md:alinha4 body2 w-full p-2 pt-10 md:pt-14"
    >
      {/* Sessão de Tecnologias */}
      <div className="lg:w-[60%] md:flex flex-col justify-center items-center body2 w-full">
        <h2 className="text-[var(--corPrincipalEnd)] text-[1.1rem] md:text-[1.6rem] lg:text-[1.9rem] text-center">
          Tecnologias
        </h2>
        <h3 className="text-[var(--corPrincipalEnd)] text-[1.4rem] md:text-[1.5rem] lg:text-[1.8rem]">
          Tecnologias que tenho me dedicado.
        </h3>
        <p className="text-[var(--corPrincipalEnd)] text-center md:my-3 text-[1rem] md:text-[1.4rem] lg:text-[1.3rem]">
          Eu tenho me identificado bastante com as tecnologias Front-end.
          Procuro me dedicar as tecnologias mais utilizadas no mercado no
          momento, mas meu fóco é de não me limitar.
        </p>
        <div className="body w-[100vw] lg:w-[98vw] text-center p-3 md:p-4 ">
          <h3 className=" md:my-5 text-[1.4rem] md:text-[1.5rem] lg:text-[1.9rem]">
            Minhas Habilidades Hoje.
          </h3>
          <div className="alinha3 gap-3 md:gap-6 mt-2 md:mt-2">
            <div className="tecIcone group">
              <FaHtml5 className="tecIcone2" />
              <h3 className="tecLetras ">HTML</h3>
            </div>
            <div className="tecIcone group">
              <FaCss3Alt className="tecIcone2" />
              <h3 className="tecLetras ">CSS</h3>
            </div>
            <div className="tecIcone group">
              <TbBrandJavascript className="tecIcone2" />
              <h3 className="tecLetras ">JAVASCRIPT</h3>
            </div>
            <div className="tecIcone group">
              <FaReact className="tecIcone2" />
              <h3 className="tecLetras ">REACT</h3>
            </div>
          </div>
          <div className="alinha3 gap-3 md:gap-6 mt-3 md:mt-4">
            <div className="tecIcone group">
              <TbBrandNextjs className="tecIcone2" />
              <h3 className="tecLetras ">NEXTJS</h3>
            </div>
            <div className="tecIcone group">
              <TbBrandTypescript className="tecIcone2" />
              <h3 className="tecLetras ">TYPESCRIPT</h3>
            </div>
            <div className="tecIcone group">
              <TbBrandTailwind className="tecIcone2" />
              <h3 className="tecLetras ">TAILWIND</h3>
            </div>
            <div className="tecIcone group">
              <TbBrandMongodb className="tecIcone2" />
              <h3 className="tecLetras ">MONGODB</h3>
            </div>
          </div>
          <div className="alinha3 gap-3 md:gap-6 mt-3 md:mt-4">
            <div className="tecImg group ">
              <div className="tecImg2">
                <Image
                  src="/NextAuth (2).png"
                  alt="Foto de perfil"
                  width={90}
                  height={90}
                  className=" rounded-full m-auto bg-cover pb-2"
                />
              </div>
              <h3 className="tecLetras ">NEXTAUTH</h3>
            </div>
            <div className="tecImg group ">
              <div className="tecImg2  group ">
                <Image
                  src="/Prima ORM.png"
                  alt="Foto de perfil"
                  width={90}
                  height={90}
                  className=" rounded-full  m-auto bg-cover pb-2"
                />
              </div>
              <h3 className="tecLetras ">PRISMA</h3>
            </div>
          </div>
          <h3 className=" my-5 md:mt-14 text-[1.4rem] md:text-[1.5rem] lg:text-[1.9rem] ">
            Tecnologias que estou estudando.
          </h3>
          <div className="alinha3 mb-3">
            <div className="tecIcone group ">
              <FaNodeJs className="tecIcone2" />
              <h3 className="tecLetras ">NODEJS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
