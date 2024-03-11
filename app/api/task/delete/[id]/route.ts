import Task from "@models/tasks";
import { connectToDB } from "@utils/database";

import { NextResponse } from 'next/server'

import { IDeleteTaskRequestParam } from "@types";

export const DELETE = async(request: Request, { params }: IDeleteTaskRequestParam) => {
    try {        
        await connectToDB();

        // Find the prompt by ID and remove it
        await Task.findByIdAndRemove(params.id);

        return NextResponse.json("Tâche supprimée avec succès", { status: 200 });
    } catch (error) {
        return NextResponse.json("Erreur lors de la suppression de la tâche", { status: 500 });
    }
}