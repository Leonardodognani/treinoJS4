// throw

// try...catch

function sayMyName (name = '') {
    if(name === ''){
        throw new Error("O nome é obrigatório")
    }
        
}

try {
    sayMyName('')
} catch(e) {
    console.log(e)
}

console.log('mensagem após o erro')


//o throw serve pra "jogar" um erro, caso ocorra, para fora da função. O try tenta executá-la e o catch
// serve para "pegar" o erro e retornar para a mensagem de erro da função.