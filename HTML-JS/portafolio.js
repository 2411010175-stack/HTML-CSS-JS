// Seleccionamos el botón y la barra lateral
const toggle = document.getElementById("menu-toggle");
const subtitulo = document.getElementById("Subtitulossss");
const barraLateral = document.querySelector(".barra-lateral");

// Evento: abrir/cerrar barra lateral
toggle.addEventListener("click", () => {
    barraLateral.classList.toggle("active");
});
subtitulo.addEventListener("click", () => {
    barraLateral.classList.toggle("active");
});