// Función para guardar el valor del contador en una cookie
function guardarContador(valor) {
  document.cookie = "contador=" + valor + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para leer el valor del contador de una cookie
function leerContador() {
  let contador = getCookie("contador");
  if (contador != "") {
    return parseInt(contador);
  } else {
    return 0; // Valor inicial si no hay cookie
  }
}

// Función auxiliar para leer una cookie (la misma que antes)
function getCookie(nombre) {
  let name = nombre + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Ejemplo de uso
let contador = leerContador(); // Leer el valor inicial de la cookie
document.getElementById("contador").textContent = contador; // Mostrar el valor en la página

// Función para incrementar el contador y guardar el valor
function incrementarContador() {
  contador++;
  document.getElementById("contador").textContent = contador;
  guardarContador(contador); // Guardar el valor actualizado en la cookie
}
