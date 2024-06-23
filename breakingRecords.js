function breakingRecords(scores) {
  let max = 0;
  let min = 0;
  let table = [];

  for (let index = 0; index < scores.length; index++) {
    const currentValue = scores[index];

    if (!table.length) {
      table.push(currentValue);
    } else if (table.length === 1) {
      if (currentValue > table[0]) {
        max += 1;
        table.push(currentValue);
      } else if (currentValue < table[0]) {
        min += 1;
        table.unshift(currentValue);
      }
    } else {
      if (currentValue < table[0]) {
        min += 1;
        table[0] = currentValue;
      } else if (currentValue > table[1]) {
        max += 1;
        table[1] = currentValue;
      }
    }
  }

  return [max, min];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
