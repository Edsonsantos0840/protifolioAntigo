import { PropsBotao } from "@/app/interfaces";

export default function Botao(props: PropsBotao) {
  return (
    <button className={'btnPrincipal w-full text-lg md:text-3xl lg:text-xl my-3 py-2 '} >
        {props.texto}
    </button>
  )
}
