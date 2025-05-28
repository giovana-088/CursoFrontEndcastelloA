import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  nome: string = "";

  constructor(private dadosServices: DadosService){}

  //método
  salvarCliente(){
    const cliente = new Cliente(this.dadosServices.getClientes().length+1,this.nome); //obj
    this.dadosServices.addCliente(cliente);//adicionando o obj no vetor cliente
    this.nome="";
    alert("Cliente Salvo com Sucesso!!!");
  }

}
