import { ElementType } from "react"

interface Props {
    Icon: ElementType,
    BackgroundColor: "Cinza" | "Azul",
    onClick?: () => void
}

export default function Icon({Icon: Icon, BackgroundColor, onClick}:Props) {
    return(
        <div onClick={onClick} 
        className={`w-[3rem] md:w-[2rem] 2xl:w-[3rem] h-full ${BackgroundColor == "Azul" ? "bg-blue-600" : "bg-zinc-800"} flex justify-center items-center cursor-pointer rounded-md`}>
            <Icon color="white"/>
        </div>
    )
}