import { PropsBotao } from "@/app/interfaces";

export default function BotaoInvertido(props: PropsBotao) {
  return (
    <button className={'my-2 py-2 text-sm w-full rounded-md bg-[var(--base)] text-[var(--corPrincipal)]  hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}