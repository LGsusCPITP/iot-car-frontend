let mensaje = document.getElementById("mensaje");


let adelante = document.getElementById("adelante");
adelante.addEventListener("click",function(){
    callSet("f");
})
let atras = document.getElementById("atras");
atras.addEventListener("click",function(){
    callSet("b");
})
let izquierda = document.getElementById("izquierda");
izquierda.addEventListener("click",function(){
    callSet("l");
})
let derecha = document.getElementById("derecha");
derecha.addEventListener("click",function(){
    callSet("r");
})
let detener = document.getElementById("detener");
detener.addEventListener("click",function(){
    callSet("s");
})

function callSet(accion){
    axios.get('http://ec2-3-128-188-252.us-east-2.compute.amazonaws.com/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+accion, {
    

  })
  .then(function (response) {
    console.log(response);
    mensaje.innerHTML = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // siempre sera ejecutado
  }); 
}

