import Image from "next/image";

interface Props {
    src: string
}

export default function ImageGame({src}:Props) {
    return(
        <Image className="w-full h-[75%] md:h-[72%] 2xl:h-[75%] rounded-t-md"
            src={src}
            alt="GameImage"
            width={1000}
            height={1000}
        />
    )
}