const boton = document.getElementById('mi-boton');
const divOriginal = document.getElementById('mi-div');
const contenedor = document.getElementById('contenedor'); 

boton.addEventListener('click', () => {
  // Clona el div original
  const divClonado = divOriginal.cloneNode(true);

  // Agrega el div clonado al contenedor
  contenedor.appendChild(divClonado); 
});
