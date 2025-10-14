import mongoose, { Schema, Document } from "mongoose";

export interface ITarefa extends Document {
  titulo: string;
  descricao?: string;
  projetoId: string;
  responsavel: string;
  status: "A Fazer" | "Em Andamento" | "Concluído";
}

const TarefaSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  projetoId: { type: Schema.Types.ObjectId, ref: "Projeto", required: true },
  responsavel: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  status: { type: String, enum: ["A Fazer", "Em Andamento", "Concluído"], default: "A Fazer" }
});

export default mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);