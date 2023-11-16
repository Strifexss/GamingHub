interface Props {
    children: React.ReactNode
}

export default function Wrapper({children}:Props) {
    return(
        <div className="w-full h-[27rem] md:w-[12rem] md:h-[18.5rem] 2xl:w-[17rem] 2xl:h-[25rem] cursor-pointer transition-[0.1s] bg-slate-900 hover:bg-slate-950 flex flex-col items-center rounded-md">
                {children}
        </div>
    )
}