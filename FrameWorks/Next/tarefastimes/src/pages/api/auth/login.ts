import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Usuario from "../../../models/Usuario";
import { compararSenha, gerarToken } from "../../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method !== "POST") return res.status(405).json({ msg: "Método não permitido" });

  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(400).json({ msg: "Usuário não encontrado" });

  const isValid = await compararSenha(senha, usuario.senha);
  if (!isValid) return res.status(400).json({ msg: "Senha incorreta" });

  const token = gerarToken({ id: usuario._id, email: usuario.email });
  res.status(200).json({ usuario, token });
}