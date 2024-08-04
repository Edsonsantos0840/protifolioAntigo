interface PropsBotao {
    texto: string,
    bgCor?: string;
    textoCor?: string,
}

export default function BotaoInvertido(props: PropsBotao) {
  return (
    <button className={'my-2 py-2 px-6 text-sm  md:w-[103%] md:text-lg rounded-md bg-[var(--base)] text-[var(--corPrincipal)] hover:bg-[var(--corTexto2)] hover:text-[var(--base)] hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}