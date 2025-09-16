//serviço de conexão com o mongoDB
//precisa instalar a biblioteca mongoose
import mongoose from "mongoose";

//variavel que vai transformar String => URL(URI)
//process => convetr string em Endereço URL(URI)
const Mongo_URI = process.env.DATABASE_URL; //1

//verificar se existe um endereço url
if (!Mongo_URI) {
  // se não existir endereço URL
  //gere um erro para o sistema
  throw new Error("Defina o DATABASE_URL o arquivo .env.local");
}

//criar uma variavel para armazenar a conexão do BD

let cached = (global as any).mongoose; //variavel global do node //2
//(global as any) => é um objeto do tipo any

//se cached é null (primeiro acesso ao site)

if (!cached) {//3
  cached = (global as any).mongoose = { conectada: null, promessa: null };
}

//função de conexão

async function connectMongo() {
  //Verificar se a conexão ja existe,
  //se já existir retorna a conexão existente(não cria outra conexão)
  if (cached.conectada) return cached.conectada;

  //se não existe a conexão , verifico se não existe uma promessa de conexão
  if (!cached.promessa) {//4
    //se a promessa não existir
    const aguardar = { bufferCommands: false };
    // bufferCommands: false => não aramazena comando enquanto não estabelece uma conexão
    //crio a promessa de conexão
    cached.promessa = mongoose.connect(Mongo_URI!, aguardar).then((mongoose) => {
      console.log("Conectado ao Mongo");
      return mongoose;
    });
  }
  //aguardar a conexão ser criada
  try { //5
    cached.conectada = await cached.promessa;
    //cria a conexão que estava pendente
  } catch (error) {
    cached.promessa = null;
    throw error; //lança um erro para a view do projeto
  }

  return cached.conectada;
}

//transformar em um componente reutilizavel

export default connectMongo;

//1.Passo: criar o endereço de conexão 
//2.Passo: criar o cached para armazenar as conexões ao longo do projeto
//3.Passo: verificar se já existe uma conexão estabelecida com DB
//4.Passo: verica se não existe uma promessa de conexão , e cria uma promise
//5.Passo: com a promessa criada, estabele uma conexão com o banco