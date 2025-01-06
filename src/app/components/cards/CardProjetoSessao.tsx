import CardProjeto from "./CardProjeto";
import { marmore } from "../listas/ListaMarmore";
import { emidio } from "../listas/ListaEmidio";
import { martinez } from "../listas/ListaMartinez";
import { brasilCard } from "../listas/ListaBrasilcard";


const projetos = [

  {
    nome: "BrasilCard.",
    descrição: "Este projeto foi desenvolvido para alguns representantes da empresa Brasilcard, utilizando as seguintes tecnologias.",
    imagens: brasilCard,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind .",
    site: "https://cartao-marca-propria-sc71.vercel.app/",
    git: "https://github.com/Edsonsantos0840/cartao-marca-propria",
    whats: "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
  {
    nome: "Espaço Emídio e Sá.",
    descrição: "Este projeto foi desenvolvido para uma cliente, utilizando as seguintes tecnologias.",
    imagens: emidio,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind .",
    site: "https://emidio.vercel.app/",
    git: "https://github.com/Edsonsantos0840/emidio",
    whats: "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
  {
    nome: "M&A Marmores e Granitos.",
    descrição: "Este projeto Está passando por atualização.",
    imagens: marmore,
    tec1: "Em Breve.",
    tec2: "Em Breve.",
    tec3: "Em Breve.",
    site: "/aguarde",
    git: "/aguarde",
    whats: "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
  {
    nome: "Martinez Tattoo Stúdios.",
    descrição: "Projeto está passando por atualizações.",
    imagens: martinez,
    tec1: "Em Breve.",
    tec2: "Em Breve.",
    tec3: "Em Breve.",
    site: "/aguarde",
    git: "/aguarde",
    whats: "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },

  
];

export default function CardProjetoSessao() {
  return (
    <section id="projetos" className="lg:alinha  md:pt-14 pt-10 ">
      <h2 className=" text-[var(--corPrincipal)] text-center">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.nome}
            nome={projeto.nome}
            descrição={projeto.descrição}
            tec1={projeto.tec1}
            tec2={projeto.tec2}
            tec3={projeto.tec3}
            site={projeto.site}
            git={projeto.git}
            whats={projeto.whats}
            im1={projeto.imagens[0]}
            im2={projeto.imagens[1]}
            im3={projeto.imagens[2]}
            im4={projeto.imagens[3]}
            im5={projeto.imagens[4]}
            im6={projeto.imagens[5]}
            im7={projeto.imagens[6]}
            im8={projeto.imagens[7]}
            im9={projeto.imagens[8]}
            im10={projeto.imagens[9]}
            im11={projeto.imagens[10]}
          />
        ))}
      </div>
    </section>
  );
}
