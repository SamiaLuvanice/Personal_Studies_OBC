'use server'

import { revalidatePath } from "next/cache";
import * as Planet from "@/models/Planet";

export async function createPlanetAction(previousState: any, formData: FormData) {
    const name = formData.get('name');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');

    if (typeof name !== 'string' || name.length === 0 || typeof description !== 'string' || description.length === 0 || typeof imageUrl !== 'string' || imageUrl.length === 0) {
        return { message: 'Todos os campos são obrigatórios.' };
    }

    await Planet.createPlanet({ name, description, imageUrl });

    revalidatePath('/');
}

export async function deletePlanetAction(id: number) {

    await Planet.deletePlanet(id);

    revalidatePath('/');
}