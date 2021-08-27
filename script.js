//control Flow

//if...else


let temperature = 36.5
let highTemperature = temperature >= 38
let mediumTemperature = temperature < 37.9 && temperature >= 37

if(highTemperature) {
    console.log("Você está com febre alta!")
} else if(mediumTemperature){
    console.log("Você está febril")
}else{
    console.log("Sua temperatura está normal")
}
 //lembrando sempre do hoisting e da ordem de execução que será sempre de cima para baixo.
 //por isso devemos prestar atenção na ordem das condicionais.