//indicar que a página é componenete client_side
"use client";

import { POST } from "@/api/tarefas/route";
import { useEffect, useState } from "react";

export default function Home(){
    //setState -> Armazenamento de estado nas variaveis locais
    const [tarefas, setTarefas] = useState([]); //array para armazenamento das tarefas
    const [novaTarefa, setNovaTarefa] = useState("");//String para adicionar nova tarefa


    //useEffect
    useEffect(()=>{
        fetchTarefas();
    });

    //pegar todas as tarefas
    const fetchTarefas = async () =>{
        // conecta com api usando fetch para pegar os dados
        const resposta = await fetch("api/tarefas");
        // transforma os dados em Json
        const dados = await resposta.json();
        // atualiza a lista de tarefas com SetState
        setTarefas(dados.data);
    };

    //adicionar nova Tarefa
    const addTarefa = async () =>{
        const resposta = await fetch("api/tarefas", {
            method: "POST", //passa o método 
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({titulo: novaTarefa})//converte json em Texto(String)
        });
        const dados = await resposta.json(); //converte a resposta em json
        //setTarefas([...tarefas, dados.data]); //atualiza a lista de tarefas
        fetchTarefas();
        setNovaTarefa("");//limpa o campo do input
    };

    //deletoTarefas
    const deleteTarefa = async (id) =>{
        await fetch(`/api/tarefas/${id}`, {
            method: "DELETE",
        });
        //setTarefas(tarefas.filter((tarefa)=>tarefa._id !== id));
        fetchTarefas();
    }

    //atualizar tarefas
   const updateTarefa = async (id, concluida) => {
    await fetch(`/api/tarefas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concluida: !concluida }),
    });
    fetchTarefas();
};

// ...existing code...

const contagemTarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

// ...existing code...

<ul>
    {tarefas.map((tarefa)=>(
        <li key={tarefa._id}>
            {tarefa.titulo} - {tarefa.concluida ? "Concluida" : "Pendente"}
            <input 
                type="checkbox" 
                checked={tarefa.concluida} 
                onChange={()=>updateTarefa(tarefa._id, tarefa.concluida)} 
            />
            <button onClick={()=>deleteTarefa(tarefa._id)}>Excluir</button>
        </li>
    ))}
</ul>

    //contagem de Tarefas concluida
    const contagemTarefasTotal = tarefas.length;

    return(
        <div>
            <h1>Lista de Tarefa</h1>
            <input type="text" 
            value={novaTarefa} 
            onChange={(e)=> setNovaTarefa(e.target.value)}/>
            <button onClick={addTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((tarefa)=>(
                    <li key={tarefa._id}>
                        {tarefa.titulo} - {tarefa.concluida ? "Concluida" : "Pendente"}
                        {/* <input type="checkbox" 
                        checked = {tarefa.concluida} 
                        onChange={()=>updateTarefa(tarefa.id,tarefa.completed)} /> */}
                        <button onClick={()=>deleteTarefa(tarefa._id)}>Excluir</button>
                    </li>
                ))}
            </ul>
            <div>
                <p>Total de tarefas: {contagemTarefasTotal} - 
                    Concluídas: {contagemTarefasConcluidas}             </p>
            </div>
        </div>
    );






}