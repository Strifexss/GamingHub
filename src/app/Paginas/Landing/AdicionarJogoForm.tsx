import { Formulario } from "@/app/components/Formulario";
import { HeaderSection } from "@/app/components/headerSection";
import { X } from "lucide-react";
import { SetStateAction } from "react";

interface Props {
    showAddModal: React.Dispatch<SetStateAction<boolean>>
}

export default function AdicionarJogoForm({showAddModal}:Props) {
    return(
                <Formulario.Wrapper>
                    <div className="w-full h-[2rem] flex justify-between">
                        <h1 className="text-white text-[1rem] font-semibold">
                            Adicionar Jogo
                        </h1>     
                        <HeaderSection.Icon BackgroundColor="Azul" Icon={X} onClick={() => showAddModal(false)}/>           
                    </div>
                    <Formulario.Input Label="Jogo" Placeholder="Nome do jogo" Type="text"/>
                    <Formulario.Input Label="Descrição" Placeholder="Descrição do Jogo" Type="text"/>
                    <Formulario.Input Label="Genêro do Jogo" Placeholder="Genêro do jogo" Type="text"/>
                    <Formulario.Input Label="Imagem do Jogo" Placeholder="Url da imagem" Type="text"/>
                    <Formulario.Input Label="Nota" Placeholder="Nota do jogo" Type="number"/>
                    <Formulario.ButtonForm Conteudo="Adicionar"/>
                </Formulario.Wrapper>
    )
}