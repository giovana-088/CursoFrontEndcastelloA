//listar todos os Equipamento

import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

//export arrow function
export const getEquipamentos = async () => {
  //conectar com banco
  await connectMongo();
  //solicitação para o MongoDB
  const equipamentos = await Equipamento.find(); //listar todos os usuário da coleção
  return equipamentos;
};
//listar um unico Usuário
export async function getEquipamentoById(id: string) {
  await connectMongo();
  const equipamento = await Equipamento.findById(id);
  return equipamento;
}
//criar Usuário
export async function createEquipamento(data: Partial<IEquipamento>) {
  await connectMongo();
  const novoEquipamento = new Equipamento(data);
  const novoEquipamentoId = await novoEquipamento.save();
  return novoEquipamentoId;
}

// Atualizaar dados Usuário
export const updateEquipamento = async (id: string, data: Partial<IEquipamento>) => {
  await connectMongo();
  const equipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, {
    new: true,
  });
  return equipamentoAtualizado;
};

//Deletar Usuário
export const deleteEquipamento = async (id: string) => {
  await connectMongo();
  await Equipamento.findByIdAndDelete(id);
};
