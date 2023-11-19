"use client"
import UserModel from "@/app/Models/UserModel";
import { createContext } from "react";
import {setCookie, parseCookies, destroyCookie} from "nookies"

export interface CreateContextProps {
    handleSetUserCredential: (Credential: UserModel) => void,
    GetCookies: () => UserModel,
    DestroyAuthCookies: () => void,
}

interface AuthContextProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<CreateContextProps | null>(null)

export const AuthContextProvider = ({children}:AuthContextProviderProps) => {
    
    
    
    const handleSetUserCredential = (Credential:UserModel) => {
        setCookie(undefined, "UserData", JSON.stringify(Credential), {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        })
    }
    
    const GetCookies = () => {
        try {
            const Cookies = parseCookies();
            const UserData = JSON.parse(Cookies.UserData);
            return UserData as UserModel;
        } catch (error) {
            console.error("Error while parsing cookies:", error);
            return
        }
    };
    const DestroyAuthCookies = () => {
        destroyCookie(null, "UserData")
    }

    return (
        <AuthContext.Provider value={{handleSetUserCredential, GetCookies, DestroyAuthCookies}}>
            {children}
        </AuthContext.Provider>
    )

}