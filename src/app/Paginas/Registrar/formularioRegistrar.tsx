"use client"
import { Formulario } from "@/app/components/Formulario"
import {useForm, SubmitHandler} from "react-hook-form"
import { userSchema, userSchemaType } from "@/app/Models/RegisterModel"
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterUser from "@/app/hooks/RegisterUser";

export default function FormularioRegistrar() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(userSchema),
        defaultValues: {
        Email: "",
        Password: "",
        Nome: ""
        }
    })

    const submit: SubmitHandler<userSchemaType> = (data) => {
        RegisterUser(data)
    } 

    return(
        <Formulario.Wrapper onSubmit={handleSubmit(submit)} >
            <h1 className="text-white font-semibold text-[1.5rem]">
               Registrar 
            </h1>
            <div className="w-full flex flex-col gap-2">
            <Formulario.Input Register={register("Nome")} Label="Nome" Type="text" Placeholder="Insira um Nome"/>
            <Formulario.ErrorsForm show={errors.Nome} message={errors.Nome?.message}/>
            <Formulario.Input Register={register("Email")} Label="Email" Type="text" Placeholder="Insira um Email"/>
            <Formulario.ErrorsForm show={errors.Email} message={errors.Email?.message}/>
            <Formulario.Input Register={register("Password")} Label="Senha" Type="password" Placeholder="Insira uma Senha"/>
            <Formulario.ErrorsForm show={errors.Password} message={errors.Password?.message}/>
            </div>
            <Formulario.ButtonForm Conteudo="Registrar"/>
        </Formulario.Wrapper>
    )
}