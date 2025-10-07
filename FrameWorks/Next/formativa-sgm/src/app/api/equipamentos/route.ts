import { createEquipamento, getEquipamentos } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

// http -> request
export async function GET() {
    try {
        const data = await getEquipamentos(); // busca todos os equipamentos
        return NextResponse.json({ success: true, data: data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}

export async function POST(req: NextRequest) { // passa os dados do HTML
    try {
        const data = await req.json(); // converte o req em JSON
        const novoEquipamento = await createEquipamento(data); // faz a solicitação http
        return NextResponse.json({ success: true, data: novoEquipamento }); // retorna os dados
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}