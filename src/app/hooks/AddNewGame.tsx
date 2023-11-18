import axios from "axios"
import { GameAddSchemaType } from "../Models/addGamesModel"

export default function AddNewGame(data: GameAddSchemaType) {
    axios.post("../api/GameAdd", {
        Nome: data.Nome,
        Descricao: data.Descricao,
        Genero: data.Genero,
        Imagem: data.Imagem,
        Nota: data.Nota
    }).then(result => {
        console.log(result)
        window.alert("Jogo Adicionado")
    }).catch(error => {
        window.alert("Erro ao adicionar o jogo")
        console.log(error)
    })
}