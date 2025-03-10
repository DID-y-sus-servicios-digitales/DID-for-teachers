// Función para guardar el valor del área de texto en una cookie
function guardarTexto() {
  let texto = document.getElementById("miAreaTexto").value;
  document.cookie = "miTexto=" + texto + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para leer el valor de la cookie y restaurar el área de texto
function restaurarTexto() {
  let texto = getCookie("miTexto");
  if (texto != "") {
    document.getElementById("miAreaTexto").value = texto;
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

// Guardar el texto cuando el usuario escribe en el área de texto
document.getElementById("miAreaTexto").addEventListener("input", guardarTexto);

// Restaurar el texto al cargar la página
restaurarTexto();
