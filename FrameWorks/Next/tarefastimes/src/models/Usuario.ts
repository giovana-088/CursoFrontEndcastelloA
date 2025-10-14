import mongoose, { Schema, Document } from "mongoose";

export interface IUsuario extends Document {
  nome: string;
  email: string;
  senha: string;
  funcao: "gerente" | "membro";
}

const UsuarioSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  funcao: { type: String, enum: ["gerente", "membro"], default: "membro" }
});

export default mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);