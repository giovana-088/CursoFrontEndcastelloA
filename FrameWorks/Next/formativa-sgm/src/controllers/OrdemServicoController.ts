//listar todos os OrdemServico

import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

//export arrow function
export const getOrdemServicos = async () => {
  //conectar com banco
  await connectMongo();
  //solicitação para o MongoDB
  const ordemServicos = await OrdemServico.find(); //listar todos os usuário da coleção
  return ordemServicos;
};
//listar um unico Usuário
export async function getOrdemServicoById(id: string) {
  await connectMongo();
  const ordemServico = await OrdemServico.findById(id);
  return ordemServico;
}
//criar Usuário
export async function createOrdemServico(data: Partial<IOrdemServico>) {
  await connectMongo();
  const novoOrdemServico = new OrdemServico(data);
  const novoOrdemServicoId = await novoOrdemServico.save();
  return novoOrdemServicoId;
}

// Atualizaar dados Usuário
export const updateOrdemServico = async (id: string, data: Partial<IOrdemServico>) => {
  await connectMongo();
  const ordemServicoAtualizado = await OrdemServico.findByIdAndUpdate(id, data, {
    new: true,
  });
  return ordemServicoAtualizado;
};

//Deletar Usuário
export const deleteOrdemServico = async (id: string) => {
  await connectMongo();
  await OrdemServico.findByIdAndDelete(id);
};
