const Sequelize = require('sequelize');
const banco = new Sequelize('Bolsa', 'postgres', 'postgres',{
    host: 'localhost',
    dialect: 'postgres'
});

banco.authenticate().then(function(){
    console.log('entro')
}).catch(function(error){
    console.log('deu erro: ' +error)
})

/*
const Cadastro = define('teste', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Cadastro.sync({force: true}) cadastro a coluna teste com titulo e conteudo */