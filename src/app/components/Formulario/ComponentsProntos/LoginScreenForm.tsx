"use client"
import { Formulario } from "..";
import Link from "next/link";
import { LoginSchema, LoginSchemaType } from "@/app/Models/LoginModel";
import {useForm, SubmitHandler} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import LoginUser from "@/app/hooks/LoginUser";
import UserModel from "@/app/Models/UserModel";
import { useRouter } from "next/navigation";

export default function LoginScreenForm() {

  const {push} = useRouter()

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      Email: "",
      Password: ""
    }
  })

  const usuarioLogin: SubmitHandler<LoginSchemaType> = async (data) => {
      try {
        const result: UserModel | null = await LoginUser({ Email: data.Email, Password: data.Password });
        if(result?.Email === data.Email && result.Password === data.Password) {
            push("./Paginas/Registrar")
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
  }

    return(
    <Formulario.Wrapper
    onSubmit={handleSubmit(usuarioLogin)}>
    <h1 className="text-white font-semibold text-[2rem]">
      Gaming Hub
    </h1>
    <Formulario.Input Register={register("Email")}
      Label="Email"
      Placeholder="Insira um Email"
      Type="text"
    />
    <Formulario.Input Register={register("Password")}
      Label="Senha"
      Placeholder="Insira uma Senha"
      Type="password"
    />
    <Formulario.ButtonForm Conteudo="Enviar"/>
    <Link href={"./Paginas/Registrar"}>
      <p className="text-gray-500 hover:text-white font-semibold">Criar nova conta</p>
    </Link>
  </Formulario.Wrapper>
  )
}