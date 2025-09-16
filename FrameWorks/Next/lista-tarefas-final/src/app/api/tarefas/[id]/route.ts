// app/api/tarefas/[id]/route.ts
import { deleteTarefa, updateTarefa } from "@/app/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

interface Parametros {
  id: string;
}

// PATCH → atualizar tarefa
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametros }   
) {
  try {
    const { id } = params; // pega o id da URL
    const data = await req.json();   // dados enviados no corpo
    const tarefaAtualizada = await updateTarefa(id, data);
    return NextResponse.json({ success: true, data: tarefaAtualizada });
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) });
  }
}

// DELETE → remover tarefa
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Parametros }   
) {
  try {
    const { id } = params;
    await deleteTarefa(id);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) });
  }
}
