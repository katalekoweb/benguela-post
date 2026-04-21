import z from "zod"

export const postSchema = z.object({
    title: z.string().nonempty({message: "O título não pode ser vazio."}).refine((value) => !/^\s*$/.test(value), {
        message: "O títlo não pode ter apenas espaços"
    }),
    banner: z.string(),
    text: z.string().nonempty({message: "O texto não pode ser vazio."}).refine((value) => !/^\s*$/.test(value), {
        message: "O texto não pode ter apenas espaços"
    })
})