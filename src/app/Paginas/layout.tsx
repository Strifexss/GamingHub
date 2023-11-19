"use client"

import { useContext } from "react"
import { HeaderLayout } from "../components/HeaderLayout"
import { HeaderSection } from "../components/headerSection"
import {UserCircle} from "lucide-react"
import { useRouter } from "next/navigation"
import { AuthContext, CreateContextProps } from "../Contexts/AuthContext"

interface Props {
    children: React.ReactNode
}

export default function Layout({children}:Props) {

    const {push} = useRouter()
    const {DestroyAuthCookies} = useContext(AuthContext) as CreateContextProps

    const Logout = async () => {
        DestroyAuthCookies()
        push("/")
    }

    return(
        <div className="h-screen w-screen flex flex-col">
            <HeaderLayout.Wrapper>
                <h1 className="text-white 2xl:text-[2rem] md:text-[1.5rem] font-semibold">
                    GamingHub
                </h1>
                <div className="md:h-[2rem] 2xl:h-[2.5rem]">
                    <HeaderSection.Icon BackgroundColor="Azul" Icon={UserCircle} onClick={Logout} />
                </div>
            </HeaderLayout.Wrapper>
            {children}
        </div>
    )
}