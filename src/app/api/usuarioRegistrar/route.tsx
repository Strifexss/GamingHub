import { NextRequest, NextResponse } from "next/server";
import { usuarios, client } from "../db";

export async function POST(req: NextRequest) {
    
    const body = await req.text()
    const parsedBody = await JSON.parse(body)
    const {Email, Password, Nome} = parsedBody

    try {
        usuarios.insertOne({Email: Email, Password: Password, Nome: Nome})

        return NextResponse.json({message: "Email adicionado com sucesso"})
    }
    catch(error) {
        return NextResponse.json({message: "Ocorreu um erro ao processar a requisicao"})
    }
    finally {
        client.close()
    }

}