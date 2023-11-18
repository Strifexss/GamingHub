import { NextRequest, NextResponse } from "next/server";
import { client, queryListaDeJogos } from "../db";


export async function POST(req: NextRequest) {
    let isConnected = false;
    let status = 500; 

    try {
        if (!isConnected) {
            await client.connect();
            isConnected = true;
        }

        const body = await req.text();
        const parsedBody = JSON.parse(body);
        const { Nome, Descricao, Genero, Imagem, Nota } = parsedBody;


        const result = await queryListaDeJogos.insertOne({
            Nome,
            Descricao,
            Genero,
            Imagem,
            Nota,
        });

        status = 200; 

        return NextResponse.json({
            message: `Jogo ${Nome} Adicionado com Sucesso`,
            insertedId: result.insertedId,
        });
    } catch (error) {
        console.error("Erro ao adicionar o jogo:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao adicionar o jogo" }, { status });
    } 
}