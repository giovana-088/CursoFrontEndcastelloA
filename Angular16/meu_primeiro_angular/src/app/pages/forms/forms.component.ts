import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade : number | null = null;
  profissao : string = "";


  //métodos
  limparDados(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  enviarDados(){
    const erros: string[] = [];

    //validação do nome
    if(this.nome.trim().length<3){
      erros.push("Nome Inválido");
    }
    //validação do email
    if(this.email.trim().includes("@")){
      erros.push("Email Inválido");
    }
    //validar o telefone
    if(!this.telefone.trim()){
      erros.push("Telefone Inválido!");
    }
    if(this.idade===null || this.idade<18){
      erros.push("Idade Inválida");
    }
    //validar profissao
    if(!this.profissao.trim()){
      erros.push("Profissão Inválida");
    }

    //enviar
    if(erros.length>0){
      alert(`Erros no Formulário:\n ${erros.join("\n")}`);
      return;
    } else{
      alert("Formulário enviado com Sucesso");
      this.limparDados();
    }
  }
}
