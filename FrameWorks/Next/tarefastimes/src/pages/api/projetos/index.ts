import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Projeto from "../../../models/Projeto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    const projetos = await Projeto.find();
    res.status(200).json(projetos);
  } else if (req.method === "POST") {
    const { nome, descricao, membros } = req.body;
    const projeto = await Projeto.create({ nome, descricao, membros });
    res.status(201).json(projeto);
  } else res.status(405).json({ msg: "Método não permitido" });
}