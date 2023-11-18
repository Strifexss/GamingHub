import { NextRequest, NextResponse } from "next/server";
import { client, queryListaDeJogos } from "../db";


export async function POST() {
    let isConnected = false;

    try {
        if (!isConnected) {
            await client.connect();
            isConnected = true;

            const result = await queryListaDeJogos.find().toArray();
            
            return NextResponse.json(result);
        }
    } catch (error) {
        console.error("Erro ao buscar jogos:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao adicionar o jogo" }, { status });
    }
}