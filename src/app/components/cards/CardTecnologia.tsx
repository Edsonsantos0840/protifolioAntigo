
//Ícones.
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";
import Container from "../Container";

export default function CardTecnologia() {
  return (
    <section
      id="tecnologias"
      className="md:alinha4 body2 w-full p-2 pt-10 md:pt-14"
    >
      {/* Sessão de Tecnologias */}
      <div className="body2 w-full md:alinha6">
        <Container>
        <h2 className="text-[var(--corPrincipalEnd)] text-center">
          Tecnologias
        </h2>
        <h3 className="text-[var(--corPrincipalEnd)] text-center">
          Tecnologias que tenho me dedicado.
        </h3>
        <p className="text-[var(--corPrincipalEnd)] text-justify md:my-3 ">
          Eu tenho me identificado bastante com as tecnologias Front-end.
          Procuro me dedicar as tecnologias mais utilizadas no mercado no
          momento, mas meu fóco é de não me limitar.
        </p>
        </Container>
        <div className="body w-[100vw] lg:w-[99vw] text-center p-3 md:p-4 ">
          <h3 className=" md:my-5">
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
        
          <h3 className=" my-5 md:mt-14 ">
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
