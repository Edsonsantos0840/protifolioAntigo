
interface PropsBotao {
    texto: string,
    bgCor?: string;
    textoCor?: string,
}

export default function Botao(props: PropsBotao) {
  return (
    <button className={'my-2 py-2 px-6 text-lg md:text-3xl rounded-md bg-[var(--corPrincipal)] text-[var(--base)] hover:bg-[var(--corPrincipalEnd)] hover:text-[var(--base)] hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}
