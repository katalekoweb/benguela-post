import z from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, { message: "Informe seu nome completo" }).nonempty({ message: "Nome obrigatório" })
    .transform(
        (name) => name.trim().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
    ),
  email: z
    .email({ message: "Email inválido" })
    .nonempty({ message: "Email obrigatório" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O email não pode ter apenas espaços",
    })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: " -Asenha deve ter no minimo 6 caracteres" }),
  confirm_password: z
    .string()
    .min(6, { message: " senha deve ter no minimo 6 caracteres" }),
}).refine((data) => data.password === data.confirm_password, {
    message: "As senhas não correspondem",
    path: ["confirm_password"]
});
