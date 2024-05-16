let respuesta = document.getElementById("respuesta");




function callGetRegistro(){
    axios.get('http://ec2-3-128-188-252.us-east-2.compute.amazonaws.com/iot-car-control/back-end/apis/getRegistro.php', {
    

  })
  .then(function (response) {
    console.log(response);
    mostrarRespuesta(response);
    //respuesta.innerHTML = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // siempre sera ejecutado
  }); 
}
function mostrarRespuesta(response){
    let res;
    if(response.data == "l"){
        res = "Derecha";
    }else if(response.data == "r"){
        res = "Izquierda";
    }else if(response.data == "f"){
        res = "Frente";
    }else if(response.data == "b"){
        res = "Atras";
    }else if(response.data == "s"){
        res = "Parado";
    }
    
    respuesta.innerHTML = "El estado actual es: "+res;
}

  // Función para llamar a la función cada 2 segundos
  function startInterval() {
    setInterval(callGetRegistro, 2000); // 2000 milisegundos = 2 segundos
  }

  startInterval();
