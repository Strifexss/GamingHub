import { NextRequest, NextResponse } from "next/server";
import { client, queryListaDeJogos } from "../db";


export async function POST(req: NextRequest) {
    let isConnected = false;
    let status = 500; // Status de erro padrão

    try {
        // Verifica se a conexão já está aberta antes de tentar conectar novamente
        if (!isConnected) {
            await client.connect();
            isConnected = true;
        }

        const body = await req.text();
        const parsedBody = JSON.parse(body);
        const { Nome, Descricao, Genero, Imagem, Nota } = parsedBody;

        // Valide e sanitize os dados antes de inseri-los no banco de dados (não mostrado no exemplo)

        const result = await queryListaDeJogos.insertOne({
            Nome,
            Descricao,
            Genero,
            Imagem,
            Nota,
        });

        status = 200; // Atualiza o status para sucesso

        return NextResponse.json({
            message: `Jogo ${Nome} Adicionado com Sucesso`,
            insertedId: result.insertedId,
        });
    } catch (error) {
        console.error("Erro ao adicionar o jogo:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao adicionar o jogo" }, { status });
    } finally {
        if (isConnected) {
            await client.close();
            isConnected = false;
        }
    }
}