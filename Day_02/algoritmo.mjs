export function algoritmoFinal(numeros) {
  let listaSeparada = [];

  for (let i = 0; i < numeros.length; i++) {
    listaSeparada.push(cortar(numeros[i]));
  }
  calcular(listaSeparada);
}

function cortar(linha) {
  if (!linha) return [];
  return linha.trim().split(/\s+/);
}

function calcular(lista) {
  for (let i = 0; i < lista.length; i++) {
    verificarNivel(lista[i]);
  }
}

function verificarNivel(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
