const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacao.mid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Jean'))

app.use(( req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano: ${req.query.ano}`)
})

app.post('/corpo', (req, res) =>{
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} foi selecionado!`)
})

app.get('/data',( req, res, next) => {
    res.json({
        data: [
            {id: 7, nome: "Jean", position: 1},
            {id: 8, nome: "Bruna", position: 2},
            {id: 9, nome: "Jean", position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });
    next()
})

app.use(( req, res, next) => {
    console.log('Depois')
    next()
})

app.listen(3000,() =>{
    console.log('Executando na porta 3000.')
})