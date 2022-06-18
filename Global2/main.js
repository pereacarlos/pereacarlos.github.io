function agregarContacto() {



    let newCorrelativo = document.createElement("td")
    let newNombre = document.createElement("td")
    let newApellido = document.createElement("td")

    let cuadroCorrelativo = document.getElementById("correlativo");
    let cuadroApellido = document.getElementById("apellido");
    let cuadroNombre = document.getElementById("nombre");

    //ordenar por numero
    let lastId = document.getElementById("lastId")


    newCorrelativo.textContent = lastId.value.toUpperCase();
    newApellido.textContent = cuadroApellido.value.toUpperCase();
    newNombre.textContent = cuadroNombre.value.toUpperCase();
    //ordenar por letras
    let letraIns = cuadroApellido.value.charAt(0).toUpperCase();


    let newTr = document.createElement("tr");
    newTr.prepend(newCorrelativo);
    newTr.appendChild(newApellido);
    newTr.appendChild(newNombre);

    //agregar por numero
    newTr.id = lastId.value;
    lastId.value++;


    cuadroCorrelativo.value = "";
    cuadroApellido.value = "";
    cuadroNombre.value = "";






    let oldTable = document.getElementById("tabla" + letraIns);
    oldTable.appendChild(newTr);





    return;



}

//Buscar Contacto