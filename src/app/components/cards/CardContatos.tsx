import Link from 'next/link'
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

export default function CardContatos(): React.JSX.Element {
  return (
    <section
    id="contato"
    className="alinha4 md:flex body2 w-full pt-10 md:pt-14"
  >
    {/* Sessão de Contatos */}
    <h2 className="text-[var(--corPrincipalEnd)] my-1 md:my-3 text-[1.6rem] md:text-[1.8rem] lg:text-[1.9rem]">
      Meus contatos
    </h2>
    <h3 className="text-[var(--corPrincipalEnd)] my-1 md:my-3 text-[1.4rem] md:text-[1.7rem] lg:text-[1.8rem] ">
      Quer me conhecer melhor?
    </h3>
    <p className="text-[var(--corPrincipalEnd)] mt-[-5px] lg:my-1 text-[1.2rem] md:text-[1.4rem] lg:text-[1.3rem]">
      Entre em contato comigo.
    </p>
    <div className="alinha3 gap-4 md:gap-6 my-2 md:my-8">
      <div
        className="contatoLink"
      >
        <Link href={"https://github.com/Edsonsantos0840"} target="_blank">
          <FaGithubSquare className="contatoIcones" />
        </Link>
      </div>
      <div
        className="contatoLink"
      >
        <Link
          href={"https://www.linkedin.com/in/edsonpsantos/"}
          target="_blank"
        >
          <FaLinkedin className="contatoIcones" />
        </Link>
      </div>
      <div
        className=" contatoLink"
      >
        <Link
          href={
            "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
          }
          target="_blank"
        >
          <FaWhatsapp className="contatoIcones" />
        </Link>
      </div>
      <div
        className="contatoLink"
      >
        <Link href="mailto:edsonpsantos@gmail.com">
          <TfiEmail className=" contatoIcones " />
        </Link>
      </div>
    </div>
  </section>
  )
}
