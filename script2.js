// switch


let Escolha = ""

    switch (Escolha) {
        case "Cachorro":
            console.log("Cachorros latem e abanam o rabo")
             break;
        case "Gato":
            console.log("gatos miam e se lambem")
            break;
        case "Lobo":
            console.log("Lobos uivam e caçam")
            break;
        default:
            console.log("Escolha entre Cachorro, Gato e Lobo")
            break

}




function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            console.log(number1 + number2)            
            break;
        case '-':
            console.log(number1 - number2)
            break
        case '/':
            console.log(number1 / number2)
            break
        case '*':
            console.log(number1 * number2)
            break
        default:
            console.log("Não se aplica")
            break;
    }

return result

}


console.log(calculate( 9, '*', 5 ))