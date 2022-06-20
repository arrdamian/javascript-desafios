function pregunta(){
    let respuesta = prompt("Bienvenido ¿Dispone de recibo de sueldo? SI/NO");
    return respuesta
}

function feedback (respuesta){
    if (respuesta === "SI" || respuesta === "si" || respuesta === "Si"){
        let monto = parseInt(prompt("Ingrese el monto de su sueldo"));
        let prestamo = calcularPrestamo(monto);
        alert("Tu prestamo es de: "+ prestamo);
        let montoConRecargo = cuotas(prestamo);
        alert("Vas a devolver total: " + montoConRecargo + " En las cuotas seleccionadas");
        return false
    }
    else if (respuesta === "NO" || respuesta === "no" || respuesta === "No") {
        alert("Nuestros servicios solo son cuando dispones de un recibo de sueldo");
        return false
    }
    else {
        return true
    }
}

function calcularPrestamo (monto){
    let cantidadPrestamo = monto * 1.5
    return cantidadPrestamo
}

function cuotas (prestamo){
    let montoConRecargo = 0;
    let respuesta = parseInt(prompt("Seleccione 3 o 6 cuotas"));
    if (respuesta === 3){
        montoConRecargo = prestamo * 1.3;
    }
    else if (respuesta === 6){
        montoConRecargo = prestamo * 1.5;
    }
    else{
        alert("No ha seleccionado bien las cuotas");
    }
    return montoConRecargo

}

let respuestaIncorrecta = true; //Inicializar una variable
while(respuestaIncorrecta) {
    let respuesta = pregunta();
    respuestaIncorrecta = feedback(respuesta);
}

alert("Fin de la ejecucion");

 
