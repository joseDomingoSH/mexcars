const form = document.getElementById('form');
const nm = document.getElementById('nm');
const email = document.getElementById('em');
const res = document.getElementById('res');

//Se captura cuando das submit al boton
form.addEventListener('submit', (event) => {
    event.preventDefault();

    res.innerHTML = "";

    const errores = [];
    //Validación del campo Nombre
    if (nm.value.trim() === ""){
        errores.push("El nombre es obligatorio");
    }

    //Validacion del campo email
    if(email.value.trim() === ""){
        errores.push("El campo email es Obligatorio,");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        errores.push("El campo email debe tener un formato válido.");
    }

    // Mostrar mensajes de error si los hay
    if (errores.length > 0) {
        res.style.color = "red";
        res.innerHTML = errores.join("<br>");
    } else {
        // Si no hay errores, mostrar mensaje de éxito
        res.style.color = "green";
        res.innerHTML = "Formulario enviado correctamente.";
    }
});


