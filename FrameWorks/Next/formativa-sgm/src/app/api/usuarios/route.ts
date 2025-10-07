//rotas que não precisam de ID (GET /POST)

import { createUsuario, getUsuarios } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

// http -> request
export async function GET(){
    try {
        const data = await getUsuarios(); //busca todos os dados da coleção
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

export async function POST(req: NextRequest) {//passa os dados do HTML
    try {
        const data = await req.json(); //convert o req em json
        const novoUsuario = await createUsuario(data);// faz a solicitação http
        return NextResponse.json({success:true, data: novoUsuario}); //retorna os dados
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}