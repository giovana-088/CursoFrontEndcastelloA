import mongoose, { Document, Model, Schema } from "mongoose";

//definir a estrutura dos objs
export interface Itarefa extends Document{
    //heradamos a base Document do Mongoose
    //criar a estrutura do obj
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

//criar as regras para a interface ao conectar com o Mongo (Schema)

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true,"O Título é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now //pega o carimbo de data e hora que a tarefa foi criada
    }
});

//export do Modelo (tanto para enviar quanto para Receber)
//                              FROM                      TO
const Tarefa : Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema);

export default Tarefa; //componente reutiizavel