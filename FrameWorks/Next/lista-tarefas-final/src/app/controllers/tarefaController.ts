//funções controllers

import Tarefa, { Itarefa } from "../models/tarefas";
import connectMongo from "../services/mongodb";




//get -> pega as tarefas do BD e retorna em um vetor
export const getAllTarefas = async(): Promise<Itarefa[]> =>{
    await connectMongo(); //estabelece conexão com o DB
    const tarefas = await Tarefa.find({}); //pega todas as info do coleção do BD
    return tarefas; // retorna um vetor de tarefas
}

// post -> insere uma tarefa na coleção do BD
export async function createTarefa(data: Partial<Itarefa>) : Promise<Itarefa> {
    await connectMongo();
    const tarefa = await Tarefa.create(data);//passa os parametros na criação
    return tarefa; //retorno a tarefa com o ID
}

//put/patch -> atraves do ID permite alterar uma informação do OBJ
export async function updateTarefa(id:string, data:Partial<Itarefa>) : Promise<Itarefa | null> {
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true
    });
    return tarefa; //tarefa já atualizada
}

//delete -> através do Id permite deletar uma tarefa
export async function deleteTarefa(id:string) : Promise<boolean> {
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;
}