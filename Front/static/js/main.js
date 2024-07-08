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
const administrador = document.querySelector("#Administrador")

var clave = document.getElementById('clave')
var usuario = document.getElementById('usuario')


abrirLogin.addEventListener("click", () => {
    loginForm.classList.add("visible");
})

cerrarLogin.addEventListener("click", () => {
    loginForm.classList.remove("visible");
})

ingresar.addEventListener("click", () => {
    if (usuario.value === 'Admin' & clave.value === 'Admin') {
        administrador.classList.add("visible");
        alert("Inicio de sesión exitoso");
        loginForm.classList.remove("visible");
    }
    else{
        alert("Usuario o contraseña incorrectos")
    }
})