"use client"
import { useEffect, useState } from "react";
import AdicionarJogoForm from "./AdicionarJogoForm";
import GameSection from "./GameSection";
import Header from "./Header";
import axios from "axios";
import { GameAddSchemaType } from "@/app/Models/addGamesModel";

export default function Landing() {

    const [showAddModal, setShoAddModal] = useState(false)
    const [dataGames, setDataGames] = useState<GameAddSchemaType[]>([])

    useEffect(() => {
       async function FetchData() {
            return await axios.post("../api/FindLandingGames/")
                .then(result => {
                    console.log(result);
                    const resultado: GameAddSchemaType[] = result.data;
                    setDataGames(resultado)
                })
                .catch(error => {
                    throw error;
                });
        }
        FetchData()
    },[]) 

    return(
        <div className="w-screen h-screen flex flex-col items-center bg-zinc-950 p-8 px-10 text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem] overflow-y-scroll gap-y-6">
            <div className="w-full flex justify-center items-center md:justify-start md:items-center ">
                <h1 className="text-white font-semibold text-[1.5rem] md:text-[1rem] 2xl:text-[1.5rem]">
                    Jogos Zerados
                </h1>
            </div>
            <Header showAddModal={setShoAddModal}/>
            <GameSection dataGames={dataGames}/>
            {
            showAddModal &&
                <AdicionarJogoForm showAddModal={setShoAddModal}/>
            }        
        </div>
    )
}