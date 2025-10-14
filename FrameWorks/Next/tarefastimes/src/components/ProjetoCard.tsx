import React from "react";
import { useRouter } from "next/router";

interface ProjetoCardProps {
  id: string;
  nome: string;
  descricao?: string;
}

const ProjetoCard: React.FC<ProjetoCardProps> = ({ id, nome, descricao }) => {
  const router = useRouter();
  return (
    <div
      className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
      onClick={() => router.push(`/projeto/${id}`)}
    >
      <h2 className="font-bold text-lg">{nome}</h2>
      {descricao && <p className="text-gray-600">{descricao}</p>}
    </div>
  );
};

export default ProjetoCard;