'use strict'
const {Model, DataTypes}= require('sequelize');
const sequelize = require('../BD/db');

module.exports = (sequelize,DataTypes) => {
    class Funcionarios extends Model{}
    Funcionarios.init({
        nome:DataTypes.STRING(50),
        endereco:DataTypes.STRING(100),
        telefone:DataTypes.BIGINT,
        cargo:DataTypes.STRING(25),
        salario:DataTypes.DECIMAL(7,2),
        id_departamentos:DataTypes.SMALLINT
    },
    {
        sequelize,
        modelName:'funcionarios',
        timestamps: false
    })

    return Funcionarios
}