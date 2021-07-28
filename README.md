
# TESTE WA

Todos os items do teste foram feitos, incluindo o deploy no Heroku e CI/CD. Todo o projeto pode ser rodado via Docker, usando `docker-compose up` ou com `npm start` se já tiver um banco rodando. Caso, já tenha, é necessário uma variável de ambiente chamada `DATABASE_URL` com a url de login do banco `postgresql://root:pwd@host:3306/database`. Também é possível usar `docker-compose up -d db`.

A API foi documentada usando o Postman, o JSON dele foi exportado para [este link](https://www.postman.com/collections/0b69a4e6c6b62e8437f1). O projeto foi hospedado usando Heroku, [neste link](https://teste-wa.herokuapp.com/) 
  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1480184-671f4fb1-a9cc-4f6a-8567-4fef49e17a25?action=collection%2Ffork&collection-url=entityId%3D1480184-671f4fb1-a9cc-4f6a-8567-4fef49e17a25%26entityType%3Dcollection%26workspaceId%3Ddd9ff0a8-b7a9-49f8-80b9-f0b223d6c5cf)


# O Teste

O objetivo do teste é:
- Construir uma API para manutenção de laboratórios e exames.
## Contexto
Estamos desenvolvendo uma aplicação para as seguintes situações:
- Laboratório:
  - cadastrar um novo laboratório;
  - obter uma lista de laboratórios ativos;
  - atualizar um laboratório existente;
  - remover logicamente um laboratório ativo.
- Exames:
  - cadastrar um novo exame;
  - obter uma lista de exames ativos;
  - atualizar um exame existente;
  - remover logicamente um exame ativo.
  
- Associação:
  - associar um exame ativo à um laboratório ativo;
  - desassociar um exame ativo de um laboratório ativo;
  **Importante:**
  - Um exame pode estar associado a mais de um laboratório;
  - O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.
### Informações
- Laboratório
  - nome
  - endereço
  - status [ativo, inativo]
- Exame
  - nome
  - tipo [analise clinica, imagem]
  - status [ativo, inativo]
## Funcionalidades extras
- Possibilidade de executar cadastro, atualização e remoção em lote;
- Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.
## Requisitos técnicos
- Desenvolver usando *Javascript*
- Serviço deve respeitar os princípios RESTFul
- Criar um `README.md` (arquitetura, instruções de uso, entre outros)
## Diferenciais
- Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc)
- Configurar a aplicação para rodar em um container
- Documentação da API
