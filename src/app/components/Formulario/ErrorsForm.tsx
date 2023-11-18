import {FieldError} from "react-hook-form"

interface Props {
    show: FieldError | undefined,
    message: string | undefined
}

export default function ErrorsForm({message, show}:Props) {
    return(
        <div className="w-full flex justify-start">
   { show &&
        <p className="text-red-500 font-semibold  2xl:text-[0.8rem]">
            {message}
        </p>
    }
    </div>
    )
}