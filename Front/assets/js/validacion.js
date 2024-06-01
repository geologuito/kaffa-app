function validarEnviar(){
    parrafo = document.getElementById("error")
    // ANALIZO EL NOMBRE
    if(document.formulario.nombre.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.formulario.nombre.focus()
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }
    // ANALIZO EL APELLIDO
    if(document.formulario.apellido.value.length <= 2){
        // alert("Ingrese un apellido correcto.")
        document.formulario.apellido.focus()
        parrafo.innerHTML = "Apellido incorrecto."
        return
    }

    // ANALIZO LA EDAD
    let edadEntera = parseInt(document.formulario.edad.value)
    if(isNaN(edadEntera)){
        // alert("Tiene que ingresar un número valido en la edad.")
        document.formulario.edad.focus()
        parrafo.innerHTML = "Edad incorrecta."
        return
    }
    else{
        if(edadEntera < 16 || edadEntera > 99){
            // alert("Tiene que ser mayor de 16 años o tener menos de 99 años.")
            document.formulario.edad.focus()
            parrafo.innerHTML = "Edad incorrecta."
            return 
        }
    }
    // ANALIZO EL DNI
    let DNIentero = parseInt(document.formulario.dni.value)
    if(isNaN(DNIentero)){
        // alert("Tiene que ingresar un número valido en el DNI.")
        document.formulario.dni.focus()
        parrafo.innerHTML = "DNI incorrecto."
        return
    }
    else{
        if(document.formulario.dni.value.length != 8){
            // alert("El dni tiene que tener 8 numeros.")
            document.formulario.dni.focus()
            parrafo.innerHTML = "DNI incorrecto."
            return 
        }
    }
    // ANALIZO CORREO
    let correo = (document.formulario.correo.value);
    let arroba = false;
        for(i=0; i<correo.length; i++){
            if(correo[i]==="@"){
            arroba = true;
            break;    
            }
        }
            if(!arroba){
            document.formulario.correo.focus()
            parrafo.innerHTML = "Correo erroneo. Falta el @"
            return
        }

    // ANALIZO ESPACIOS EN PASSWORD
    let passWord = document.formulario.contraseña.value;
    if (passWord.includes(" ")) {
        document.formulario.contraseña.focus();
        parrafo.innerHTML = "Contraseña incorrecta. No puede contener espacios.";
        return;
    }
        if (passWord.length < 8) {
        document.formulario.contraseña.focus();
        parrafo.innerHTML = "Contraseña incorrecta. Por lo menos debe tener 8 caracteres.";
        return;
        }
        
        parrafo.innerHTML = "Gracias por completar el formulario!"
        document.formulario.submit()
        limpiarFormulario();
    }
    function limpiarFormulario() {
        let formulario = document.getElementById("formulario");
        formulario.reset(formulario);
        return false;
    }