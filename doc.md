# Search Github - Documentação

O projeto foi desenvolvido pensando em uma arquitetura de serviços, para isso foi estruturado usando AngularJs para consumo da API rest do Github, tratamento dessas informações e envio posterior para o usuário final.

A seguir é detalhado como foi o processo de desenvolvimento, ideias, conceitos, tecnologias utilizadas e possíveis melhorias.

## Processo de Desenvolvimento:

O desenvolvimento priorizou a construção de serviços que possam ser utilizados por diferentes páginas, desse modo tornando o código mais reutilizável e diminuindo o número de requisições, consequentemente é acrescido performance a aplicação.

## Tecnologias:

1. NPM: Utilizado para o controle de dependências por ser de fácil configuração e atualizado com as boas práticas recomendadas pela comunidade de desenvolvimento.

2. AngularJS: Aplicado para facilitar o consumo de API, definição de rotas de navegação e arquitetura (Controler; Service; View). Apesar de atualmente já existir React e Angular com TypeScript, foi adotado o Angular em sua versão inicial para estudo de projetos legados.

3. CSS Grid: Aplicado por se tratar de uma das formas mais atuais para a construção de layouts. Este facilita o desenvolvimento de elementos adaptáveis, sem a necessidade de positions, float e margin. 

## Arquitetura do Projeto:

1. O projeto está divido em Scripts Styles e Views;

1. 1. Dentro de Scripts é separado Controllers e Services;

1. 1. 1. Controllers fazem a comunicação com as Views e Services. Ou seja, verificam o que a View deseja, solicita a informação para algum Service, recebe tais informações e as entrega para a View.

1. 1. 2. Services recebem solicitações de Controllers, após isso consome a API e retorna para o Controller a informação requerida.

1. 2. Styles Arquivo css encarregado de estilizar as views.

1. 3. Views apresentam as insformações no navegador para o usuário.

## Detalhes da Arquitetura do Projeto:

1. main.controller: recebe da view a solicitação de buscar um usuário no Github, consome o user.service. Caso receba um retorno positivo o usuário é passado para a view, do contrário é retornado usuário não encontrado.

1. 1. user.service: serviço de consulta a usuário no Github.

2. user.controller: solicita as informações detalhadas do usuário. Também utiliza o user.service, desse modo minimiza o número de requisições na API.

3. repo.controller: Solicita os repositórios do usuário, essa requisição é feita para o repo.service. Neste controller é tratado o modo de exibição dos repositórios, se serão ordenados de acordo com suas estrelas, disponibiliza a opção de exibir decrescente ou crescente. Envia o usuário para a página que terá os detalhes de um repositório especifico.

3. 1. repo.service: solicita os repositórios de um usuário especifico para a API go Github.

4. detailsRepo.controller: faz uso do user.service e detailsRepo.service, desse modo reutiliza serviços, tornando o código reutilizável entre os controllers.

4. 1. detailsRepo.service: Solicita a API informações detalhadas de um repositório especifico. Este se comunica com user.service para minimizar consultas e reutilizar serviços.

## Instruções de Execução:

1. É necessário instalar as dependências do projeto, para isso basta ter o Node e NPM instalados na máquina e executar o comando npm install na pasta raiz.

2. Após a instalação execute o comando npm start.

## Possíveis melhorias:

1. Tornar as URLs amigáveis para SEO.

2. Enriquecer visualmente a interface para o usuário.

3. Tratar o refresh das páginas (perda de dados em refresh)