document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");
  const cursos = document.getElementById("cursos");
  const examenes = document.getElementById("examenes");

  //Guardamos el ID de la etiqueta nav en la variable navSup
  //Y luego guardamos las etiquetas <a> que se encuentran dentro del navSub en la variable enlaces_nav (se guarda como node.list)
  const navSup = document.querySelector("#navSup");
  const enlaces_nav = document.querySelectorAll("#navSup a");

  const contenido = document.querySelector("#contenido");
  const enlaces_contenido = document.querySelectorAll("#contenido a")
  
  //Creamos una funcion para cargar un archivo HTML dentro de un 
  // contenedor que está en otro archivo HTML 
  async function cargarHTML(url, destino) {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
      const html = await respuesta.text();
      document.querySelector(destino).innerHTML = html;
    } catch (error) {
      console.error("No se pudo cargar el archivo:", error);
    }
  }

  //Llamamos a la funcion para que cargue inicio.html automaticamente
  //al cargar la pagina principal (ingex.html)
  cargarHTML("assets/pages/expresiones-algebraicas.html", "#contenido");

  //creamos un evento para que realice acciones al hacer click
  //en algunas de las etiquetas <a> dentro del nav
  navSup.addEventListener("click", (e) => {

    //Accion de cambiar el color del background del la etiqueta <a>
    const COLOR_ACTIVO = "bg-gray-400";
    const enlace = e.target.closest("a");

    if (!enlace) return;
    e.preventDefault();

    enlaces_nav.forEach((a) => {
      a.classList.remove(COLOR_ACTIVO);
    });
    enlace.classList.add(COLOR_ACTIVO);

    //Se llama a la funcion cargarHTML para que coloque el archivo HTML
    //dentro del contenedor con id="contenedor"
    cargarHTML(`assets/pages/${enlace.id}.html`, "#contenido");
  });

  contenido.addEventListener("click", (e) =>{
    const enlace = e.target.closest("a");

    if (!enlace) return;
    e.preventDefault();

    cargarHTML(`assets/pages/${enlace.id}.html`, "#contenido");
  });
});
