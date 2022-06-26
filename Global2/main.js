function validarDatos() {
    let cuadroTelefono = document.getElementById("numero");
    let phone = /^\d{9}$/;


    if (cuadroTelefono.value.match(phone)) {
        return true;
    } else {
        //alert("rellene el cuadro telefono ES OBLIGATORIO")

        return false;
    }
}


function agregarContacto() {



    let newCorrelativo = document.createElement("td")
    let newNombre = document.createElement("td")
    let newApellido = document.createElement("td")
    let newDireccion = document.createElement("input")
    let newEmail = document.createElement("input");
    let newTelefono = document.createElement("input");
    let newOrganizacion = document.createElement("input");




    let cuadroCorrelativo = document.getElementById("correlativo");
    let cuadroApellido = document.getElementById("apellido");
    let cuadroNombre = document.getElementById("nombre");
    let cuadroDireccion = document.getElementById("direccion");
    let cuadroEmail = document.getElementById("correo");
    let cuadroTelefono = document.getElementById("numero");
    let cuadroOrganizacion = document.getElementById("organizacion");

    if (cuadroNombre.value == '' &&
        cuadroNombre.type == 'text') {
        //alert("rellene el cuadro Nombre ES OBLIGATORIO");
        return false;
    } else if (cuadroApellido.value == '' &&
        cuadroApellido.type == 'text') {
        //alert("rellene el cuadro Apellido ES OBLIGATORIO")
        return false;
    } else if (validarDatos() == false) {

        return false;
    }


    //ordenar por numero
    let lastId = document.getElementById("lastId")


    newCorrelativo.textContent = lastId.value.toUpperCase();
    newApellido.textContent = cuadroApellido.value.toUpperCase();
    newNombre.textContent = cuadroNombre.value.toUpperCase();
    newApellido.setAttribute("id", cuadroApellido.value.toUpperCase());
    newNombre.setAttribute("id", cuadroNombre.value.toUpperCase());
    newDireccion.setAttribute("type", "hidden");
    newDireccion.setAttribute("value", cuadroDireccion.value.toUpperCase());
    newEmail.setAttribute("type", "hidden");
    newEmail.setAttribute("value", cuadroEmail.value.toUpperCase());
    newTelefono.setAttribute("type", "hidden");
    newTelefono.setAttribute("value", cuadroTelefono.value.toUpperCase());
    newOrganizacion.setAttribute("type", "hidden");
    newOrganizacion.setAttribute("value", cuadroOrganizacion.value.toUpperCase());







    let newTr = document.createElement("tr");
    newTr.prepend(newCorrelativo);
    newTr.appendChild(newApellido);
    newTr.appendChild(newNombre);
    newTr.appendChild(newDireccion);
    newTr.appendChild(newEmail);
    newTr.appendChild(newTelefono);
    newTr.appendChild(newOrganizacion);


    //agregar por numero
    newTr.id = lastId.value;
    lastId.value++;
    cuadroCorrelativo.max = lastId.value - 1


    //ordenar por letras
    let letraIns = cuadroApellido.value.charAt(0).toUpperCase();


    cuadroCorrelativo.value = "";
    cuadroApellido.value = "";
    cuadroNombre.value = "";
    cuadroDireccion.value = "";
    cuadroEmail.value = "";
    cuadroTelefono.value = "";
    cuadroOrganizacion.value = "";





    let oldTable = document.getElementById("tabla" + letraIns);
    oldTable.prepend(newTr);









}

//Buscar Contacto

function buscarContacto() {

    let ptoCorrelativo = document.getElementById("correlativo")
    let resNombre = document.getElementById("nombre")
    let resApellido = document.getElementById("apellido")
    let resDireccion = document.getElementById("direccion")
    let resEmail = document.getElementById("correo")
    let resTelefono = document.getElementById("numero")
    let resOrg = document.getElementById("organizacion")
    let ptoResultado = document.getElementById("resultado")
    let opcionAgregar = document.getElementById("opcionAgregar")

    let contacto = document.getElementById(correlativo.value);

    if (contacto != undefined) {
        resApellido.value = contacto.firstElementChild.nextElementSibling.textContent
        resApellido.setAttribute("disabled", true);
        resNombre.value = contacto.firstElementChild.nextElementSibling.nextElementSibling.textContent
        resNombre.setAttribute("disabled", true)

        resDireccion.value = contacto.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value
        resDireccion.setAttribute("disabled", true)
        resEmail.value = contacto.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
        resEmail.setAttribute("disabled", true)

        resTelefono.value = contacto.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
        resTelefono.setAttribute("disabled", true)

        resOrg.value = contacto.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
        resOrg.setAttribute("disabled", true)

        opcionAgregar.setAttribute("disabled", true)

        ptoCorrelativo.value = "";
        return;

    } else {
        ptoCorrelativo.value = "";
        ptoResultado.textContent = "Contacto no encontrado."

    }

}

function busquedaContacto() {

    let infoContacto = document.getElementById("busqueda")

    let resNombre = document.getElementById("nombre")
    let resApellido = document.getElementById("apellido")
    let resDireccion = document.getElementById("direccion")
    let resEmail = document.getElementById("correo")
    let resTelefono = document.getElementById("numero")
    let resOrg = document.getElementById("organizacion")
    let ptoResultado = document.getElementById("resultado")
    let opcionAgregar = document.getElementById("opcionAgregar")


    let uno = document.getElementById(infoContacto.value.toUpperCase())
    do {


        if (uno != undefined) {
            let tablas = uno.parentNode;
            resApellido.value = tablas.firstElementChild.nextElementSibling.textContent
            resApellido.setAttribute("disabled", true);
            resNombre.value = tablas.firstElementChild.nextElementSibling.nextElementSibling.textContent
            resNombre.setAttribute("disabled", true)

            resDireccion.value = tablas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value
            resDireccion.setAttribute("disabled", true)
            resEmail.value = tablas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
            resEmail.setAttribute("disabled", true)

            resTelefono.value = tablas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
            resTelefono.setAttribute("disabled", true)

            resOrg.value = tablas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value
            resOrg.setAttribute("disabled", true)


            opcionAgregar.setAttribute("disabled", true)


            infoContacto.value = "";
            return;

        }

    } while (uno != null)
    infoContacto.value = "";

    ptoResultado.textContent = "Contacto no encontrado.";
}



function borrarContacto() {

    let ptoCorrelativo = document.getElementById("correlativo")
    let ptoResultado = document.getElementById("resultado")


    let contacto = document.getElementById(ptoCorrelativo.value);

    if (contacto != undefined) {

        contacto.parentNode.removeChild(contacto);
        ptoCorrelativo.value = "";
        return;
    } else {
        ptoCorrelativo.value = "";
        ptoResultado.textContent = "Contacto no encontrado.";
    }
}



function limpiarContacto() {
    let resNombre = document.getElementById("nombre")
    let resApellido = document.getElementById("apellido")
    let resDireccion = document.getElementById("direccion")
    let resEmail = document.getElementById("correo")
    let resTelefono = document.getElementById("numero")
    let resOrg = document.getElementById("organizacion")
    resNombre.removeAttribute("disabled")
    resApellido.removeAttribute("disabled")
    resDireccion.removeAttribute("disabled")
    resEmail.removeAttribute("disabled")
    resTelefono.removeAttribute("disabled")
    resOrg.removeAttribute("disabled")
    opcionAgregar.removeAttribute("disabled")
}