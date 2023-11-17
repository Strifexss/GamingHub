import { NextRequest, NextResponse } from "next/server";
import { client, queryListaDeJogos } from "../db";


export async function POST() {
    let isConnected = false;
    let status = 500; 

    try {
        if (!isConnected) {
            await client.connect();
            isConnected = true;
        }


        const result = await queryListaDeJogos.findOne();

        status = 200; // Atualiza o status para sucesso

        return NextResponse.json(result);
    } catch (error) {
        console.error("Erro ao buscar jogos:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao adicionar o jogo" }, { status });
    } finally {
        if (isConnected) {
            await client.close();
            isConnected = false;
        }
    }
}