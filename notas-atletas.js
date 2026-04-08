let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

function calcularMediaAtletas(objAtletas) {
    // 1. Percorrer cada atleta da matriz
    for (let i = 0; i < objAtletas.length; i++) {
        let nomeAtleta = objAtletas[i].nome;
        let notasOriginal = objAtletas[i].notas;

        // 2. Ordenar as notas de forma crescente
        // O sort() padrão trata números como strings, por isso usamos a função de comparação (a, b)
        let notasOrdenadas = notasOriginal.sort(function(a, b) {
            return a - b;
        });

        // 3. Eliminar a menor (índice 0) e a maior nota (último índice)
        // O slice(1, 4) pega os itens dos índices 1, 2 e 3
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // 4. Calcular a soma das notas restantes usando forEach
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma = soma + nota;
        });

        // 5. Calcular a média válida
        let mediaValida = soma / notasComputadas.length;

        // 6. Apresentar os resultados formatados
        console.log(`Atleta: ${nomeAtleta}`);
        console.log(`Notas Obtidas: ${notasOriginal}`);
        console.log(`Média Válida: ${mediaValida}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Executar a função com a entrada fornecida
calcularMediaAtletas(atletas);