document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  const niveles = document.getElementById("niveles");
  const cursos = document.getElementById("cursos");
  const examenes = document.getElementById("examenes");

  const navSup = document.querySelector("#navSup");
  const enlaces = document.querySelectorAll("#navSup a");
  navSup.addEventListener("click", (e) => {
    const COLOR_ACTIVO = "bg-gray-400";
    const enlace = e.target.closest("a");

    if (!enlace) return;
    e.preventDefault();

    enlaces.forEach((a) => {
      a.classList.remove(COLOR_ACTIVO);
    });
    enlace.classList.add(COLOR_ACTIVO);
    //enlace.style.backgroundColor = "gray";
  });
});
