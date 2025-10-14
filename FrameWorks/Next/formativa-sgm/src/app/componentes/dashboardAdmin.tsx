"use client";

"use client";
import { useEffect, useState } from "react";

type User = {
	id: string;
	nome: string;
	email: string;
	funcao: string;
};

const STORAGE_KEY = "sgm_users";

function uuid() {
	return Math.random().toString(36).substring(2, 9);
}

export default function DashboardAdmin(){
	const [users, setUsers] = useState<User[]>([]);
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [funcao, setFuncao] = useState("tecnico");
	const [error, setError] = useState<string | null>(null);

	useEffect(()=>{
		const raw = localStorage.getItem(STORAGE_KEY);
		if(raw){
			try{
				setUsers(JSON.parse(raw));
			}catch(e){
				setUsers([]);
			}
		}else{
			// seed with an admin user if empty
			const seed: User[] = [
				{ id: uuid(), nome: "Administrador", email: "admin@sgm.local", funcao: "admin" }
			];
			localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
			setUsers(seed);
		}
	}, []);

	useEffect(()=>{
		// persist whenever users change
		localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
	}, [users]);

	const validarEmail = (e: string) => {
		return /\S+@\S+\.\S+/.test(e);
	}

	const handleCreate = (ev?: React.FormEvent) =>{
		ev?.preventDefault();
		setError(null);
		if(!nome.trim() || !email.trim()){
			setError("Nome e email são obrigatórios.");
			return;
		}
		if(!validarEmail(email)){
			setError("Email inválido.");
			return;
		}

		const newUser: User = { id: uuid(), nome: nome.trim(), email: email.trim(), funcao };
		setUsers(prev => [newUser, ...prev]);

		// limpar formulário
		setNome("");
		setEmail("");
		setFuncao("tecnico");
	}

	const handleDelete = (id: string) =>{
		if(!confirm("Confirma excluir este usuário?")) return;
		setUsers(prev => prev.filter(u => u.id !== id));
	}

	return (
		<section style={{padding:20}}>
			<h2>Gestão de Usuários (Admin)</h2>

			<div style={{display:"flex",gap:20,flexWrap:"wrap",alignItems:"flex-start"}}>
				<form onSubmit={handleCreate} style={{minWidth:300,padding:12,border:"1px solid #ddd",borderRadius:6}}>
					<h3>Criar usuário</h3>
					{error && <div style={{color:"#b00020",marginBottom:8}}>{error}</div>}
					<div style={{marginBottom:8}}>
						<label style={{display:"block",fontSize:12}}>Nome</label>
						<input value={nome} onChange={e=>setNome(e.target.value)} style={{width:"100%",padding:8}} />
					</div>
					<div style={{marginBottom:8}}>
						<label style={{display:"block",fontSize:12}}>Email</label>
						<input value={email} onChange={e=>setEmail(e.target.value)} style={{width:"100%",padding:8}} />
					</div>
					<div style={{marginBottom:12}}>
						<label style={{display:"block",fontSize:12}}>Função</label>
						<select value={funcao} onChange={e=>setFuncao(e.target.value)} style={{width:"100%",padding:8}}>
							<option value="admin">Admin</option>
							<option value="gerente">Gerente</option>
							<option value="tecnico">Técnico</option>
						</select>
					</div>
					<div style={{display:"flex",gap:8}}>
						<button type="submit" style={{padding:"8px 12px"}}>Criar</button>
						<button type="button" onClick={()=>{setNome("");setEmail("");setFuncao("tecnico");setError(null);}} style={{padding:"8px 12px"}}>Limpar</button>
					</div>
				</form>

				<div style={{flex:1,minWidth:320}}>
					<h3>Lista de usuários</h3>
					<div style={{overflowX:"auto",border:"1px solid #eee",borderRadius:6}}>
						<table style={{width:"100%",borderCollapse:"collapse"}}>
							<thead>
								<tr style={{background:"#fafafa"}}>
									<th style={{textAlign:"left",padding:8,borderBottom:"1px solid #eee"}}>Nome</th>
									<th style={{textAlign:"left",padding:8,borderBottom:"1px solid #eee"}}>Email</th>
									<th style={{textAlign:"left",padding:8,borderBottom:"1px solid #eee"}}>Função</th>
									<th style={{textAlign:"center",padding:8,borderBottom:"1px solid #eee"}}>Ações</th>
								</tr>
							</thead>
							<tbody>
								{users.map(u=> (
									<tr key={u.id}>
										<td style={{padding:8,borderBottom:"1px solid #f5f5f5"}}>{u.nome}</td>
										<td style={{padding:8,borderBottom:"1px solid #f5f5f5"}}>{u.email}</td>
										<td style={{padding:8,borderBottom:"1px solid #f5f5f5"}}>{u.funcao}</td>
										<td style={{padding:8,borderBottom:"1px solid #f5f5f5",textAlign:"center"}}>
											<button onClick={()=>handleDelete(u.id)} style={{padding:"6px 8px"}}>Excluir</button>
										</td>
									</tr>
								))}
								{users.length === 0 && (
									<tr>
										<td colSpan={4} style={{padding:12,textAlign:"center"}}>Nenhum usuário encontrado.</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	)
}

