//fazer a conexão com o mongodb 

 import mongoose from "mongoose";

//arrowFunction

const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelecer conexão
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err));

    //conexao simples com mongodb
}

export default connectMongo;
//modulo pode ser usado em outras ações do código
