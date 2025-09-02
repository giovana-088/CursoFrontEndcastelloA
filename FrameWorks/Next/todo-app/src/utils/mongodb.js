import { connect } from 'http2';
import mongoose from 'mongoose';

//arrow function -> conexão
const connectMongo = async () =>{
    mongoose.connect(process.env.DATABASE_URL) //estabelece a conexao
        .then(()=>console.log("Conectado ao MongoDB"))
        .catch(err => console.error("Erro ao Conectar no MongoDB", err));

}

export default connectMongo;