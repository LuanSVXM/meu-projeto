const db = require('./db');

const Jogador = db.db.define('Jogadores',{
    usuario :{
        type: db.Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    datanascimento: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sexo:{
        type: db.Sequelize.STRING(1),
        allowNull: false,
         
    },
    senha: {
        type:db.Sequelize.STRING(20),
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    trofeus: {
        type: db.Sequelize.NUMBER,
    }
})
Jogador.sync({force:true})    