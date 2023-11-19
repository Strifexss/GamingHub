import {number, z} from "zod"

export const GameAddSchema = z.object({
    Nome: z.string().max(30, "Máximo 30 Caracteres"),
    Descricao: z.string(),
    Genero: z.string(),
    Imagem: z.string().trim().url("Insira uma Url válida"),
    Nota: z.coerce.number().min(1, "A nota minima é 1").max(5, "A nota máxima é 5"),
})

export type GameAddSchemaType = z.infer<typeof GameAddSchema>