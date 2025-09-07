# Não Sei Ainda

"Não Sei Ainda" é uma plataforma web interativa construída com React, TypeScript e Vite, projetada para entusiastas de filmes, séries e animes. A aplicação permite que os usuários descubram novos títulos, filtrem por suas preferências e interajam em uma comunidade online.

## Funcionalidades Principais

* **Página Inicial Dinâmica**: Apresenta carrosséis de títulos populares, novos lançamentos, filmes, séries e animes, proporcionando uma visão geral do conteúdo disponível.
* **Galeria com Filtros Avançados**: Uma galeria completa onde os usuários podem encontrar títulos usando filtros detalhados como gênero, autor/estúdio, país, ano de lançamento e avaliação.
* **Comunidade Interativa**: Uma área social onde os usuários podem criar e visualizar posts, compartilhar opiniões, fazer reviews e interagir com outros membros da comunidade.
* **Autenticação de Usuário**: Um sistema de pop-up para login e cadastro, com opções de autenticação via Google, Facebook ou e-mail.
* **Interface Moderna e Responsiva**: O design é limpo, moderno e se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.

## Tecnologias Utilizadas

* **Frontend**:
    * **React**: Biblioteca principal para a construção da interface de usuário.
    * **TypeScript**: Garante um código mais robusto e com menos erros.
    * **Vite**: Ferramenta de build extremamente rápida para o desenvolvimento.
    * **React Router**: Para o gerenciamento das rotas da aplicação (`/`, `/gallery`, `/community`).
    * **React Slick**: Utilizado para criar os carrosséis de cards na página inicial.
    * **React Icons**: Para a inclusão de ícones em toda a aplicação.

* **Ferramentas de Desenvolvimento**:
    * **ESLint**: Para a linting do código, garantindo a qualidade e a padronização.
    * **Prettier** (Recomendado): Para a formatação automática do código.
## Como Executar o Projeto

1.  **Clone o repositório**:
    ```bash
    git clone <url-do-seu-repositorio>
    cd nao_sei_ainda
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

## Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento.
* `npm run build`: Compila o projeto para produção.
* `npm run lint`: Executa o linter para verificar a qualidade do código.
* `npm run preview`: Inicia um servidor local para visualizar a build de produção.
