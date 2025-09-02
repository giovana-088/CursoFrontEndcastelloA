import { useState } from "react";
import "./TodoForms.css";

//React DOM

//lógica do componente
// arrow function
const TodoForm = ({addTask}) => {
    //Controle de estado
    // vetor para armazenamento da dados do formulário
    const [task, setTask] = useState("");
    //useState => usa a memoria local do navegador
    //para armazenar as mudanças de estado da tela
    //task => armazena as tarefas
    //setTask => armazena as mudanças de estado

    //Função para adicionar tarefa
    //quando eu apertar o botão de enviar
    const handleSubmit = (e) => {
        //Prevenir o comportamento padrão do formulário
        e.preventDefault(); //previne que a página nao recarregue
        //Verificar se não está vazio
        if(task.trim() !== ""){
            addTask(task); //Adiciona Tarefa no Vetor
            setTask(""); // Limpa o campo
        }
    };
    //Renderização do Componente (view)
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma tarefa" value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    );
};


export default TodoForm;
//componente para criar um formulário para inserir nova tarefa
// pode ser reutlizado (export)