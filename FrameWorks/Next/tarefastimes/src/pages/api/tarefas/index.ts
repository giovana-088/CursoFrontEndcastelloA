import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Tarefa from "../../../models/Tarefa";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    const { projetoId } = req.query;
    const tarefas = await Tarefa.find({ projetoId });
    res.status(200).json(tarefas);
  } else if (req.method === "POST") {
    const { titulo, descricao, projetoId, responsavel, status } = req.body;
    const tarefa = await Tarefa.create({ titulo, descricao, projetoId, responsavel, status });
    res.status(201).json(tarefa);
  } else res.status(405).json({ msg: "Método não permitido" });
}