let anchura = prompt("Ingresa la anchura");
if(anchura<=0){
    alert("El valor ingresado no puede ser menor a 0");
}
else{
    let altura = prompt("Ingresa la altura");
    if(altura<=0){
        alert("El valor ingresado no puede ser menor a 0");
    }
    else{
        let longitud = prompt("Ingresa la longitud");
        if(longitud<=0){
            alert("El valor ingresado no puede ser menor a 0");
        }
        else{
            alert(`El volumen de la caja es ${anchura*altura*longitud}`);
        }
    }
}



