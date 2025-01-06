//Componentes.
import Botao from "../botões/Botão";
import AnimaTexto from "../display/AnimaTexto";
//Módulos
import Image from "next/image";
import Link from "next/link";
//Ícones
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Container from "../Container";

export default function CardHeader() {
  return (
    <section
      id="inicio "
      className="body2  w-full md:alinha4  "
    >
       {/* Sessão do head do site. */}
      <div className="body w-full alinha5 lg:justify-center lg:gap-2 p-2 md:px-5 md:py-24 ">
        <div className=" hidden w-[120px] h-[120px] md:w-[250px] md:h-[250px] md:alinha3  bg-[#00ffff] hover:scale-105 p-1 rounded-full">
          <Image
            quality={100} 
            src="/capa.png"
            alt="Foto de perfil"
            width={250}
            height={250}
            className=" md:max-h-[245px] rounded-full"
            priority
            />
        </div>
        <div className="alinha">
          <h1 className="text-[2.2rem] md:text-[3rem] lg:text-4xl">
            <AnimaTexto texto="Sou Edson Santos." />
          </h1>
          <p className="text-md md:text-[1.8rem] lg:text-xl">
            Desenvolvedor Front-End
          </p>
          <div className="alinha3 gap-3 md:gap-6 pb-3 mt-2">
            <div className=" md:p-2 text-6xl lg:text-5xl rounded-sm md:rounded-lg shadow-md hover:scale-125 cursor-pointer ease-in duration-500 bg-[var(--base)] hover:bg-[--corPrincipalEnd]">
              <Link
                href={"https://github.com/Edsonsantos0840"}
                target="_blank"
                className=" headerLink lg:text-5xl"
                >
                <FaGithubSquare />
              </Link>
            </div>
            <div className="headerIcone">
              <Link
                href={"https://www.linkedin.com/in/edsonpsantos/"}
                target="_blank"
                className=" headerLink md:text-6xl lg:text-5xl"
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
                className=" headerLink md:text-6xl lg:text-5xl"
                >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    <Container>
      <div className=" alinha6 p-2 md:m-5 md:gap-2">
        {/* <Carrossel/> */}
        <h2 className="text-[var(--corPrincipalEnd)]   ">
          Eu Posso te ajudar.
        </h2>
        <h3 className="text-[var(--corTexto2)] font-serif text-justify my-1 ">
          <AnimaTexto texto="Tenho habilidades em HTML, CSS, JavaScript, TypeScript, React, NextJs, Tailwind CSS" />
        </h3>
        <p className="text-[var(--corPrincipalEnd)] text-justify ">
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
     </Container>
    </section>
  );
}
