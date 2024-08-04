"use client";
// Módulos
import Link from "next/link";
import Image from "next/image";
import {
  FaGithubSquare,
  FaLinkedin,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
//Componentes.
import perfil from "../../public/foto.png";
import apresentaçao from "../../public/um pouco.png";
import nextAuth from "../../public/NextAuth (2).png";
import prisma from "../../public/Prima ORM.png";
import AnimaTexto from "./components/display/AnimaTexto";
import Botao from "./components/botões/Botão";
import CardProjeto from "./components/cards/CardProjeto";
import { emidio } from "./components/listas/ListaEmidio";
import {marmore} from '@/app/components/listas/ListaMarmore'
import { brasilCard } from "./components/listas/ListaBrasilcard";
import { martinez } from "./components/listas/ListaMartinez";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  relative w-full">
      {/* Área de navegação do topo. */}
      <nav className="fixed flex justify-around items-center shadow-lg w-[100vw] bg-[var(--corPrincipal)] body z-20">
        <div>
          <h3 className="font-especial hover:scale-105 ease-in duration-300">
            EPS Soluções
          </h3>
        </div>
        <div className="flex justify-between items-center md:gap-6">
          <Link
            href="#inicio"
            className="hover:bg-[var(--base)] hover:text-[var(--corPrincipal)] hover:scale-105 md:p-2 active:bg-[var(--base)] active:text-[var(--corPrincipal)] active:scale-105 ease-in duration-300"
          >
            Início
          </Link>
          <Link
            href="#sobre"
            className="hover:bg-[var(--base)] hover:text-[var(--corPrincipal)] hover:scale-105 md:p-2 active:bg-[var(--base)] active:text-[var(--corPrincipal)] active:scale-105 ease-in duration-300"
          >
            Sobre
          </Link>
          <Link
            href="#projetos"
            className="hover:bg-[var(--base)] hover:text-[var(--corPrincipal)] hover:scale-105 md:p-2 active:bg-[var(--base)] active:text-[var(--corPrincipal)] active:scale-105 ease-in duration-300"
          >
            Projetos
          </Link>
          <Link
            href="#tecnologias"
            className="hover:bg-[var(--base)] hover:text-[var(--corPrincipal)] hover:scale-105 md:p-2 active:bg-[var(--base)] active:text-[var(--corPrincipal)] active:scale-105 ease-in duration-300"
          >
            Tecnologias
          </Link>
          <Link
            href="#contato"
            className="hover:bg-[var(--base)] hover:text-[var(--corPrincipal)] hover:scale-105 md:p-2 active:bg-[var(--base)] active:text-[var(--corPrincipal)] active:scale-105 ease-in duration-300"
          >
            Contato
          </Link>
        </div>
      </nav>
      <div className="w-full pt-10">
        {/* Sessão do head do site. */}
        <section
          id="inicio "
          className="md:flex flex-col justify-around items-center body2  w-full"
        >
          <div className="flex justify-around items-center body w-full md:px-5 md:py-24">
            <div className="w-[250px] h-[250px] rounded-full hover:scale-105">
              <Image
                src={perfil}
                alt="Foto de perfil"
                width={250}
                height={250}
                className=" rounded-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1>
                <AnimaTexto texto="Sou Edson Santos." />
              </h1>
              <p className="text-xl">Desenvolvedor Front-End</p>
              <div className="flex justify-center items-center md:gap-6 mt-2">
                <div className="bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaGithubSquare />
                </div>
                <div className="bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaLinkedin />
                </div>
                <div className="bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  md:w-[60%] md:p-2 md:m-5 md:gap-2">
            {/* <Carrossel/> */}
            <h3 className="text-[var(--corPrincipalEnd)] text-[1.1rem]  ">
              Eu Posso te ajudar.
            </h3>
            <h3 className="text-[var(--corTexto2)] text-[1.3rem] text-center ">
              <AnimaTexto texto="Tenho habilidades em HTML, CSS, JavaScript, TypeScript, React, NextJs, Tailwind CSS, Mongo DB, NextAuth e Prima ORM ." />
            </h3>
            <p className="text-[var(--corPrincipalEnd)] text-center ">
              Desenvolvo interfaces web intuitivas e responsivas, que
              proporcionam uma excelente experiência do usuário. Crio designs
              modernos e atraentes, combinando estética e funcionalidade para
              alcançar os objetivos de cada projeto.
            </p>
            <Botao texto="Fale Comigo" />
          </div>
        </section>
        {/* Sessão de apresentação pessoal. */}
        <section
          id="sobre"
          className="md:flex flex-col justify-around items-center body2 w-full pt-14"
        >
          <div className="md:w-[70%] text-center md:px-5 md:my-[-35px]">
            <h3 className="text-[var(--corTexto2)] md:my-4 ">Quem sou eu?</h3>
            <h2 className="text-[var(--corTexto2)] md:my-4 ">
              Olá, Sou Edson Santos
            </h2>
            <p className="text-[var(--corTexto2)] md:my-4 ">
              Sempre fui apaixonado por tecnologia, e tudo que diz respeito a
              tecnologia me encanta. Passei muito tempo acreditando que a área
              da programação não era para mim, por conta do pouco tempo que
              tinha para estudar. Porém, descobri que trabalhar como programador
              é o que eu realmente quero para minha vida, tenho muito prazer em
              programar, e adoro aprender tudo sobre o mundo da tecnologia, e
              mesmo com as dificuldades eu não vou desistir. Descobri também que
              com dedicação, e uma boa organização, consigo potencializar o
              tempo e ter um bom resultado, e espero fazer parte do seu time.
              Prometo que vou me esforçar ao máximo, para satisfazer as
              expectativas.
            </p>
          </div>
          <div className="md:flex justify-between items-center my-4 md:w-[80%]">
            <div className="w-[250px] h-[350px]  hover:scale-105 md:w-[40%]">
              <Image
                src={apresentaçao}
                alt="Foto de perfil"
                width={250}
                height={350}
                className=" "
              />
            </div>
            <div className="md:w-[60%] text-center">
              <h3 className="text-[var(--corTexto2)] my-4 ">
                Mais um pouco sobre mim.
              </h3>
              <p className="text-[var(--corTexto2)] my-4 ">
                Além de ser muito esforçado e focado nos meus objetivos, tenho
                muita facilidade de lidar com pessoas e trabalhar em equipe.
                Trabalhei bastante tempo como representante comercial. Uma parte
                desse tempo como gerente de equipe, onde era responsável por uma
                equipe de Quinze pessoas.
              </p>
            </div>
          </div>
        </section>
        {/* Sessão dos projetos. */}
        <section
          id="projetos"
          className="md:flex flex-col justify-between items-center body w-full pt-14"
        >
          <h2>Projetos</h2>
          <div className="flex justify-center items-center gap-6 md:px-5 md:min-w-[45%] ">
            <CardProjeto
              nome="M&A Marmores e Granitos."
              descrição="Este projeto foi desenvolvido para um cliente, com uma área de dashboard para adiministrar a equipe da empresa, utilizando as seguintes tecnologias."
              im1={marmore[0]}
              im2={marmore[1]}
              im3={marmore[2]}
              im4={marmore[3]}
              im5={marmore[4]}
              im6={marmore[5]}
              im7={marmore[6]}
              im8={marmore[7]}
              im9={marmore[8]}
              im10={marmore[9]}
              im11={marmore[10]}
              tec1="React e Tailwinds Css."
              tec2="TypeScript, NextAuth e NextJs."
              tec3="Prisma ORM e Mongo Db."
            />
            <CardProjeto
              nome="Espaço Emídio e Sá."
              descrição="Projeto passando por atualizações."
              im1={emidio[0]}
              im2={emidio[1]}
              im3={emidio[2]}
              im4={emidio[3]}
              im5={emidio[4]}
              im6={emidio[1]}
              im7={emidio[2]}
              im8={emidio[3]}
              im9={emidio[4]}
              im10={emidio[0]}
              im11={emidio[1]}
              tec1="Em Breve."
              tec2="Em Breve."
              tec3="Em Breve."
            />
          </div>
          <div className="flex justify-center items-center gap-6 md:px-5 md:min-w-[45%]">
            <CardProjeto
              im1={martinez[0]}
              im2={martinez[1]}
              im3={martinez[2]}
              im4={martinez[3]}
              im5={martinez[4]}
              im6={martinez[1]}
              im7={martinez[0]}
              im8={martinez[3]}
              im9={martinez[4]}
              im10={martinez[5]}
              im11={martinez[2]}
              nome="Martinez Tattoo Stúdios.."
              descrição="Projeto está passando por atualizações."
              tec1="Em Breve."
              tec2="Em Breve."
              tec3="Em Breve."
            />
            <CardProjeto
            im1={brasilCard[0]}
            im2={brasilCard[1]}
            im3={brasilCard[2]}
            im4={brasilCard[3]}
            im5={brasilCard[4]}
            im6={brasilCard[1]}
            im7={brasilCard[2]}
            im8={brasilCard[3]}
            im9={brasilCard[4]}
            im10={brasilCard[1]}
            im11={brasilCard[0]}
              nome="BrasilCard."
              descrição="Projeto passando por atualizações."
              tec1="Em Breve."
              tec2="Em Breve."
              tec3="Em Breve."
            />
          </div>
        </section>
        {/* Sessão de Tecnologias */}
        <section
          id="tecnologias"
          className="md:flex flex-col justify-around items-center body2 w-full pt-14"
        >
          <div className="md:w-[60%] md:flex flex-col justify-center items-center body2 w-full">
            <h2 className="text-[var(--corPrincipalEnd)]">Tecnologias</h2>
            <h3 className="text-[var(--corPrincipalEnd)]">
              Tecnologias que tenho me dedicado.
            </h3>
            <p className="text-[var(--corPrincipalEnd)] text-center md:my-3">
              Eu tenho me identificado bastante com as tecnologias Front-end.
              Procuro me dedicar as tecnologias mais utilizadas no mercado no
              momento, mas meu fóco é de não me limitar.
            </p>
            <div className="body w-[98vw] text-center md:p-4">
              <h3 className=" md:my-5">Minhas Habilidades Hoje.</h3>
              <div className="flex justify-center items-center md:gap-6 md:mt-2">
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaHtml5 />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    HTML
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaCss3Alt />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    CSS
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <TbBrandJavascript />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    JAVASCRIPT
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaReact />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    REACT
                  </h3>
                </div>
              </div>
              <div className="flex justify-center items-center md:gap-6 md:mt-4">
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <TbBrandNextjs />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    NEXTJS
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <TbBrandTypescript />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    TYPESCRIPT
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <TbBrandTailwind />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    TAILWIND
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <TbBrandMongodb />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    MONGODB
                  </h3>
                </div>
              </div>
              <div className="flex justify-center items-center md:gap-6 md:mt-4">
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <div className="w-[60px] h-[60px] rounded-full hover:scale-105">
                    <Image
                      src={nextAuth}
                      alt="Foto de perfil"
                      width={60}
                      height={60}
                      className=" rounded-full"
                    />
                  </div>
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    NEXTAUTH
                  </h3>
                </div>
                <div className="group bg-[var(--base)] text-[var(--corPrincipalEnd)] md:p-2 md:text-6xl rounded-lg shadow-md hover:bg- [--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <div className="w-[60px] h-[60px] rounded-full hover:scale-105  group">
                    <Image
                      src={prisma}
                      alt="Foto de perfil"
                      width={60}
                      height={60}
                      className=" rounded-full"
                    />
                  </div>
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    PRISMA
                  </h3>
                </div>
              </div>
              <h3 className=" md:mt-14 ">Tecnologias que estou estudando.</h3>
              <div className="md:flex justify-center items-center">
                <div className="group bg-[var(--base)] md:w-[10%] md:my-6 text-[var(--corPrincipalEnd)] md:p-2 md:text-8xl rounded-lg shadow-md hover:bg-[--corPrincipalEnd] hover:text-[var(--base)] hover:scale-125 cursor-pointer ease-in duration-500">
                  <FaNodeJs />
                  <h3 className=" md:mt-1 text-[.6rem] text-[var(--corPrincipalEnd)] group-hover:text-[var(--base)] ">
                    NODEJS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sessão de Contatos */}
        <section
          id="contato"
          className="md:flex flex-col justify-around items-center body2 w-full pt-14"
        >
          <h2 className="text-[var(--corPrincipalEnd)] md:my-3">
            Meus contatos
          </h2>
          <h3 className="text-[var(--corPrincipalEnd)] md:my-3">
            Quer me conhecer melhor?
          </h3>
          <p className="text-[var(--corPrincipalEnd)] md:my-1">
            Entre em contato comigo.
          </p>
          <div className="flex justify-center items-center md:gap-6 md:my-8">
            <div
              className=" md:p-2 md:text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <FaGithubSquare />
            </div>
            <div
              className=" md:p-2 md:text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <FaLinkedin />
            </div>
            <div
              className=" md:p-2 md:text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <FaWhatsapp />
            </div>
            <div
              className=" md:p-2 md:text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                  text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)] "
            >
              <Link href="mailto:edsonpsantos@gmail.com">
                <TfiEmail className="hover:text-[var(--corPrincipalEnd)]" />
              </Link>
            </div>
          </div>
        </section>
        <div className=" md:w-[98vw] flex flex-col justify-center items-center md:gap-2 mt-2 body ">
          <h3 className=" md:mt-5">Esse sou eu.</h3>
          <p className="text-[var(--base)] text-center md:mt-[-10px]">
            Espero que tenha gostado, aguardo seu contato.
          </p>

          <div className="flex justify-center items-center md:gap-4 md:my-4">
            <FaGithubSquare className="hover:text-white hover:scale-125 text-[var(--base2)] md:text-4xl rounded-lg shadow-md cursor-pointer ease-in duration-500" />
            <FaLinkedin className="hover:text-white hover:scale-125 text-[var(--base2)] md:text-4xl rounded-lg shadow-md cursor-pointer ease-in duration-500" />
            <FaWhatsapp className="hover:text-white hover:scale-125 text-[var(--base2)] md:text-4xl rounded-lg shadow-md cursor-pointer ease-in duration-500" />
          </div>
        </div>
      </div>
    </main>
  );
}
