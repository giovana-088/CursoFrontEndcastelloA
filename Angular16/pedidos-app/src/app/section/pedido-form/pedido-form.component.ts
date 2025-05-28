import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Pedido } from 'src/app/models/pedido.model';
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
    const index = this.produtosSelecionados.indexOf(id);
    if(index>=0){
      this.produtosSelecionados.splice(index,1);
    }else{
      this.produtosSelecionados.push(id);
    }
  }
  salvarPedido(){
    const cliente = this.clientes.find(
      c => c.id.toString() === this.clienteSelecionadoId );
    const produtos = this.produtos.filter(
        p=>this.produtosSelecionados.includes(p.id.toString())
      );
      if(!cliente || produtos.length === 0) {
        alert("Selecione um Cliente e pelo menos um produto!!!");
        return;
      }else{
        const pedido = new Pedido(
          Date.now(),
          cliente,
          produtos,
          this.desconto
        );
        this.dadosService.addPedido(pedido);
        this.clienteSelecionadoId = "";
        this.produtosSelecionados = [];
        this.desconto = 0;
        alert("Pedido Registrado cm Sucesso!!!")
      }
  }
}
