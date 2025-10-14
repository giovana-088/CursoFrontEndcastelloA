import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;

export const hashSenha = async (senha: string) => await bcrypt.hash(senha, 10);
export const compararSenha = async (senha: string, hash: string) => await bcrypt.compare(senha, hash);
export const gerarToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
export const verificarToken = (token: string) => jwt.verify(token, JWT_SECRET);