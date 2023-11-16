import { UseFormRegisterReturn } from "react-hook-form"

interface Props {
    Label?: string,
    Placeholder: string,
    Type: "text" | "password" | "number",
    Register: UseFormRegisterReturn
}

export default function Input({Label, Placeholder, Type, Register}:Props) {
    return(
        <div className="w-full flex flex-col justify-center items-start gap-y-2">
            { Label &&
                <label htmlFor={Label} className="text-white font-semibold">
                    {Label}
                </label>
            }
            <input {...Register}
                type= {Type}
                id={Label}
                className="w-full p-2 h-[2.5rem] md:h-[2rem] 2xl:h-[2.5rem] bg-zinc-800 text-white rounded-md"
                placeholder={Placeholder}
            />
        </div>
    )
}