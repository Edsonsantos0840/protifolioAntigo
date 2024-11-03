import CardProjeto from "./CardProjeto";
import { marmore } from "../listas/ListaMarmore";
import { emidio } from "../listas/ListaEmidio";
import { martinez } from "../listas/ListaMartinez";
import { brasilCard } from "../listas/ListaBrasilcard";

export default function CardProjetoSessao(): JSX.Element {
  return (
    <section id="projetos" className="lg:alinha   w-full md:pt-14 pt-10 p-2">
      <h2 className="text-[1.6rem] lg:text-[1.8rem] text-[var(--corPrincipal)] font-serif text-center ">Projetos</h2>
      {/* Sessão dos projetos. */}
      <div className="contProjeto ">
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
          site="https://ma-marmore-e-granito.vercel.app/"
          git="https://github.com/Edsonsantos0840/siteMarmoreDashboard"
          whats="https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
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
          site="/aguarde"
          git="/aguarde"
          whats="https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
        />
      </div>
      <div className="contProjeto ">
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
          site="/aguarde"
          git="/aguarde"
          whats="https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
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
          descrição="Este projeto foi desenvolvido para alguns representantes da empresa Brasilcard, utilizando as seguintes tecnologias."
          tec1="React."
          tec2="Next.Js."
          tec3="Tailwind Css."
          site="https://cartao-marca-propria-sc71.vercel.app/"
          git="https://github.com/Edsonsantos0840/cartao-marca-propria"
          whats="https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
        />
      </div>
    </section>
  );
}
