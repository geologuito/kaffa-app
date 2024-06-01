/* let calidad = document.getElementsByName("calidad");
let pasteleria = document.getElementsByName("pasteleria");
let ambiente = document.getElementsByName("ambiente");
let servicio = document.getElementsByName("servicio");
let variedad = document.getElementsByName("variedad");
let arquitectura = document.getElementsByName("arquitectura");
let comodidad = document.getElementsByName("comodidad");
let limpieza = document.getElementsByName("limpieza");
let inputPromedio = document.getElementsByName("promedio");

let suma = 0
calidad.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
pasteleria.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
ambiente.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
servicio.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
variedad.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
arquitectura.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
comodidad.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
limpieza.forEach(element => {
    if (element.checked) {
        suma+=parseInt(element.value)
    }
});
let promedio = suma / 8

console.log(Math.floor(promedio))

inputPromedio.forEach(element =>{
if (element.value == Math.floor(promedio)){
    element.checked = true
}
REPETITIVO INVESTIGAR COMO MEJORAR
}); */

const categories = ["calidad", "pasteleria", "ambiente", "servicio", "variedad", "arquitectura", "comodidad", "limpieza"];
        const inputPromedio = document.getElementsByName("promedio");
        const valorPromedio = document.getElementById("valorPromedio");

        function calcularPromedio() {
            let suma = 0;

            categories.forEach(category => {
                const elements = document.getElementsByName(category);
                elements.forEach(element => {
                    if (element.checked) {
                        suma += parseInt(element.value);
                    }
                });
            });

            let promedio = suma / categories.length;
            return promedio;
        }

        function actualizarPromedio() {
            let promedio = calcularPromedio();
            let promedioRedondeado = Math.floor(promedio)
            console.log(promedioRedondeado);
            valorPromedio.innerText = promedio.toFixed(1);

            inputPromedio.forEach(element => {
                element.checked = parseInt(element.value) === promedioRedondeado;
            });  
        }

        // Añadir event listeners a todos los inputs de estrellas
        categories.forEach(category => {
            const elements = document.getElementsByName(category);
            elements.forEach(element => {
                element.addEventListener('change', actualizarPromedio);
            });
        });
        function resetForm() {
            document.getElementById("ratingForm").reset();
        }
        window.onload = function() {
            resetForm();
            actualizarPromedio();
        };