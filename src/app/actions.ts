"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function createRecord(
    prevState: { text: string },
    formData: FormData,
) {
    try {
        const text = formData.get("text")?.toString() ?? "";

        await prisma.logRecord.create({
            data: {
                text,
                titleId: 1,
                categoryId: 1,
            },
        });
        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }

    return { ...prevState };
}
