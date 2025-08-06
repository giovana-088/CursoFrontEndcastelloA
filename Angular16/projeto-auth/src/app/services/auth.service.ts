import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3007/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';
  //construtor
  constructor(private router: Router, private http: HttpClient) {}
  //métodos

  registrar(usuario:any): Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap( res => {
        if(res.length>0){
          return throwError(()=> new Error("Email Já Cadastrado"));
        } else{
          return this.http.post<any>(this.apiUrl,usuario);
        }
      })
    );
  }

  login(credenciais:any):Observable<boolean>{
    return this.http.get<any[]>(
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios =>{
          if (usuarios.length>0){
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            return true;
          }else{
            return false;
          }
        }
      ));
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(["/login"]);
  }

  // verrifica se o usuário está logado
  estaLogado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH); //verifica se existe a chave_auth no localstorage
    
  }
// pegara chave de autenticação e
// usuário
usuarioAtual(): any {
  return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}");
  }


}

