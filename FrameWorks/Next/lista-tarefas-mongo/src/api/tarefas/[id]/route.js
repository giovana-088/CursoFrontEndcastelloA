//requisições PUT e DELETE com id

import Tarefa from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";
import { NextResponse } from "next/server";

export async function PUT(tarefa, {parametros}){
    try {
        await connectMongo(); //conecta com o BD
        const data = tarefa.json(); //converte a tarefa em Json
        const body = await Tarefa.findByIdAndUpdate(
            parametros.id, //id da tarefa que será atualizada
            data, //dados que serão atualizados
            {new: true, runValidator: true} //retorna a tarefa atualizada
        );
        if(!body){
            return NextResponse.json({error: "Tarefa não Encontrada"},{status:404});
        }
        return NextResponse.json(body,{status:200});
    } catch (error) {
        return NextResponse.json(
          { error: "Erro ao atualizar as tarefas" },
          { status: 500 }
        );
    }
}

//DELETE
export async function DELETE({parametros}) {
    try {
        await connectMongo();
        const deleteTarefa = await Tarefa.deleteOne({
            _id: parametros.id
        });
        if(!deleteTarefa){
            return NextResponse.json({success: false},{status:404});
        }
        return NextResponse.json({success: true},{status:200});
    } catch (error) {
        return NextResponse.json(
          { error: "Erro ao Deletar as tarefas" },
          { status: 500 }
        );
    }
}
