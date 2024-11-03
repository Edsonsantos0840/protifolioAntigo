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
import AnimaTexto from "./components/display/AnimaTexto";
import Botao from "./components/botões/Botão";
import CardProjeto from "./components/cards/CardProjeto";
import { emidio } from "./components/listas/ListaEmidio";
import { marmore } from "@/app/components/listas/ListaMarmore";
import { brasilCard } from "./components/listas/ListaBrasilcard";
import { martinez } from "./components/listas/ListaMartinez";
import NavBar from "./components/navBar/NavBar";
import CardHeader from "./components/cards/CardHeader";
import CardApresentação from "./components/cards/CardApresentação";
import CardProjetoSessao from "./components/cards/CardProjetoSessao";
import CardTecnologia from "./components/cards/CardTecnologia";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  relative w-full">
      <NavBar />
      <div className="w-full md:pt-10 lg:pt-0">
        <CardHeader />
        <CardApresentação />
        <CardProjetoSessao />
        <CardTecnologia/>

        {/* Sessão de Contatos */}
        <section
          id="contato"
          className="flex md:flex flex-col justify-around text-center items-center body2 w-full pt-10 md:pt-14"
        >
          <h2 className="text-[var(--corPrincipalEnd)] my-1 md:my-3 text-[1.1rem] md:text-[1.6rem]">
            Meus contatos
          </h2>
          <h3 className="text-[var(--corPrincipalEnd)] my-1 md:my-3 text-[1.4rem] md:text-[1.5rem] ">
            Quer me conhecer melhor?
          </h3>
          <p className="text-[var(--corPrincipalEnd)] mt-[-5px]  lg:my-1 text-[1rem] md:text-[1.4rem] lg:text-[1rem]">
            Entre em contato comigo.
          </p>
          <div className="alinha3 gap-4 md:gap-6 my-2 md:my-8">
            <div
              className=" p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <Link href={"https://github.com/Edsonsantos0840"} target="_blank">
                <FaGithubSquare className="text-5xl md:text-8xl lg:text-7xl" />
              </Link>
            </div>
            <div
              className="p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <Link
                href={"https://www.linkedin.com/in/edsonpsantos/"}
                target="_blank"
              >
                <FaLinkedin className="text-5xl md:text-8xl lg:text-7xl" />
              </Link>
            </div>
            <div
              className=" p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)]"
            >
              <Link
                href={
                  "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
                }
                target="_blank"
              >
                <FaWhatsapp className="text-5xl md:text-8xl lg:text-7xl" />
              </Link>
            </div>
            <div
              className="p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                  text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)] "
            >
              <Link href="mailto:edsonpsantos@gmail.com">
                <TfiEmail className="hover:text-[var(--corPrincipalEnd)] text-5xl md:text-8xl lg:text-7xl " />
              </Link>
            </div>
          </div>
        </section>
        <div className="p-2 w-[100vw] lg:w-[98vw] flex flex-col justify-center items-center md:gap-2 mt-2 body ">
          <h3 className=" md:mt-5 text-[1.4rem] md:text-[1.5rem]">
            Esse sou eu.
          </h3>
          <p className="text-[var(--base)] text-center md:mt-[-10px] text-[1rem] md:text-[1.4rem] lg:text-[1rem]">
            Espero que tenha gostado, aguardo seu contato.
          </p>

          <div className="alinha3 gap-3 md:gap-4 my-1 md:my-4">
            <Link href={"https://github.com/Edsonsantos0840"} target="_blank">
              <FaGithubSquare className="hover:text-white hover:scale-125 text-[var(--base2)] md: rounded-lg shadow-md cursor-pointer ease-in duration-500 text-2xl md:text-4xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/edsonpsantos/"}
              target="_blank"
            >
              <FaLinkedin className="hover:text-white hover:scale-125 text-[var(--base2)] md: rounded-lg shadow-md cursor-pointer ease-in duration-500 text-2xl md:text-4xl" />
            </Link>
            <Link
              href={
                "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
              }
              target="_blank"
            >
              <FaWhatsapp className="hover:text-white hover:scale-125 text-[var(--base2)] md: rounded-lg shadow-md cursor-pointer ease-in duration-500 text-2xl md:text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
