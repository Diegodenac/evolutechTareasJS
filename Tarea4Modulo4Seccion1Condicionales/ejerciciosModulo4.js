function ejercicio1(){
    let number = prompt("Ingrese un numero para ganar");
    let message = "¡Fallaste!";
    if(number > 90 && number < 110){
        message = "¡Bingo!"
    }
    alert(message);
}

function ejercicio2(){
    let number = prompt("Ingrese un numero para ganar");
    let message = number > 90 && number < 110 ? "¡Bingo!" : "¡Fallaste!";
    alert(message);
}

function ejercicio3(){
    let caracter = document.getElementById("caracter").value;
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let resultado = document.getElementById("resultado");   
    let operacion = number1 + caracter + number2;
    if(!Number.isNaN(number1) && !Number.isNaN(number2)){
        let resultadoOperacion = eval(operacion);
        resultado.innerHTML = `<p>El resultado de ${number1} ${caracter} ${number2} es: ${resultadoOperacion}</p>`;
    }

}
