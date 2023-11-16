interface Props {
    children: React.ReactNode
}

export default function Wrapper({children}:Props) {
    return (
        <div className="w-full h-[3rem] 2xl:h-[3rem] md:h-[2.5rem] flex flex-row justify-between gap-2">
            {children}
        </div>
    )
}