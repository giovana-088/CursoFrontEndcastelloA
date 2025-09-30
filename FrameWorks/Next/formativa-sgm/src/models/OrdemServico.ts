//classe para equipamentos

import mongoose, { Document, Model, Schema } from "mongoose";

// atributos da classe
export interface IOrdemServico extends Document {
  _id: string;
  titulo: string;
  descricao: string;
  tipoManutencao: string;
  status: string;
  dataSolicitada: Date;
  dataFinalizacao: Date;
  tecnicoId: string;
  EquipamentoId: string;
}

//Schema da Classe ( Construtor)
const OrdemServicoSchema: Schema<IOrdemServico> = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  tipoManutencao: { type: String, required: true },
  status: { type: String, enum: ["aberta","andamento", "fechada"], default: "aberta" },
  dataSolicitada: { type: Date, default: Date.now },
  dataFinalizacao: { type: Date },
  tecnicoId: { type: String, required: true },
  EquipamentoId: { type: String, required: true },
});

// fromMap toMap

const OrdemServico: Model<IOrdemServico> =
  mongoose.models.OrdemServico ||
  mongoose.model<IOrdemServico>("OrdemServico", OrdemServicoSchema);

export default OrdemServico;
