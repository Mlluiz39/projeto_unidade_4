# Controle de Estoque - Aplicativo React Native

## Descrição
Este é um aplicativo móvel desenvolvido em React Native utilizando o framework Expo, que permite o controle de estoque de uma empresa. O aplicativo oferece recursos para adicionar, visualizar, atualizar e excluir produtos do estoque. Ele se integra com uma API desenvolvida em Node.js, que utiliza um banco de dados PostgreSQL para armazenar os dados e o serviço Cloudinary para armazenar as fotos dos produtos.

## Funcionalidades
O aplicativo possui as seguintes funcionalidades:

- Registro de produtos: permite adicionar novos produtos ao estoque, incluindo informações como nome, descrição, preço e quantidade inicial, bem como uma foto do produto.
- Listagem de produtos: exibe uma lista de todos os produtos no estoque, incluindo informações como nome, preço e quantidade disponível.
- Atualização de produtos: permite atualizar as informações de um produto existente, incluindo nome, descrição, preço, quantidade e foto.
- Exclusão de produtos: possibilita excluir um produto do estoque.

## Tecnologias Utilizadas
O aplicativo utiliza as seguintes tecnologias:

- React Native: framework JavaScript para o desenvolvimento de aplicativos móveis.
- Expo: plataforma para construção de aplicativos React Native que facilita o desenvolvimento e o acesso a recursos nativos do dispositivo.
- React Navigation: biblioteca para navegação entre telas.
- Axios: cliente HTTP para fazer requisições à API.
- Node.js: ambiente de execução JavaScript do lado do servidor.
- PostgreSQL: banco de dados relacional para armazenar os dados do aplicativo.
- Cloudinary: serviço de armazenamento de mídia na nuvem, usado para armazenar as fotos dos produtos.

## Pré-requisitos
Antes de iniciar o aplicativo, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js: versão 12 ou superior
- Expo CLI: para instalar, execute o seguinte comando:

  npm install -g expo-cli


- Conta Cloudinary: crie uma conta no Cloudinary (https://cloudinary.com/) para obter as credenciais de acesso ao serviço.
- Banco de dados PostgreSQL: instale e configure um banco de dados PostgreSQL em seu ambiente local ou utilize uma instância hospedada.

## Configuração
Siga as etapas abaixo para configurar o aplicativo:

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto e execute o comando `npm install` para instalar todas as dependências.
3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

    API_BASE_URL=<URL-da-API>

    CLOUDINARY_CLOUD_NAME=<seu-cloud-name>

    CLOUDINARY_API_KEY=<sua-api-key>

    CLOUDINARY_API_SECRET=<seu-api-secret>


4. Configure o acesso ao banco de dados PostgreSQL no arquivo `config/db.js` fornecendo as informações de conexão corretas.
5. Inicie a API do Node.js com o comando `npm run start` para iniciar o servidor.
6. Inicie o servidor de desenvolvimento do Expo com o comando `expo start`.
7. Use um emulador de dispositivo móvel ou o aplicativo Expo Go em seu dispositivo físico para executar o aplicativo.

## Contribuição
Contribuições são bem-vindas! Se você quiser melhorar este aplicativo, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com a nova funcionalidade: `git checkout -b minha-nova-funcionalidade`.
3. Faça as alterações necessárias e adicione os commits: `git commit -m 'Minha nova funcionalidade'`.
4. Envie as alterações para o repositório remoto: `git push origin minha-nova-funcionalidade`.
5. Abra um pull request para revisão das alterações.


