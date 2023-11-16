import {z} from "zod"

export const LoginSchema = z.object({
    Email: z.string().email("Insira um Email válido"),
    Password: z.string()
})

export type LoginSchemaType = z.infer<typeof LoginSchema>