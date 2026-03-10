function cambiarTexto() {

    document.getElementById("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"

}

function modoOscuro() {

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let correo = document.getElementById("correo").value
    let con_correo = document.getElementById("con_correo").value
    let edad = document.getElementById("edad").value
    let genero = document.getElementById("genero").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let mensaje = document.getElementById("mensaje").value


    if (nombre == "" || nombre.test("\w+$") == false) {
        alert("Datos incorrectos, por favor ingresa un nombre válido")
    }
        else if (apellido == ""|| apellido.test(/^\w$/) == false) {
            alert("Datos incorrectos, por favor ingresa un apellido válido")
        }
        else if (correo == "" || correo.test(/^(a-zA-z0-9)+@([a-z])+\.com$/) == false) {
            alert("Datos incorrectos, por favor ingresa un correo válido")
        }
        else if (con_correo == "" || con_correo.test(/^(a-zA-z0-9)+@([a-z])+\.com$/) == false || con_correo != correo) {
            alert("Datos faltates o incorrectos, por favor confirma tu correo")
        }
        else if (edad == "" || edad.test(/\d/ig) == false) {
            alert("Debes llenar el campo de edad")
        }
        else if (direccion == "") {
            alert("Debes llenar el campo de dirección")
        }
        else if (telefono == "" || telefono.test(/^3\d{9}$/) == false) {
            alert("Debes llenar el campo de teléfono")
        }


    alert("Datos diligenciados:\nNombre: " + nombre + "\nApellido: " + apellido + "\nCorreo: " + correo + "\nEdad: " + edad + "\nGénero: " + genero + "\nDirección: " + direccion + "\nTeléfono: " + telefono + "\nMensaje: " + mensaje)
    console.log("Formulario enviado")

}