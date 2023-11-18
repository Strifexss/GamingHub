interface Props {
    children: React.ReactNode,
    onSubmit?: () => void,
}

export default function Wrapper({children, onSubmit}:Props) {
    return(
        <form onSubmit={onSubmit} className={`fixed w-screen md:w-[20rem] 2xl:w-[25rem] h-screen md:h-auto flex flex-col gap-y-6 justify-center items-center p-6 bg-zinc-900 rounded-md transition-[0.1s] -translate-y-7`}>
            {children}
        </form>
    )
}