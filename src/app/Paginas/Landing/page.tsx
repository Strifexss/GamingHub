"use client"
import { useEffect, useState } from "react";
import AdicionarJogoForm from "./AdicionarJogoForm";
import GameSection from "./GameSection";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext, CreateContextProps } from "@/app/Contexts/AuthContext";

export default function Landing() {

    const [showAddModal, setShoAddModal] = useState(false)

    const {GetCookies} = useContext(AuthContext) as CreateContextProps
    
    const UserData = GetCookies()

    useEffect(() => {
        console.log(UserData)
    } 
    ,[])

    return(
        <div className="w-screen h-screen flex flex-col items-center bg-zinc-950 py-4 px-10 text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem] overflow-y-scroll gap-y-6">
            <div className="w-full flex justify-center items-center md:justify-start md:items-center ">
                <h1 className="text-white font-semibold text-[1.5rem] md:text-[1rem] 2xl:text-[1.5rem]">
                    Jogos Zerados
                </h1>
            </div>
            <Header showAddModal={setShoAddModal}/>
            <GameSection UserID={UserData._id}/>
            {
            showAddModal &&
                <AdicionarJogoForm showAddModal={setShoAddModal} UserId={UserData._id}/>
            }        
        </div>
    )
}