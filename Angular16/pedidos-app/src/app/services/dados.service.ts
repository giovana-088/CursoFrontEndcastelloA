import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }

  //métodos: add -> get
  getClientes(): Cliente[]{
    return this.clientes;
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  getPedidos(): Pedido[]{
    return this.pedidos;
  }

  addCliente(cliente: Cliente): void{
    this.clientes.push(cliente);
  }

  addProduto(produto: Produto):void{
    this.produtos.push(produto);
  }

  addPedido(pedido:Pedido):void{
    this.pedidos.push(pedido);
  }

}
