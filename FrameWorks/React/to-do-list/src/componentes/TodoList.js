import "./TodoList.css";
const TodoList = ({tasks, removeTask}) =>{
    //retornar a lista de tarefas
    return(
        <ul>
            {/* faz o mapeamento do vetor de tarefas e cria um item para cada taefa da lista */}
            {tasks.map((task, index) => (
                <li key={index}>
                    {task} <button onClick={() => removeTask(index)}>
                        Excluir
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;