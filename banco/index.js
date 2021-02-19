const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const banco = new Sequelize('Bolsa', 'postgres', 'postgres',{
    host: 'localhost',
    dialect: 'postgres'
});
app.use(express.json());

app.get('/', function(req, res){
    res.send('Funciona nodemon')
})           //testes de caminho
app.get('/teste', function(req, res){
    res.send('Funciona KralhoTeste')
})   //testes de caminho
app.get('/teste2', function(req, res){
    res.send('Funciona Kralho')
})   //testes de caminho
app.get('/ola/:nome/', function(req, res){
    res.send('ola')
})   //testes de parametro com 1 parametro  caminho localhost:6622/ola/{nome}

app.get('/ola/:empresa/:cargo', function(req, res){
    res.send('empresa')
})   //testes de parametro com 2 parametro / caminho localhost:6622/ola/{empresa}/{cargo}
app.get('/enviar/:nome/:idade/', function(req, res){
    res.send(req.params);
})   // req.params enviar um json com os campos nome e data com seus respectivos nome exemplo : localhost/enviar/luan/19 -> recebe um json com {'nome':'luan','idade': '19'}
app.get('/resposta/:nome/:cor', function(req, res){
    res.send('Ola '+req.params.nome);
})   // req.params pode pegar um so parametro, localhost:6622/resposta/Luan/Vermelhor -> resposta ola Luan

app.post('/login',(req, res)=>{

})













app.listen(6622, function(){
    console.log('funcionando servidor 6622')
});