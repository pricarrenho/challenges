function getScoreDifference(numSeq) {
  let playerOne = 0;
  let playerTwo = 0;
  let userPointer = "playerOne";
  let isReverse = false;

  while (numSeq.length) {
    let current = isReverse ? numSeq[numSeq.length - 1] : numSeq[0];

    if (userPointer === "playerOne") {
      playerOne += isReverse ? numSeq.pop() : numSeq.shift();
      userPointer = "playerTwo";
    } else {
      playerTwo += isReverse ? numSeq.pop() : numSeq.shift();
      userPointer = "playerOne";
    }

    if (!(current % 2)) {
      isReverse = !isReverse;
    }
  }

  return playerOne - playerTwo;
}

console.log(getScoreDifference([3, 6, 2, 3, 5]));
