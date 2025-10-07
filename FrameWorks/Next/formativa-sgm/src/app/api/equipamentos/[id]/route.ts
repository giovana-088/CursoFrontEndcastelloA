
import { deleteEquipamento, getEquipamentoById, updateEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
  id: string;
}

// GET One
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params; // converte parâmetro em id
    const data = await getEquipamentoById(id); // busca o equipamento pelo id
    if (!data) {
      // erro de não encontrado
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    // se encontrado, retorna o equipamento
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    // erro de conexão
    return NextResponse.json({ success: false, error: error });
  }
}

// PATCH
export async function PATCH({ params }: { params: Parametro }, req: NextRequest) {
  try {
    const { id } = params; // converte parâmetro em id
    const data = await req.json(); // converte para JSON
    const equipamentoAtualizado = await updateEquipamento(id, data); // atualiza o equipamento
    if (!data) {
      // erro de não encontrado
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    // se encontrado, retorna o equipamento atualizado
    return NextResponse.json({ success: true, data: equipamentoAtualizado });
  } catch (error) {
    // erro de conexão
    return NextResponse.json({ success: false, error: error });
  }
}

// DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params; // converte parâmetro em id
    await deleteEquipamento(id); // deleta o equipamento
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    // erro de conexão
    return NextResponse.json({ success: false, error: error });
  }
}