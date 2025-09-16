// GET - POST -> rotas que não precisa passar o ID


import { createTarefa, getAllTarefas } from "@/app/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

//GET
export async function GET() {
    try {
        const tarefas = await getAllTarefas(); //chama o controller
        //tratar a resposta obtida da conexão com o MongoDB
        return NextResponse.json({success: true, data: tarefas});
    } catch (e) {
        return NextResponse.json({success: false, error:e})
    }
}

//POST
export async function POST(req: NextRequest) { //req: são os dados pegos na VIEW
    try {
        const data = await req.json(); //convert os req em json
        const novaTarefa = await createTarefa(data); //chama o controller
        return NextResponse.json({success:true, data: novaTarefa});
    } catch (e) {
        return NextResponse.json({ success: false, error: e });
    }
}