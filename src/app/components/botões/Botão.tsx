
interface PropsBotao {
    texto: string,
    bgCor?: string;
    textoCor?: string,
}

export default function Botao(props: PropsBotao) {
  return (
    <button className={'md:my-2 md:py-2 md:px-6 md:text-lg rounded-md bg-[var(--corPrincipal)] text-[var(--base)] hover:bg-[var(--corPrincipalEnd)] hover:text-[var(--base)] hover:scale-105 shadow-md ease-in duration-300'} >
        {props.texto}
    </button>
  )
}
