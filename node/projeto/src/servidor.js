const express = require('express')
const db = require('./bancoDados')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/produtos',(req,res,next)=>{
    res.send(db.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    res.send(db.salvarProduto({
        nome: req.body.nome,
        valor: req.body.valor
    }))
})

app.put('/produtos/:id',(req,res,next)=>{
    res.send(db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        valor: req.body.valor
    }))
})

app.delete('/produtos/:id',(req,res,next)=>{
    res.send(db.removeProduto(req.params.id))
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})