import { Star } from "lucide-react";
import { GamingWrapper } from ".";

interface Props {
    ImageSrc: string,
    Titulo: string,
    Nota: number,
}

export default function GamingWrapperLanding({ImageSrc, Nota, Titulo}:Props) {

    const stars = Array.from({ length: Nota }, (_, index) => (
        <Star key={index} color="white" fill="white" width={17} className="md:w-[0.8rem] 2xl:w-[1rem]" />
      ));

    return(
        <GamingWrapper.Wrapper>
        <GamingWrapper.ImageGame src={ImageSrc}/>
        <div className="w-full h-full p-4 md:p-2 2xl:p-4 flex flex-col items-start gap-y-1">
            <h1 className="text-white font-semibold text-[1rem] md:text-[0.7rem] 2xl:text-[1rem]">
                {Titulo}
            </h1>
            <div className="w-full flex gap-2 flex-wrap">
                <h1 className="text-gray-500 font-semibold text-[0.8rem] md:text-[0.5rem] 2xl:text-[0.8rem]">
                    Rpg
                </h1>
                <h1 className="text-gray-500 font-semibold text-[0.8rem] md:text-[0.5rem] 2xl:text-[0.8rem]">
                    Action
                </h1>
                <h1 className="text-gray-500 font-semibold text-[0.8rem] md:text-[0.5rem] 2xl:text-[0.8rem]">
                    Adventure
                </h1>
            </div>
            <div className="w-full flex flex-wrap gap-2">
              {stars}
            </div>
            </div>
    </GamingWrapper.Wrapper>
    )
}
