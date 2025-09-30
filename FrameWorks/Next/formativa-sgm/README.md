# Sistema de Getão de Manutenção (SGM) - Formativa

## Briefing
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web. O objetivo é centralizar e otimizar o controle das atividades de manutenção de máquinas e equipamentos de uma empresa. A plataforma permitirá o cadastro de equipamentos, agendamento de manutenções preventivas e corretivas, e o gerenciamento de ordens de serviço.

## Objetivos do Projeto
- gerenciar informações sobre equipamentos e manutenção de uma empresa
- realizar abertura de chamados de manutenção (ordens de serviço)
- visualizar informaçoes em um dashboard

## Público-Alvo
- Técnicos (usuário final) - Ordens de Serviço
- Gerentes (usuário intermediário) - Ordens de Serviço / Equipamentos
- Admin dos Sistema - Responsável pelo Gestão de Usuários

## Levantamento de Requistos do Projeto
- ### Requisitos Funcionais
    - Gerenciamento de Ordens de Serviço (Criar, Atualizar, Listar, Deletar)
    - Gerenciamento de Usuário pelo Admin (Criar, Atualizar, Listar , Deletar)
    - Gerenciamento de Equipamentos (Criar, Atualizar, Listar, Deletar) 
    - Tela de Visualizações de Informações de Acordo com o Perfil do Usuário
    - Tela de Login dos Usuários (Email e Senha)

- ### Requisitos Não Funcionais
    - Armazenamento das Informações sobre Ordem de Serviço, Equipamento e Usuários em um BD (MongoDB)
    - Criptografia de Senha do Usuário 
    - JWT para Segurança das Conexões
    - Gerenciamento de Rotas de Acesso (Middlewares)

## Recurso do Projeto (Tecnológicos)
- Framework de Desenvolvimetno Next
- MongoDB (Banco de Dados - Não Relacional)
- Linguagem de Programação : TypeScript
- GitHub
- VsCode
- Figma

## Diagramas

1. ### Classe
Descreve o Comportamento das Entidades do Sistema
- Usuários (User/Usuario)
    - Atributos: id, nome, email, senha, função
    - Métodos: create, read, update, delete, login, logout


- Equipamentos (Equipment/Equipamento)
    - Atributos: id, modelo, marca, decricao, status, 
    localizacao, numeroSerie
    - Métodos: CRUD

- Ordem de Serviço (ServiceOrder/OrdemServico)
   - Atributos: id, titulo, descricao, tipo, status,
    idTecnico, idEquipamento
   - Métodos: CRUD

```mermaid

classDiagram
    class Usuario {
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +create()
        +read()
        +update()
        +delete()
        +login()
        +logout()
    }

    class Equipamento {
        +String id
        +String modelo
        +String marca
        +String descricao
        +String status
        +String localizacao
        +String numeroSerie
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemServico {
        +String id
        +String titulo
        +String descricao
        +String tipo
        +String status
        +String idTecnico
        +String idEquipamento
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "0..*" OrdemServico : atribui >
    Equipamento "1" -- "0..*" OrdemServico : associado a >

```
2. ### Caso de Uso
Ilustra as interações dos diferentes tipos de usuários(Atores) com as funcionalidades do sistema
- Técnico: Gerenciar Ordem de Serviço (CRUD) e acessar o DashBoard
- Gerente: funções do técnico + Gerenciamento de Equipamentos (CRUD)
- Admin: Gerenciar Usuários, Acessar o Dashboard

Todos Devem Fazer o login antes de qualquer ação

```mermaid

graph TD 

    subgraph "SGM"
        caso1([Fazer Login])
        caso2([Gerenciar Ordens de Serviço - CRUD])
        caso3([Gerenciar Equipamentos - CRUD])
        caso4([Gerenciar Usuários])
        caso5([Acessar o Dasboard])
    end

    Tecnico([Técnico de Manutenção])
    Gerente([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> caso1
    Tecnico --> caso2
    Tecnico --> caso5

    Gerente --> caso1
    Gerente --> caso2
    Gerente --> caso3
    Gerente --> caso5

    Admin --> caso1
    Admin --> caso4
    Admin --> caso5


    caso1 -.-> caso2
    caso1 -.-> caso3
    caso1 -.-> caso4
    caso1 -.-> caso5


    

```
