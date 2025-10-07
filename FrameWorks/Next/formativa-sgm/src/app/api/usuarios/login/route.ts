//criar o HTTP request de Login
//JWT -> chave de segurança que armazena informaç~eos de login do usuario

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET){
    throw new Error("JWT_SECRET não está definido nas váriaveis locais");
}

// método para solicitar login do usuario
export async function POST(req: NextRequest) {
    try {
        const {email, senha} = await req.json(); //convert para json
        //validar os dados 
        if(!email || !senha){
            return NextResponse.json({success: false, error: "Email e Senha São Obrigatório"});
        }
        // método de autenticação
        const usuario = await autenticaUsuario(email, senha);
        if(!usuario){
            return NextResponse.json({success:false, error: "Usuário ou Senha inválidos"});
        }
         //deu certo validou o usuario e senha
        //criar o JWT
        const token = jwt.sign(
            {id: usuario._id, email: usuario.email, funcao: usuario.funcao, nome: usuario.nome},
            JWT_SECRET as string,
            {expiresIn: "1h"}
        );
        //retronar o token
        return NextResponse.json({
            success: true,
            token,
            usuario:{
                id: usuario.id,
                email: usuario.email,
                funcao: usuario.funcao,
                nome: usuario.nome
            }
        });

    } catch (error) {
        return NextResponse.json({success: false, error:error});
    }
}   