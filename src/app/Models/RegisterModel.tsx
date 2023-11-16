import {z} from "zod"

export const userSchema = z.object({
    Nome: z.string().min(4, "Necessario ter no minimo 4 caracteres"),
    Email: z.string().email("Necessario ser um Email válido"),
    Password: z.string().min(6, "Necessario ter 6 caracteres")
})

export type userSchemaType = z.infer<typeof userSchema>