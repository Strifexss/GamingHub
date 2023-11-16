import { HeaderSection } from "@/app/components/headerSection";
import { Search, Plus } from "lucide-react";
import { SetStateAction } from "react";

interface Props {
    showAddModal: React.Dispatch<SetStateAction<boolean>>
}


export default function Header({showAddModal}:Props) {
    return(
        <HeaderSection.Wrapper>
            <div className="flex flex-row gap-2">
                <HeaderSection.SearchBar PlaceHolder="Pesquisar"/>
                <HeaderSection.Icon BackgroundColor="Cinza" Icon={Search}/>
            </div>
            <HeaderSection.Icon onClick={() => showAddModal(prevState => !prevState)} BackgroundColor="Azul" Icon={Plus}/>
        </HeaderSection.Wrapper>
    )
}