import { useState } from "react"
import TodoForm from "./componentes/TodoForms";
import TodoList from "./componentes/TodoList";
import "./App.css";

//Declaração do Componente
const App = () =>{
  //Controle de Estado
  const [task,setTasks] = useState([]);
  // Função para adicionar Tarefa
  const addTask = (task) => {
    //adiciona uma nova tarefa ao vetor de tarefas
    setTasks([...task, task]);
  }
  //Função para remover Tarefa
  const removeTask = (index) =>{
    // buscar a tarefa pelo índice e remove
    setTasks(task.filter((_,i)=> i !==index));
    //cria um novo vetor sem a tarefa que quero remover
  };

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTask = {addTask}/>
      <TodoList tasks = {task} removeTask = {removeTask}/>
    </div>
  )
};

export default App;
//componente princicap da minha aplicação