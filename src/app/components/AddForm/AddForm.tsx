"use client";
import { createRecord } from "@/app/actions";
import { useFormState } from "react-dom";

export function AddForm() {
    const [state, formAction] = useFormState(createRecord, {
        text: "",
    });

    return (
        <form action={formAction} className="flex justify-center gap-3">
            <input
                type="text"
                name="text"
                placeholder="text"
                className="w-full rounded-md border p-2"
            />
            <button type="submit" className="rounded-md border p-3">
                записать
            </button>
        </form>
    );
}
