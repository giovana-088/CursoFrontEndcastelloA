import React from "react";

interface TarefaCardProps {
  tarefa: any;
}

const TarefaCard: React.FC<TarefaCardProps> = ({ tarefa }) => {
  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <h3 className="font-semibold">{tarefa.titulo}</h3>
      {tarefa.descricao && <p className="text-gray-500">{tarefa.descricao}</p>}
      <p className="text-sm text-gray-400">Responsável: {tarefa.responsavel}</p>
    </div>
  );
};

export default TarefaCard;