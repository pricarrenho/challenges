function processData(input) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXZWY";

  const splitDefault = (value) => {
    let result = value.split("").map((item) => {
      if (uppercaseLetters.includes(item)) {
        return " " + item;
      }

      return item;
    });

    //join and transform toLowerCase
    result = result.join("").toLowerCase();

    //remove empty spaces at start and end
    result = result.trim();

    //remove function brackets
    result = result.replace("()", "");

    console.log(result);
  };

  const joinFunction = (value) => {
    let result = value.split(" ").map((item, index) => {
      if (index) {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
      }

      return item;
    });

    result = result.join("") + "()";

    console.log(result);
  };

  const joinVariable = (value) => {
    let result = value.split(" ").map((item, index) => {
      if (index) {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
      }

      return item;
    });

    result = result.join("");

    console.log(result);
  };

  const joinClass = (value) => {
    let result = value.split(" ").map((item) => {
      return item.slice(0, 1).toUpperCase() + item.slice(1);
    });

    result = result.join("");

    console.log(result);
  };

  input.split(/\r?\n/).forEach((item) => {
    const newArray = item.split(";");

    const key = newArray[0] + newArray[1];

    const dictionary = {
      SV: () => splitDefault(newArray[2]),
      SM: () => splitDefault(newArray[2]),
      SC: () => splitDefault(newArray[2]),
      CV: () => joinVariable(newArray[2]),
      CM: () => joinFunction(newArray[2]),
      CC: () => joinClass(newArray[2]),
    };

    dictionary[key] && dictionary[key]();
  });
}

// processData(["C;V;mobile phone", "C;C;mobile phone", "C;M;mobile phone"]);
processData(`S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`);

//s - separa, tudo minusculo
//c - junta

//m - função, se juntar é  como came case e coloca () de função. se separar remover o ()
//v - variável, se juntar é como came case
//c - classe, se juntar é como came case, porém a primeira também é maiúscula
