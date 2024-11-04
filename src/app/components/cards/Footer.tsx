import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <div className="body w-[100vw] lg:w-[98vw] alinha6 md:gap-2 mt-2 p-2 ">
    <h3 className=" md:mt-5 text-[1.7rem] md:text-[1.7rem] lg:text-[1.9rem] font-bold ">
      Esse sou eu.
    </h3>
    <p className="text-white/.8 text-center md:mt-[-10px] text-[1.1rem] md:text-[1.5rem] lg:text-[1.3rem]">
      Espero que tenha gostado, aguardo seu contato.
    </p>

    <div className="alinha3 gap-3 md:gap-4 my-1 md:my-4">
      <Link href={"https://github.com/Edsonsantos0840"} target="_blank">
        <FaGithubSquare className="footerIcones" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/edsonpsantos/"}
        target="_blank"
      >
        <FaLinkedin className="footerIcones" />
      </Link>
      <Link
        href={
          "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
        }
        target="_blank"
      >
        <FaWhatsapp className="footerIcones" />
      </Link>
    </div>
  </div>
  )
}
