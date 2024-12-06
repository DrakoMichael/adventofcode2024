export function achaIgual(lista1, lista2) {
  const listaA = lista1[0].sort((a, b) => a - b);
  const listaB = lista2[0].sort((a, b) => a - b);

  let distanciaTotal = 0;

  for (let i = 0; i < listaA.length; i++) {
    distanciaTotal += Math.abs(listaA[i] - listaB[i]);
  }

  return distanciaTotal;
}
