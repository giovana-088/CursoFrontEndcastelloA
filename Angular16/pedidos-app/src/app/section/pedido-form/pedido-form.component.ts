import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss'],
})
export class PedidoFormComponent {
  clienteSelecionadoId = '';
  clientes: Cliente[];
  produtos:Produto[];
  produtosSelecionados: string[] =[]
  desconto = 0;

  constructor(private dadosService: DadosService) {
    this.clientes = dadosService.getClientes();
    this.produtos = dadosService.getProdutos();
  }

  //método
  mudarProduto(id:string){

  }
  salvarPedido(){
    
  }
}
