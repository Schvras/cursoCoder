const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,res)=>{
    console.log(req.body)

    res.send('Salvo!')
})

app.get('/bruna/:message',(req,res)=>{

    res.send('Bruna é: ' + req.params.message)
})


app.listen(3000,() =>{
    console.log('Servidor rodando!')
})
