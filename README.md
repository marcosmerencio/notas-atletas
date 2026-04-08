# 🏅 Pontuação dos Atletas - Ginástica Artística
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>


# Descrição
Este projeto é uma aplicação lógica desenvolvida em JavaScript para automatizar o cálculo de pontuação em competições de ginástica artística. O sistema recebe dados de atletas e suas respectivas notas, aplica as regras oficiais de arbitragem (descarte de extremos) e retorna a média válida. Este projeto foi desenvolvido como o Projeto de Certificação 1 do curso de Desenvolvimento Fullstack da Geração Tech 3.0.


# Funcionalidades
- **Processamento de Dados:** Recebe uma matriz de objetos contendo nomes e notas.

- **Regra de Avaliação:** Identifica e desconsidera automaticamente a maior e a menor nota de cada atleta.

- **Cálculo de Média:** Calcula a média aritmética baseada exclusivamente nas três notas centrais.

- **Apresentação de Resultados:** Exibe no console o nome do atleta, todas as notas obtidas e a média final calculada.


# Regra de Negócio
A pontuação é definida por cinco jurados em critérios como originalidade, postura, dificuldade e sincronismo. A média válida é obtida da seguinte forma:

As cinco notas (de 1 a 10) são recebidas.

As notas são ordenadas.

A maior e a menor nota são eliminadas.

A média é calculada com as três notas restantes.


# Tecnologias Utilizadas
- **Node.js:** Ambiente de execução para rodar o script localmente.

- **JavaScript (ES6+):** Lógica principal utilizando métodos modernos como .sort(), .slice() e .forEach().


# Estrutura de Código Sugerida
O projeto utiliza padrões fundamentais de engenharia de software:

- **Laços de Repetição:** Uso de for para percorrer a lista de atletas.

- **Manipulação de Arrays:** Emprego de métodos funcionais para tratar as coleções de dados.

- **Separation of Concerns:** Separação entre a estrutura de dados (entrada) e a lógica de processamento.


# Exemplo de Saída
```Plaintext
Atleta: Cesar Abascal
Notas Obtidas: 10, 9.34, 8.42, 10, 7.88
Média Válida: 9.253333333333334

Atleta: Fernando Puntel
Notas Obtidas: 8, 10, 10, 7, 9.33
Média Válida: 9.11
```

# Como rodar o projeto
Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório ou crie um arquivo .js com o código do projeto.

Execute o script através do terminal:

```Bash
node nome-do-arquivo.js
```


# Autor
**Marcos Merencio** — Desenvolvedor Fullstack em formação.


# Licença
O **uso, cópia e distribuição** desse projeto são **permitidos para fins de estudo e aprendizagem.**