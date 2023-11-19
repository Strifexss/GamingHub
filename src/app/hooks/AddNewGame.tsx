import axios from "axios"
import { GameAddSchemaType } from "../Models/addGamesModel"

interface Props {
    data:GameAddSchemaType,
    UserId: string
}

export default function AddNewGame({data, UserId}: Props) {
    axios.post("../api/GameAdd", {
        Nome: data.Nome,
        Descricao: data.Descricao,
        Genero: data.Genero,
        Imagem: data.Imagem,
        Nota: data.Nota,
        UserId: UserId
    }).then(result => {
        console.log(result)
        window.alert("Jogo Adicionado")
    }).catch(error => {
        window.alert("Erro ao adicionar o jogo")
        console.log(error)
    })
}