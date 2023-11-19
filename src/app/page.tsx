"use client"

import { useContext, useEffect } from "react"
import LoginScreenForm from "./components/Formulario/ComponentsProntos/LoginScreenForm"
import { AuthContext, CreateContextProps } from "./Contexts/AuthContext"
import { useRouter } from "next/navigation"

export default function Home() {

  const {GetCookies}= useContext(AuthContext) as CreateContextProps
  const {push} = useRouter()

  useEffect(() => {

    console.log(GetCookies)

    if(typeof GetCookies !==  'function')
    push("/Paginas/Landing")
  },[])

  return (
    <div className='w-screen h-screen bg-zinc-950 flex justify-center items-center text-[0.8rem] md:text-[0.7rem] 2xl:text-[0.8rem]'>
       <LoginScreenForm/>
    </div>
  )
}
