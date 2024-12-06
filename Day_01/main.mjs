import { achaIgual } from "./algoritmo.mjs";

async function recupera_dados() {
  const dados = [];

  try {
    const response = await fetch("https://adventofcode.com/2024/day/1/input", {
      headers: {
        Cookie:
          "session=53616c7465645f5fba7c44f62baed5fb41c830af65297e78628a327cf8e5cbd2c187d5170290ce24dce3dd1a52cd67a7a58d71703a9bc459641237a15ecad11b",
      },
    });

    if (response.ok) {
      const data = await response.text();
      dados.push(data);
      return dados;
    } else {
      console.error(response.status);
    }
  } catch (error) {
    console.log(error);
  }

  return dados;
}

async function separar_linhas() {
  const dados = await recupera_dados();
  if (dados.length > 0) {
    const texto = dados[0];
    const linhas = texto.trim().split("\n");

    const lista1 = [];
    const lista2 = [];

    linhas.forEach((element) => {
      const [num1, num2] = element.trim().split(/\s+/);
      lista1.push(parseInt(num1));
      lista2.push(parseInt(num2));
    });

    return [[lista1], [lista2]];
  } else {
    return 0;
  }
}

async function main() {
  const numeros = await separar_linhas();
  console.log(achaIgual(numeros[0], numeros[1]));
}
main();
