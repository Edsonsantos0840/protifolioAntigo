interface PropsBotao {
    texto: string,
    bgCor?: string;
    textoCor?: string,
}

export default function BotaoInvertido(props: PropsBotao) {
  return (
    <button className={'my-2 py-2  text-sm w-full md:text-md rounded-md bg-[var(--base)] text-[var(--corPrincipal)]  hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}