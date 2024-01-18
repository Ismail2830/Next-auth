"use server"

import * as z from "zod"
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid fields!"};
    }
        const { email, password } = validatedFields.data
}