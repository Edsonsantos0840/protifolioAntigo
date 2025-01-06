"use client";
//Componentes.
import NavBar from "./components/navBar/NavBar";
import CardHeader from "./components/cards/CardHeader";
import CardApresentação from "./components/cards/CardApresentação";
import CardProjetoSessao from "./components/cards/CardProjetoSessao";
import CardTecnologia from "./components/cards/CardTecnologia";
import CardContatos from "./components/cards/CardContatos";
import Footer from "./components/cards/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  relative w-full">
      <NavBar />
      <div className="w-full md:pt-10 lg:pt-0">
        <CardHeader />
        <CardApresentação />
        <CardProjetoSessao />
        <CardTecnologia/>
        <CardContatos/>
        <Footer/>
      </div>
    </main>
  );
}
