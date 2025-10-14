import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Projeto from "../../../models/Projeto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const projeto = await Projeto.findById(id);
    if (!projeto) return res.status(404).json({ msg: "Projeto não encontrado" });
    res.status(200).json(projeto);
  } else if (req.method === "PUT") {
    const { nome, descricao, membros } = req.body;
    const projeto = await Projeto.findByIdAndUpdate(id, { nome, descricao, membros }, { new: true });
    res.status(200).json(projeto);
  } else if (req.method === "DELETE") {
    await Projeto.findByIdAndDelete(id);
    res.status(200).json({ msg: "Projeto deletado" });
  } else res.status(405).json({ msg: "Método não permitido" });
}