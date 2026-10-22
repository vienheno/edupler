import { formulas } from "./formulas.js";

function insertarFormulas() {
  document.querySelectorAll("[data-formula]").forEach((contenedor) => {
    const nombre = contenedor.dataset.formula;
    if (formulas[nombre]) {
      contenedor.innerHTML = formulas[nombre];
    } else {
      console.warn(`Fórmula "${nombre}" no encontrada en formulas.js`);
    }
  });
}

//Guardamos el ID de la etiqueta nav en la variable navSup
//Y luego guardamos las etiquetas <a> que se encuentran dentro del navSub en la variable enlaces_nav (se guarda como node.list)
const navSup = document.querySelector("#navSup");
const enlaces_nav = document.querySelectorAll("#navSup a");

const main = document.querySelector("#page_main");

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
async function iniciar() {
  //await cargarHTML("assets/pages/inicio.html", "#page_main");
  await cargarHTML("assets/pages/expresiones_algebraicas/leyes_exponentes.html", "#page_main");
  insertarFormulas(); // ← una sola línea, rellena todo
}

//creamos un evento para que realice acciones al hacer click
//en algunas de las etiquetas <a> dentro del nav
navSup.addEventListener("click", async (e) => {

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
  await cargarHTML(`assets/pages/${enlace.id}.html`, "#page_main");
});

main.addEventListener("click", async (e) =>{
  const enlace = e.target.closest("a");

  if (!enlace) return;
  e.preventDefault();

  //Paginas que se cargaran por defecto al abrir un enlace
  if (enlace.id === "expresiones_algebraicas") {
    await cargarHTML(`assets/pages/expresiones_algebraicas/leyes_exponentes.html`, "#exp_alg");
    insertarFormulas();
  }
  
  // ¿El enlace está dentro de #nav_exp_alg?
  if (enlace.closest("#nav_exp_alg")) {
    await cargarHTML(`assets/pages/expresiones_algebraicas/${enlace.id}.html`, "#exp_alg");
    insertarFormulas();
  } else {
    await cargarHTML(`assets/pages/${enlace.id}.html`, "#page_main");
    //insertarFormulas();
  }
  //cargarHTML(`assets/pages/${enlace.id}.html`, "#page_main");
});

iniciar();

