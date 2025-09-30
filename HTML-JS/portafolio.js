// Seleccionamos el botón y la barra lateral
const toggle = document.getElementById("menu-toggle");
const barraLateral = document.querySelector(".barra-lateral");

// Evento: abrir/cerrar barra lateral
toggle.addEventListener("click", () => {
    barraLateral.classList.toggle("active");
});