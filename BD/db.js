const {Sequelize} = require ('sequelize');
const sequelize = new Sequelize('organizacao', 'root', 'root',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão realizado com sucesso!')
})
.catch(function(){
    console.log('ERRO: Não foi possivel realizar a conexão')
})

module.exports = sequelize