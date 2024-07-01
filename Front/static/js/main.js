const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const loginForm = document.querySelector("#loginForm");
const abrirLogin = document.querySelector("#abrirLogin");
const cerrarLogin = document.querySelector("#cerrarLogin");
const ingresar = document.querySelector("#ingresar")

abrirLogin.addEventListener("click", () => {
    loginForm.classList.add("visible");
})

cerrarLogin.addEventListener("click", () => {
    loginForm.classList.remove("visible");
})

ingresar.addEventListener("click", () => {
    loginForm.classList.remove("visible");
})