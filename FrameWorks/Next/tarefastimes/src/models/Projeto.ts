import mongoose, { Schema, Document } from "mongoose";

export interface IProjeto extends Document {
  nome: string;
  descricao?: string;
  membros: string[];
}

const ProjetoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  membros: [{ type: Schema.Types.ObjectId, ref: "Usuario" }]
});

export default mongoose.models.Projeto || mongoose.model<IProjeto>("Projeto", ProjetoSchema);