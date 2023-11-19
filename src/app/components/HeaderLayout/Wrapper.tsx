interface Props {
    children: React.ReactNode
}

export default function Wrapper({children}:Props) {
    return(
        <div className="w-full h-[4rem] md:h-[3rem] 2xl:h-[4rem] bg-zinc-900 border-b-2 border-gray-600 flex px-4 items-center justify-around">
            {children}
        </div>
    )
}