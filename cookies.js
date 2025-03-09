// Función para guardar los datos en cookies
function guardarDatos() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  document.cookie = "nombre=" + nombre + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  document.cookie = "apellido=" + apellido + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para leer los datos de las cookies y restaurar los campos de texto
function restaurarDatos() {
  let nombre = getCookie("nombre");
  let apellido = getCookie("apellido");
  if (nombre != "") {
    document.getElementById("nombre").value = nombre;
  }
  if (apellido != "") {
    document.getElementById("apellido").value = apellido;
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

// Restaurar los datos al cargar la página
restaurarDatos();
