import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="hidden fixed md:flex justify-start p-2 md:justify-between items-center shadow-lg w-[100vw] bg-[#0f172af7] z-20 lg:px-16 ">
   
           {/* Área de navegação do topo. */}
      <div className="hidden md:block">
        <h3 className="font-especial hover:scale-105 ease-in duration-300 md:text-3xl lg:text-4xl">
          EPS Soluções
        </h3>
      </div>
      <div className="gap-2 alinha2 md:gap-6 md:text-xl lg:text-xl font-semibold">
        <Link href="#inicio" className="navLink">
          Início
        </Link>
        <Link href="#sobre" className="navLink">
          Sobre
        </Link>
        <Link href="#projetos" className="navLink">
          Projetos
        </Link>
        <Link href="#tecnologias" className="navLink">
          Tecnologias
        </Link>
        <Link href="#contato" className="navLink">
          Contato
        </Link>
      </div>
   
    </nav>
  );
}
