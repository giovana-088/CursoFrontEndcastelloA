# TaskFlow — Sistema de Gerenciamento de Tarefas (Somativa)

## Briefing
O **TaskFlow** é uma aplicação web voltada à **organização de tarefas em equipe** através de um quadro **Kanban interativo**.  
O objetivo é centralizar e otimizar o gerenciamento de projetos, permitindo que gerentes e membros acompanhem o progresso das tarefas de forma visual, simples e eficiente.

A aplicação possibilita:
- Criação e gerenciamento de **projetos**  
- Cadastro e atribuição de **tarefas**  
- Visualização das tarefas em **três status principais**:  
  A Fazer | Em Andamento | Concluído  

---

## Objetivos do Projeto
- Organizar tarefas por projeto e status.  
- Atribuir tarefas a membros específicos.  
- Fornecer visão geral da equipe por meio de um **quadro Kanban**.  
- Facilitar a gestão de produtividade e andamento dos trabalhos.

---

##  Público-Alvo
 **Gerente de Projeto** – Cria projetos e tarefas, atribui membros e acompanha o progresso.  
 **Membro da Equipe** – Visualiza e atualiza o status das tarefas que lhe foram atribuídas.  
 **Administrador** – Gerencia usuários e mantém o sistema.

---

## Requisitos do Sistema

### Requisitos Funcionais
- CRUD de **Projetos** (Criar, Listar, Atualizar e Deletar)  
- CRUD de **Tarefas** (Título, Descrição, Projeto, Responsável e Status)  
- **Quadro Kanban** com as colunas: *A Fazer*, *Em Andamento* e *Concluído*  
- **Atribuição de tarefas** a membros  
- **Autenticação (Login e JWT)**  
- Controle de acesso por **papéis (Gerente / Membro / Admin)**  
- **Atualização visual** de status via **drag-and-drop**

### Requisitos Não Funcionais
- Banco de Dados **MongoDB** (armazenamento não relacional)  
- Criptografia de senhas com **Bcrypt**  
- Autenticação segura com **JWT**  
- Framework principal: **Next.js (App Router)**  
- Estilização com **Tailwind CSS**  
- Controle de rotas protegido por **Middlewares**

---

## Tecnologias Utilizadas
| Categoria | Ferramenta |
|------------|-------------|
| Framework Principal | Next.js |
| Banco de Dados | MongoDB + Mongoose |
| Linguagem | TypeScript |
| Segurança | JWT e Bcrypt |
| UI/UX | Tailwind CSS + Figma |
| Versionamento | GitHub |
| IDE | Visual Studio Code |

---

## Diagramas

### 1. Diagrama de Classes
Representa as entidades principais do sistema e seus relacionamentos.

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

    class Projeto {
        +String id
        +String nome
        +String descricao
        +Date dataCriacao
        +String idGerente
        +create()
        +read()
        +update()
        +delete()
    }

    class Tarefa {
        +String id
        +String titulo
        +String descricao
        +String status
        +String idProjeto
        +String idResponsavel
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "0..*" Tarefa : atribui >
    Projeto "1" -- "0..*" Tarefa : contém >
 ```
    
    ### 2. Diagrama de Caso de Uso

 ```mermaid

    graph TD 

    subgraph "TaskFlow"
        caso1([Fazer Login])
        caso2([Gerenciar Projetos - CRUD])
        caso3([Gerenciar Tarefas - CRUD])
        caso4([Mover Tarefa no Kanban])
        caso5([Gerenciar Usuários])
    end

    Membro([Membro da Equipe])
    Gerente([Gerente de Projeto])
    Admin([Administrador])

    Membro --> caso1
    Membro --> caso3
    Membro --> caso4

    Gerente --> caso1
    Gerente --> caso2
    Gerente --> caso3
    Gerente --> caso4

    Admin --> caso1
    Admin --> caso5

    caso1 -.-> caso2
    caso1 -.-> caso3
    caso1 -.-> caso4
    caso1 -.-> caso5

 ```

    ### 3. Diagrama de Fluxo
   ```mermaid

    graph TD

    A[Início] --> B[Acessa Tela de Login]
    B --> C[Preenche Email e Senha]
    C --> D{Credenciais Válidas?}
    D -->|Sim| E[Gerar Token JWT]
    E --> F[Redireciona ao Kanban]
    D -->|Não| G[Mensagem de Erro]
    G --> B
    ```

    