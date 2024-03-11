import Task from "@models/tasks";
import { connectToDB } from "@utils/database";

import { NextResponse } from 'next/server'

import { IDeleteTaskRequestParam } from "@types";

export const PATCH = async(request: Request, { params }: IDeleteTaskRequestParam) => {

    try {
        await connectToDB();
        const existingTask = await Task.findById(params.id)

        if(!existingTask) {
            return new Response('Tache non trouve', { status: 404 })
        }

        existingTask.completed = true

        await existingTask.save()

        return new Response("Tâche mise à jour avec succès", { status: 200 });
    } catch (error) {
        return new Response("Erreur lors de la suppression de la tâche", { status: 500 });
    }
    
}