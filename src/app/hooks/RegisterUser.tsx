import axios from "axios";
import { userSchemaType } from "../Models/RegisterModel";

export default function RegisterUser(data: userSchemaType) {
    axios.post("../api/usuarioRegistrar/", {
        Nome: data.Nome,
        Password: data.Password,
        Email: data.Email
    }).then(result => {
        console.log(result)
        window.alert("Usuario Registrado com Sucesso")
    }).catch(error => {
        console.log(error)
    })
}