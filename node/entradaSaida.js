const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout._write('Fala anônimo!')
}else{
    process.stdout._write('Digite seu nome:')
    process.stdin.on('data',data => {
        data = data.toString().replace('\n','')
        process.stdout._write(`Fala ${data}\n`)

        process.exit()
    })
}