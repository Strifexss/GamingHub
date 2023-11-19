import { NextRequest, NextResponse } from "next/server";
import { client, queryListaDeJogos } from "../db";

export async function POST(req: NextRequest) {
    let isConnected = false;

    try {
        if (!isConnected) {
            await client.connect();
            isConnected = true;

            const body = await req.text();
            const parsedBody = JSON.parse(body);
            const { UserID } = parsedBody;
            console.log(UserID);
            
            const result = await queryListaDeJogos.find({ UserId: UserID }).sort({ Nome: 1 }).toArray();
            
            return NextResponse.json(result);
        }
    } catch (error) {
        console.error("Erro ao buscar jogos:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao adicionar o jogo" });
    }
}