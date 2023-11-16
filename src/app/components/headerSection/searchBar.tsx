interface Props {
    PlaceHolder: string
}

export default function searchBar({PlaceHolder}:Props) {
    return(
        <input className="w-[18rem] md:w-[12rem] 2xl:w-[18rem] h-full bg-zinc-800 border-none rounded-md p-2 text-white outline-blue-600" 
            type="text" 
            placeholder={PlaceHolder}
        />
    )
}