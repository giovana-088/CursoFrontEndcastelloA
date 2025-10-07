//Modelo de Criação de Usuário -> Criptografia
import bcrypt from "bcrypt";

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IUsuario extends Document{
    _id: string;
    nome: string;
    email: string;
    senha?: string;
    funcao: string;
    compareSenha(senhaUsuario:string):Promise<boolean>;
}

//criação do Schema do MongoDB (construtor)
const UsuarioSchema:Schema<IUsuario> = new Schema({
   nome: {type: String, required: true},
   email: {type: String, required: true},
   senha: {type: String, required: true, select: false},// não retrona a senha para o front
  funcao: {type: String, enum:["tecnico", "gerente", "admin"], required: true}
    
});
//metodo para criptografia da Senha
// Middleware -> intercepta a senha antes de chegar no banco
UsuarioSchema.pre<IUsuario>("save", async function (next){
    //se senha já esta criptografada ou esta vazia
    if(!this.isModified("senha") || !this.senha) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      //hash -> transformar a senha
      this.senha = await bcrypt.hash(this.senha, salt);
        next(); // => continua com o processo
    } catch (error: any) {
      next(error);
    }
})

//método apra compara senha criptografada
// retrona a conferencia das senhas criptografadas (booleana)
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):Promise<boolean>{
  return bcrypt.compare(senhaUsuario, this.senha);
}


//método conversão toMap fromMap
                //from               

const Usuario: Model<IUsuario> = mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario",UsuarioSchema);

export default Usuario;
//componente Reutilizavel