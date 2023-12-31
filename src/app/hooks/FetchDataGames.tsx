import axios from "axios";
import { GameAddSchemaType } from "../Models/addGamesModel";

export default async function FetchData(UserID: string): Promise<GameAddSchemaType[]> {
    try {
        const result = await axios.post<GameAddSchemaType[]>("../api/FindLandingGames/", {
            UserID: UserID
        });
        console.log("Data received:", result.data);
        return result.data;  
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  
    }
}