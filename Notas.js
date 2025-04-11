function calcularNota() {
  var num, bien, notanum, notacual;
  num = parseInt(prompt("Escribe el número total de preguntas", ""));
  bien = parseInt(prompt("Escribe el número de respuestas acertadas", ""));
  notanum = parseInt(10 * bien / num);

  switch (notanum) {
    case 0:
    case 1:
      notacual = "Muy Deficiente";
      break;
    case 2:
    case 3:
      notacual = "Deficiente";
      break;
    case 4:
      notacual = "Insuficiente";
      break;
    case 5:
      notacual = "Suficiente";
      break;
    case 6:
      notacual = "Bien";
      break;
    case 7:
    case 8:
      notacual = "Notable";
      break;
    case 9:
      notacual = "Excelente";
      break;
    case 10:
      notacual = "Sobresaliente";
      break;
    default:
      notacual = "Error en los datos";
  }
  alert("La nota cualitativa es " + notacual);
}
