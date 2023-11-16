import { HeaderSection } from "@/app/components/headerSection";
import { Search, Plus } from "lucide-react";

export default function Header() {
    return(
        <HeaderSection.Wrapper>
            <div className="flex flex-row gap-2">
                <HeaderSection.SearchBar PlaceHolder="Pesquisar"/>
                <HeaderSection.Icon BackgroundColor="Cinza" Icon={Search}/>
            </div>
            <HeaderSection.Icon BackgroundColor="Azul" Icon={Plus}/>
        </HeaderSection.Wrapper>
    )
}