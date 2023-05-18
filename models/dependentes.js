'use strict'
const {Model, DataTypes}= require('sequelize');
const sequelize = require('../BD/db');
module.exports = (sequelize,DataTypes) => {
    class Dependentes extends Model{}
    Dependentes.init({
        nome:DataTypes.STRING(50),
        idade:DataTypes.TINYINT,
        tipo:DataTypes.STRING(15),
        status_dep:DataTypes.STRING(10),
        id_funcionarios:DataTypes.SMALLINT
    },
    {
        sequelize,
        modelName:'dependentes',
        timestamps: false
    })

    return Dependentes
}