// rotas que precisam passar o ID Params (GET/PATCH/DELETE)

import { deleteOrdemServico, getOrdemServicoById, updateOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
  id: string;
}

// GET One
export async function GET(req: NextRequest, { params }: { params: Parametro }) {
  try {
    const { id } = params; // converte parâmetro em id
    const data = await getOrdemServicoById(id); // busca a ordem de serviço pelo id
    if (!data) {
      // erro de não encontrado
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    // se encontrada, retorna a ordem de serviço
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // erro de conexão
    return NextResponse.json({ success: false, error });
  }
}

// PATCH
export async function PATCH(req: NextRequest, { params }: { params: Parametro }) {
  try {
    const { id } = params;
    const data = await req.json(); // converte corpo da requisição em JSON
    const ordemServicoAtualizada = await updateOrdemServico(id, data);

    if (!ordemServicoAtualizada) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }

    return NextResponse.json({ success: true, data: ordemServicoAtualizada });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// DELETE
export async function DELETE(req: NextRequest, { params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteOrdemServico(id); // deleta a ordem de serviço
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}