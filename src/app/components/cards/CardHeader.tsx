//Componentes.
import Botao from "../botões/Botão";
import AnimaTexto from "../display/AnimaTexto";
//Módulos
import Image from "next/image";
import Link from "next/link";
//Ícones
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function CardHeader(): JSX.Element {
  return (
    <section
      id="inicio "
      className="body2  w-full md:alinha4  "
    >
      {/* Sessão do head do site. */}
      <div className="body w-full alinha5 lg:justify-center lg:gap-2 p-2 md:px-5 md:py-24 ">
        <div className=" hidden w-[120px] h-[120px] md:w-[250px] md:h-[250px] md:alinha3  bg-[#00ffff] hover:scale-105 p-1 rounded-full">
          <Image
            src="/capa.png"
            alt="Foto de perfil"
            width={245}
            height={245}
            className=" md:max-h-[245px] rounded-full"
          />
        </div>
        <div className="alinha">
          <h1 className="text-[2.2rem] md:text-[3rem] lg:text-5xl">
            <AnimaTexto texto="Sou Edson Santos." />
          </h1>
          <p className="text-md md:text-[1.8rem] lg:text-2xl">
            Desenvolvedor Front-End
          </p>
          <div className="alinha3 gap-3 md:gap-6 pb-3 mt-2">
            <div className=" md:p-2 text-6xl md:text-6xl rounded-sm md:rounded-lg shadow-md hover:scale-125 cursor-pointer ease-in duration-500 bg-[var(--base)] hover:bg-[--corPrincipalEnd]">
              <Link
                href={"https://github.com/Edsonsantos0840"}
                target="_blank"
                className=" headerLink "
              >
                <FaGithubSquare />
              </Link>
            </div>
            <div className="headerIcone">
              <Link
                href={"https://www.linkedin.com/in/edsonpsantos/"}
                target="_blank"
                className=" headerLink md:text-6xl "
              >
                <FaLinkedin />
              </Link>
            </div>
            <div className="headerIcone">
              <Link
                href={
                  "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
                }
                target="_blank"
                className=" headerLink md:text-6xl "
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-[80%] alinha6 p-2 md:m-5 md:gap-2">
        {/* <Carrossel/> */}
        <h3 className="text-[var(--corPrincipalEnd)] text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]  ">
          Eu Posso te ajudar.
        </h3>
        <h3 className="text-[var(--corTexto2)] font-serif text-[1.3rem] md:text-[1.7rem] lg:text-[1.9rem] text-center my-1">
          <AnimaTexto texto="Tenho habilidades em HTML, CSS, JavaScript, TypeScript, React, NextJs, Tailwind CSS, Mongo DB, NextAuth e Prima ORM ." />
        </h3>
        <p className="text-[var(--corPrincipalEnd)] text-[1rem] md:text-[1.4rem] lg:text-[1.3rem]  text-center ">
          Desenvolvo interfaces web intuitivas e responsivas, que proporcionam
          uma excelente experiência do usuário. Crio designs modernos e
          atraentes, combinando estética e funcionalidade para alcançar os
          objetivos de cada projeto.
        </p>
        <Link
          href={
            "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
          }
          target="_blank"
          className="w-full md:w-[90%] lg:w-[60%]"
        >
          <Botao texto="Fale Comigo" />
        </Link>
      </div>
    </section>
  );
}
