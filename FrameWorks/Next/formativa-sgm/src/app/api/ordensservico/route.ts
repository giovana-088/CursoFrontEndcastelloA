//rotas que não precisam de ID (GET / POST)

import { createOrdemServico, getOrdemServicos } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

// http -> request
export async function GET() {
    try {
        const data = await getOrdemServicos(); // busca todas as ordens de serviço
        return NextResponse.json({ success: true, data: data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}

export async function POST(req: NextRequest) { // passa os dados do HTML
    try {
        const data = await req.json(); // converte o req em JSON
        const novaOrdem = await createOrdemServico(data); // faz a solicitação http
        return NextResponse.json({ success: true, data: novaOrdem }); // retorna os dados
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}
