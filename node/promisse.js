function falarDepois(segundos,frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(frase)
        },segundos * 1000)
    })
}


falarDepois(2,'Que legal')
    .then( frase => frase.concat(', passou no primeiro then'))
    .then( frase => console.log(frase))
    .catch( frase => console.log(erro))