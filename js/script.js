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



    if (nombre == "" || nombre.test(//)) {
        alert("Debes llenar el campo de nombre")
    }
        else if (apellido == ""|| apellido.test(//)) {
            alert("Debes llenar el campo de apellido")
        }
        else if (correo == "" || correo.test(//)) {
            alert("Debes llenar el campo de correo")
        }
        else if (con_correo == "" || con_correo.test(//)) {
            alert("La confirmación de correo es obligatoria")
        }
        else if (edad == "" || edad.test(//)) {
            alert("Debes llenar el campo de edad")
        }
        else if (direccion == "" || direccion.test(//)) {
            alert("Debes llenar el campo de dirección")
        }
        else if (telefono == "" || telefono.test(//)) {
            alert("Debes llenar el campo de teléfono")
        }

    console.log("Formulario enviado")

}