import Image from "next/image";
import Container from "../Container";

export default function CardApresentação() {
  return (
    <section
    id="sobre"
    className="body2 w-full md:alinha4 p-2 alinha mt-0 md:pt-14"
    >
      <Container>
      {/* Sessão de apresentação pessoal.  */}
      <div className=" text-center md:px-5 my-1 md:my-[-35px]">
        <h2 className="text-[var(--corTexto2)] md:my-4">
          Quem sou eu?
        </h2>
        <h3 className="text-[var(--corTexto2)] md:my-4">
          Olá, Sou Edson Santos
        </h3>
        <p className="text-[var(--corTexto2)] text-justify md:my-4">
          Sempre fui apaixonado por tecnologia, e tudo que diz respeito a
          tecnologia me encanta. Passei muito tempo acreditando que a área da
          programação não era para mim, por conta do pouco tempo que tinha para
          estudar. Porém, descobri que trabalhar como programador é o que eu
          realmente quero para minha vida, tenho muito prazer em programar, e
          adoro aprender tudo sobre o mundo da tecnologia, e mesmo com as
          dificuldades eu não vou desistir. Descobri também que com dedicação, e
          uma boa organização, consigo potencializar o tempo e ter um bom
          resultado, e espero fazer parte do seu time. Prometo que vou me
          esforçar ao máximo, para satisfazer as expectativas.
        </p>
      </div>
      <div className=" flex flex-col md:alinha2 mt-4 md:p-3">
        <div className="w-full alinha5 ">
          <div className="  hover:scale-105  my-2 ">
            <Image
              quality={100}
              src="/um pouco.png"
              alt="Foto de perfil"
              width={400}
              height={400}
            />
          </div>
          <div className="body3 hidden md:block hover:scale-105 my-2  ">
            <Image
              quality={100}
              src="/EPS_files/9.png"
              alt="Foto de perfil"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="  ">
          <h2 className="text-[var(--corTexto2)] my-4 text-center ">
            Mais um pouco sobre mim.
          </h2>
          <p className="text-[var(--corTexto2)] text-justify my-4 ">
            Além de ser muito esforçado e focado nos meus objetivos, tenho muita
            facilidade de lidar com pessoas e trabalhar em equipe. Trabalhei
            bastante tempo como representante comercial. Uma parte desse tempo
            como gerente de equipe, onde era responsável por uma equipe de
            Quinze pessoas.
          </p>
        </div>
      </div>
      </Container>
    </section>
  );
}
