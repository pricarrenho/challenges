function getScoreDifference(numSeq) {
  let playerOne = 0; //pontos inciais do jogador 1
  let playerTwo = 0; //pontos inciais do jogador 2
  let user = "playerOne"; //ponteiro para indicar qual jogador está a vez de remover um número
  let isReverse = false; //ponteiro para indicar de qual index do array eu quero remover um número baseado em se ele é par ou impar

  //Enquanto a condição for verdadeira, execute o código abaixo
  //Condição: Ter elementos dentro do array numSeq
  while (numSeq.length) {
    let currentNumber = isReverse ? numSeq[numSeq.length - 1] : numSeq[0];
    //Meu ponteiro isReverse muda de onde eu devo tirar o número. No começo ou no final do array.
    //Variável para me dizer qual é o número atual usando o ponteiro como guia
    //Então se for par (true) ele vai ser o último número do array e se for impar (false) vai mostrar o primeiro número do array

    if (user === "playerOne") {
      playerOne += isReverse ? numSeq.pop() : numSeq.shift();
      user = "playerTwo";
    } else {
      playerTwo += isReverse ? numSeq.pop() : numSeq.shift();
      user = "playerOne";
    }

    //Muda o valor da variável isReverse
    //Ela por padrão começa false
    //Só vai mudar se o currentNumber for false (nesse caso par, porque o resto da divisão de um número par por dois é zero)
    if (!(currentNumber % 2)) {
      isReverse = !isReverse;
    }
  }

  //Math.abs para deixar o número sempre positivo
  return Math.abs(playerOne - playerTwo);
}

console.log(getScoreDifference([3, 6, 2, 3, 5]));
