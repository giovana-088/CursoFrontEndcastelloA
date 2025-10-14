import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Usuario from "../../../models/Usuario";
import { hashSenha, gerarToken } from "../../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method !== "POST") return res.status(405).json({ msg: "Método não permitido" });

  const { nome, email, senha, funcao } = req.body;
  const existing = await Usuario.findOne({ email });
  if (existing) return res.status(400).json({ msg: "Email já cadastrado" });

  const senhaHash = await hashSenha(senha);
  const usuario = await Usuario.create({ nome, email, senha: senhaHash, funcao });
  const token = gerarToken({ id: usuario._id, email: usuario.email });
  res.status(201).json({ usuario, token });
}