import { NextRequest, NextResponse } from "next/server";
import { usuarios, client } from "../db";

export async function POST(req: NextRequest) {
    
    const body = await req.text()
    const parsedBody = await JSON.parse(body)
    const {Email, Password} = parsedBody
    await client.connect()
    try {
        const result = await usuarios.findOne({ Email: Email, Password: Password });
        if (result) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao processar a requisicao" });
    }

}