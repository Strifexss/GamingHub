import { useContext } from "react";
import { AuthContext, CreateContextProps,  } from "../Contexts/AuthContext";

export default function DeslogarUser() {
    const {DestroyAuthCookies} = useContext(AuthContext) as CreateContextProps

    DestroyAuthCookies()
    
}