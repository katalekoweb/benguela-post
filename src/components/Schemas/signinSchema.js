import z from "zod";

export const signinSchema = z.object({
  email: z.email({message: "Email inválido"}).nonempty({message: "Email obrigatório"}).refine((value) => !/^\s*$/.test(value), {message: "O email não pode ter apenas espaços"}).toLowerCase(),
  password: z.string().min(6, {message: " senha deve ter no minimo 6 caracteres"})
})