import { Formulario } from "@/app/components/Formulario";
import { HeaderSection } from "@/app/components/headerSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GameAddSchema, GameAddSchemaType } from "@/app/Models/addGamesModel";
import AddNewGame from "@/app/hooks/AddNewGame";

interface Props {
    showAddModal: React.Dispatch<SetStateAction<boolean>>,
    UserId: string
}

export default function AdicionarJogoForm({showAddModal, UserId}:Props) {
    
    const {register, formState:{errors}, handleSubmit} = useForm({
        mode: "all",
        criteriaMode: "all",
        defaultValues: {
           Nome:"",
           Descricao: "",
           Genero: "",
           Imagem: "",
           Nota: 0
        },
        resolver: zodResolver(GameAddSchema)
    })
    
        const submitGame: SubmitHandler<GameAddSchemaType> = (data) => {
            AddNewGame({data, UserId})
        }

    return(
                <Formulario.Wrapper 
                onSubmit={handleSubmit(submitGame)}
                >
                <div className="w-full h-[2rem] flex justify-between">
                        <h1 className="text-white text-[1rem] font-semibold">
                            Adicionar Jogo
                        </h1>     
                        <HeaderSection.Icon BackgroundColor="Azul" Icon={X} onClick={() => showAddModal(false)}/>           
                    </div>
                    <div className="w-full">
                        <Formulario.Input Label="Jogo" Placeholder="Nome do jogo" Type="text" Register={register("Nome")}/>
                        <Formulario.ErrorsForm message={errors.Nome?.message} show={errors.Nome}/>
                    </div>
                    <div className="w-full">
                        <Formulario.Input Label="Descrição" Placeholder="Descrição do Jogo" Type="text" Register={register("Descricao")} />
                        <Formulario.ErrorsForm message={errors.Descricao?.message} show={errors.Descricao}/>
                    </div>
                    <div className="w-full">
                        <Formulario.Input Label="Genêro do Jogo" Placeholder="Genêro do jogo" Type="text" Register={register("Genero")}/>
                        <Formulario.ErrorsForm message={errors.Genero?.message} show={errors.Genero}/>
                    </div>
                    <div className="w-full">
                        <Formulario.Input Label="Imagem do Jogo" Placeholder="Url da imagem" Type="text" Register={register("Imagem")}/>
                        <Formulario.ErrorsForm message={errors.Imagem?.message} show={errors.Imagem}/>
                    </div>
                    <div className="w-full">
                        <Formulario.Input Label="Nota" Placeholder="Nota do jogo" Type="number" Register={register("Nota")}/>
                        <Formulario.ErrorsForm message={errors.Nota?.message} show={errors.Nota}/>
                    </div>
                    <Formulario.ButtonForm Conteudo="Adicionar"/>
                </Formulario.Wrapper>
    )
}