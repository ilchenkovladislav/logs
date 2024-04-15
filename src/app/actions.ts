"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function createRecord(
    prevState: { text: string },
    formData: FormData,
) {
    try {
        await prisma.record.create({
            data: {
                text: formData.get("text")?.toString(),
                title: "Все записи",
                categoryId: 1,
            },
        });
        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }

    return { ...prevState };
}
