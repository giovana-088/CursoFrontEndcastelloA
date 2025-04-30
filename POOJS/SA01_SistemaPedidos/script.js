//Sistema de Pedidos -
// Model - classe Cliente, Classe Produto, CLasse Pedido
//view - Html
//controller - SistemaPedidos

// Model

class Cliente {
    //atributos privados (encapsulamento)
    #id;
    #nome;
    #cpf;
    //construtor
    constructor(id, nome, cpf) {
      (this.#id = id), (this.#nome = nome);
      this.#cpf = cpf;
    }
    //métodos publicos (getters and setters)
    getId() {
      return this.#id;
    }
    getNome() {
      return this.#nome;
    }
    getCpf() {
      return this.#cpf;
    }
  }
  
  class Produto {
    //atributos privados (encapsulamento)
    #id;
    #nome;
    #preco;
    //construtor
    constructor(id, nome, preco) {
      (this.#id = id), (this.#nome = nome);
      this.#preco = preco;
    }
    //métodos publicos (getters and setters)
    getId() {
      return this.#id;
    }
    getNome() {
      return this.#nome;
    }
    getPreco() {
      return this.#preco;
    }
  }
  
  class Pedido{
      //atributos
      #id
      #cliente
      #itens
      #desconto
      #valorTotal
      //construtor
      constructor(id, cliente, itens, desconto){
          this.#id = id;
          this.#cliente = cliente;
          this.#itens = itens;
          this.#desconto = desconto;
          this.#valorTotal = this.calcularValorTotal();
      }
  
      //método valor total
      calcularValorTotal(){
          let total = this.#itens.reduce((acc, item) => acc + item.produto.getPreco()*item.quantidade,0);
          return (total - (total * (this.#desconto/100)));
      }
      getId(){
          return this.#id;
      }
      getCliente(){
          return this.#cliente;
      }
      getItens(){
          return this.#itens
      }
      getDesconto(){
          return this.#desconto
      }
      getValorTotal(){
          return this.#valorTotal;
      }
  }
  
  //controller
  
  class SistemaPedidos{
      constructor(){
          this.clientes = []; //vetor para armazenar os clientes
          this.produtos = []; //vetor para armazenar produtos
          this.pedidos = []; //vetor para armazenar pedidos
      }
      //métodos de integração
      cadastrarCliente(){
          const nome = document.getElementById("clienteNome"); //DOM - Inputs (html)
          const cpf = document.getElementById("clienteCpf");
          if(!nome.value.trim() || !cpf.value.trim()) return alert("As Informações do Cliente Devem ser Preenchidas");
          //cadastrar o cliente -  instanciando um objeto da classe cliente
          const cliente = new Cliente(
              this.clientes.length+1, //id
              nome.value.trim(), //nome
              cpf.value.trim() //cpf
          )
          //adiciono no vetor
          this.clientes.push(cliente);
          nome.value = "";
          cpf.value = "";
          this.atualizarCliente();
      }
  
      atualizarCliente(){
          const lista = document.getElementById("listaClientes");
          lista.innerHTML = "";
          const select = document.getElementById("selectClientes");
          select.innerHTML = "<option value=''>Selecione um Cliente</option>";
          //preencher a lista e o select com os clientes cadastrados
          this.clientes.forEach( cliente => {
              const li = document.createElement("li");
              li.textContent = cliente.getNome();
              lista.appendChild(li);
              const option = document.createElement("option");
              option.value = cliente.getId();
              option.textContent = cliente.getNome();
              select.appendChild(option);
          });
      }
  
      cadastrarProduto(){
          const nome = document.getElementById("produtoNome");//DOM HTML
          const preco = document.getElementById("produtoPreco");//DOM HTML
          if(!nome.value.trim() || preco<=0) return alert("Informe os Dados do Produto Corretamente!");
          //instacia objeto
          const produto = new Produto( //MODEL
              this.produtos.length+1, //id = qnt de produto do vetor +1
              nome.value.trim(),
              preco.value
          )
          //adicionar o produto na vetor
          this.produtos.push(produto);
          nome.value = "";
          preco.value = "";
          this.atualizarProduto();
      }
  
      atualizarProduto(){
          const lista = document.getElementById("listaProdutos");
          lista.innerHTML = "";
          const divProdutos = document.getElementById("produtosDisponiveis");
          divProdutos.innerHTML = "";
          //percorrer a lista de produtos
          this.produtos.forEach(produto => {
              //lista produtos
              const li = document.createElement("li");
              li.textContent = `${produto.getNome()} - R$ ${produto.getPreco()}`;
              lista.appendChild(li);
              //produtosDisponíveis
              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.value = produto.getId();
              const label = document.createElement("label");
              label.textContent = `${produto.getNome()} - R$ ${produto.getPreco()}`;
              const quantidade = document.createElement("input");
              quantidade.type = "number";
              quantidade.value = 1;
              quantidade.min = 1;
  
              divProdutos.appendChild(checkbox);
              divProdutos.appendChild(label);
              divProdutos.appendChild(quantidade);
              divProdutos.appendChild(document.createElement("br"));
          });
      }
      //criar o gerenciamento de pedidos
      gerarPedido(){
          //selecionar o cliente
          const clienteId = parseInt(document.getElementById("selectClientes").value);
          if(!clienteId) return alert("Selecione um Cliente");
          const cliente = this.clientes.find(c => c.getId() === clienteId); //estou selecionando da lista de clientes o cliente pelo Id
          //verificar o desconto
          const desconto = parseFloat(document.getElementById("desconto").value || 0);
          //produtos selecionado
          let itens = [];
          const produtosDisponiveis = document.querySelectorAll("#produtosDisponiveis input[type='checkbox']"); //array
          const quantidadesSelecionadas = document.querySelectorAll("#produtosDisponiveis input[type='number']");
          produtosDisponiveis.forEach((checkbox,index) =>{
              if(checkbox.checked){
                  const produtoId = parseInt(checkbox.value);
                  const produto = this.produtos.find(p=>p.getId()===produtoId);
                  const quantidade = parseInt(quantidadesSelecionadas[index].value);
                  itens.push({produto,quantidade});
              }
          });
          if(itens.length === 0) return alert("Selecione pelo menos um Produto!!");
          //instanciar o Pedido
          const pedido = new Pedido(
              this.pedidos.length+1,
              cliente,
              itens,
              desconto
          );
          this.pedidos.push(pedido);
          // limpar os campos
          document.getElementById("selectClientes").value = "";
          document.getElementById("desconto").value = "";
          produtosDisponiveis.forEach(checkbox => checkbox.checked = false);
          quantidadesSelecionadas.forEach(qtd => qtd.value = 1);
          //atualizar lista de pedidos
          this.atualizarPedido();
      }
  
      atualizarPedido(){
          const lista = document.getElementById("listaPedidos");
          lista.innerHTML = "";
          //percorrer a lista de pedidos
          this.pedidos.forEach(pedido =>{
              const li = document.createElement("li");
              li.textContent = `Pedido ${pedido.getId()} - Cliente: ${pedido.getCliente().getNome()} - Total: R$ ${pedido.getValorTotal()}`;
              lista.appendChild(li);
          });
          
      }
  
  
  }
  
  //instanciar um obj da classe sistemaPedidos
  
  const sistema = new SistemaPedidos();
  
  