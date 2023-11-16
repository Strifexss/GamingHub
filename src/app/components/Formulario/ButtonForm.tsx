interface Props {
    Conteudo: string
}

export default function ButtonForm({Conteudo}:Props) {
    return(
        <button className="w-full h-[2.5rem] md:h-[2rem] 2xl:h-[2.5rem] bg-blue-500 hover:bg-blue-700 transition-[0.1s] rounded-md font-semibold text-white">
            {Conteudo}
        </button>
    )
}