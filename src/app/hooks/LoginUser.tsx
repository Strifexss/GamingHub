import axios, { AxiosResponse } from "axios";
import UserModel from "../Models/UserModel";

interface Props {
    Email: string;
    Password: string;
}

export default async function LoginUser({ Email, Password }: Props): Promise<UserModel | null> {

    console.log(Email);

    try {
        const result: AxiosResponse<UserModel> = await axios.post(`../api/UsuarioLogin`, {
            Email: Email,
            Password: Password,
        });

        const resultado: UserModel = result.data;
        console.log(resultado)
        return resultado;
    } catch (errors) {
        console.log(errors);
        return null;
    }
}