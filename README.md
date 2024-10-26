## Colaboradores:

**Arthur Guaritá Brasil**: 22303654

**Hugo Ferreira Mattos**: Não sei



- **Aqui está o link do repositório original:** **[Repositório do projeto principal](https://github.com/web-ponto-tutu-e-os-guardioes/prog_principal)**

- **Aqui está o link do repositório do professor:** **[Repositório do projeto do professor](https://github.com/airtonbjunior/cc-b-ponto-eletronico)**


**Usados como referência para este sistema😁**

# Sistema de Controle de Ponto Eletrônico

## Descrição

Bem-vindo ao Ponto Mágico! 🚀 Este projeto é a criação de um sistema de controle de ponto eletrônico desenvolvido com os superpoderes de HTML, CSS e JavaScript – e "nada de frameworks ou bibliotecas externas", porque gostamos de viver perigosamente!

A missão? Criar uma aplicação web interativa e funcional, que salva os horários mágicos dos nossos usuários diretamente no LocalStorage (ou seja, sem nenhuma varinha externa!). Então, prepare-se para registrar seus pontos de maneira simples e, claro, com estilo!

## Funcionalidades

- Registro de ponto para dias anteriores ao atual (com marcação diferenciada).

- Registro de justificativa para ausência com upload de arquivo. Aceitos pdf, txt e imagem.

- Adição de observações a um registro de ponto.

- Edição de registros com diferenciação visual no relatório.

- Visualização de um relatório de pontos, com opção de editar ou excluir (exclusão apenas simula uma ação com um alerta).

- Filtros no relatório para exibir dados da última semana e do último mês.

- Integração com **API de Geolocalização** para registrar automaticamente a localização ao marcar o ponto.

- Visualização de mapa da localização onde o ponto foi registrado.

- Modo escuro/claro para acessibilidade.

- Calendário na página principal indicando dias com ponto de entrada registrado (em verde).

- Exportação dos registros para **.txt**.

- Geração de um gráfico que calcula as horas trabalhas de acordo com o horário da entrada e saída.

## Modelos

### Ponto atual

```json
{
    "data": "2024-10-25",
    "hora": "14:30",
    "localizacao": {
        "latitude": -23.550520,
        "longitude": -46.633308
    },
    "id": "1",
    "tipo": "Entrada",
    "obs": "Cheguei cedo!"
}
```

### Ponto no passado

```json
{
    "data": "2024-10-20",
    "hora": "09:15",
    "localizacao": {
        "latitude": -23.550520,
        "longitude": -46.633308
    },
    "id": "unique-id-5678",
    "tipo": "Saída",
    "isPastRegister": true,
    "obs": "Justificativa: Fui ao médico.",
    "arquivoNome": "laudo.pdf",
    "arquivoDados": "data:application/pdf;base64,..."
}
```

## Tecnologias Utilizadas
> **HTML**: para a estruturação do layout.

> **CSS**: para estilização e aplicação de temas de acessibilidade.

> **JavaScript**: para interação com a página, manipulação do LocalStorage, e integração com APIs.

> **LocalStorage**: utilizado para armazenar os dados dos registros de ponto localmente no navegador.

## Requisitos Mínimos

1. Registro de ponto:
   - Permitir registros de ponto em dias anteriores ao atual.
   - Bloquear registro de ponto para datas futuras.
   - Visualizar e editar os registros, com marcação diferenciada no relatório.

2. Justificativas:
   - Possibilidade de adicionar justificativas para ausência.
   - Upload de arquivo como parte da justificativa.

3. Relatório de registros:
   - Exibição de um relatório com horários de entrada, saída e intervalos.
   - Filtros para visualização de registros do último mês ou última semana.
   - Botões de edição e exclusão (a exclusão apenas exibe uma mensagem de alerta).
   - Edição atualiza os dados armazenados no LocalStorage.

4. Integração de Geolocalização:
   - Utilização da API de Geolocalização do navegador para capturar a localização ao registrar o ponto.
   - Exibição de um mapa indicando onde o ponto foi registrado.

5. Gráficos:
   - Transformar o relatório de horas trabalhadas em gráficos para melhor visualização dos dados.

6. Acessibilidade:
   - Modo escuro e modo claro para maior acessibilidade do usuário.

7. Calendário:
   - Exibir um calendário com dias em que houve registro de ponto de entrada e saída (marcados em verde).

8. Exportação:
   - Permitir exportar os registros de ponto para um arquivo **.txt**.