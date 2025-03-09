// Función para guardar el valor del campo de texto en una cookie
function guardarValor() {
  let valor = document.getElementById("miCampo").value;
  document.cookie = "miCampoValor=" + valor + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para leer el valor de la cookie y restaurar el campo de texto
function restaurarValor() {
  let valor = getCookie("miCampoValor");
  if (valor != "") {
    document.getElementById("micampo").value = valor;
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

// Guardar el valor cuando el usuario escribe en el campo de texto
document.getElementById("miCampo").addEventListener("input", guardarValor);

// Restaurar el valor al cargar la página
restaurarValor();
