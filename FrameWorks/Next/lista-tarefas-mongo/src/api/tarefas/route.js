// rotas GET E POST

import tarefas from "@/models/tarefas";
import connectMongo from "@/services/mongodb";
import { NextResponse } from "next/server";

//get
export async function GET() {
    try {
        await connectMongo(); //connecta com o mongo db
        const tarefas = await tarefas.fing({}); // retorna as tarefas
        //usando o metodo response do next
        return NextResponse.json(tarefas, {status: 200});
    } catch (error) {
        return NextResponse.json({error: "Erro ao buscar tarefas"}, {status: 500});
   }
}

//post
export async function POST(tarefa){
    try {
        await connectMongo();
        const data = await tarefa.json(); //pega o json da requisição
        const body  = await tarefas.create(data); //cria a tarefa no banco
        return NextResponse.json(body, {status: 201});
    } catch (error) {
        return NextResponse.json({error: "Erro ao criar as tarefas"}, {status: 500});
    }
}