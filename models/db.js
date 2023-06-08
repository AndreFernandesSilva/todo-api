const Sequelize = require("sequelize")

const sequelize = new Sequelize("celke", "root","200815", {
    host: 'localhost',
    dialect: 'mysql'
})

//Apagar essas funções para postar no GitHub ou Usuario
sequelize.authenticate()
.then(function(){
    console.log("Conexão com o Banco de Dados realizada com sucesso!")
})
.catch(function(){
    console.log("Erro de Conexão com o Banco de Dados não realizado com sucesso!")
})

module.exports = sequelize