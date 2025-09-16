"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";

interface ITarefa {
  _id: string;
  titulo: string;
  concluida: boolean;
}

export default function Home() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  // Carregar tarefas ao iniciar
  useEffect(() => {
    carregarTarefas();
  }, []);

  // Buscar todas as tarefas
  const carregarTarefas = async () => {
    try {
      const resp = await fetch("/api/tarefas");
      const data = await resp.json();
      if (data.success) setTarefas(data.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Adicionar nova tarefa
  const adicionar = async (e: FormEvent) => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;

    try {
      const resp = await fetch("/api/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo: novaTarefa, concluida: false }),
      });
      const data = await resp.json();
      if (data.success) {
        setTarefas((prev) => [...prev, data.data]); // adiciona sem refetch
        setNovaTarefa("");
      }
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Marcar/desmarcar tarefa
  const toggleConcluida = async (id: string, atual: boolean) => {
    try {
      const resp = await fetch(`/api/tarefas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concluida: !atual }),
      });
      const data = await resp.json();
      if (data.success) {
        setTarefas((prev) =>
          prev.map((t) => (t._id === id ? { ...t, concluida: !atual } : t))
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  // Excluir tarefa
  const excluir = async (id: string) => {
    if (!confirm("Deseja realmente excluir esta tarefa?")) return;

    try {
      const resp = await fetch(`/api/tarefas/${id}`, { method: "DELETE" });
      const data = await resp.json();
      if (data.success) {
        setTarefas((prev) => prev.filter((t) => t._id !== id));
      }
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  return (
    <main style={{ maxWidth: 500, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionar} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNovaTarefa(e.target.value)
          }
          placeholder="Nova tarefa"
          style={{ padding: 6, width: "70%" }}
        />
        <button type="submit" style={{ marginLeft: 8, padding: "6px 12px" }}>
          Adicionar
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((t) => (
          <li
            key={t._id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={t.concluida}
              onChange={() => toggleConcluida(t._id, t.concluida)}
              style={{ marginRight: 8 }}
            />

            {/* Título da tarefa */}
            <span
              style={{
                flexGrow: 1,
                textDecoration: t.concluida ? "line-through" : "none",
              }}
            >
              {t.titulo}
            </span>

            {/* Botão excluir */}
            <button
              onClick={() => excluir(t._id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 10px",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </main>
  );

}
