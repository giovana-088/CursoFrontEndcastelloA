import { NextApiRequest, NextApiResponse } from "next";

import Tarefa from "@/models/Tarefa";
import { connectDB } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const tarefa = await Tarefa.findById(id);
    if (!tarefa) return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.status(200).json(tarefa);
  } else if (req.method === "PUT") {
    const { titulo, descricao, responsavel, status } = req.body;
    const tarefa = await Tarefa.findByIdAndUpdate(id, { titulo, descricao, responsavel, status }, { new: true });
    res.status(200).json(tarefa);
  } else if (req.method === "DELETE") {
    await Tarefa.findByIdAndDelete(id);
    res.status(200).json({ msg: "Tarefa deletada" });
  } else res.status(405).json({ msg: "Método não permitido" });
}