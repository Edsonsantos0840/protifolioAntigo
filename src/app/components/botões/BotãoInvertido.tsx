interface PropsBotao {
    texto: string,
    bgCor?: string;
    textoCor?: string,
}

export default function BotaoInvertido(props: PropsBotao) {
  return (
    <button className={'md:my-2 md:py-2 md:w-[103%] md:text-lg rounded-md bg-[var(--base)] text-[var(--corPrincipal)] hover:bg-[var(--corTextoPrincipal)] hover:text-[var(--base)] hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}