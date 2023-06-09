const Sequelize = require ('sequelize');
const sequelize = require('../BD/db');
const Departamentos = require ('../models/departamentos');


module.exports = {
    async getAll(req, res){
        const departamentos = await Departamentos(sequelize,Sequelize.DataTypes).findAll();

        res.status(200).send(departamentos)
    },


    async get(req,res){
        const departamentos = await Departamentos(sequelize,Sequelize.DataTypes).findAll({
            where: {id: req.params.id}
        })

        res.status(200).send(departamentos)
    },

    async create(req, res){
        const departamentos = await Departamentos(sequelize,Sequelize.DataTypes).create({
            nome:req.body.nome,
            sigla:req.body.sigla,
            responsavel:req.body.responsavel
        })
        res.status(201).send({
            message: "Departamento cadastrado com sucesso"
        })
    },
    async update(req, res){
        const departamentos = await Departamentos(sequelize,Sequelize.DataTypes).update({
            nome:req.body.nome,
            sigla:req.body.sigla,
            responsavel:req.body.responsavel
        },
        {
            where: {id: req.params.id}
        }
        );
        res.status(200).send({
            message: ('Departamento atualizado com sucesso')
        })
    },

    async delete(req,res){
        await Departamentos(sequelize,Sequelize.DataTypes).destroy({
            where: {id: req.params.id}
        })
        res.status(200).send({
            message:('Departamento excluido com sucesso')
        })
    }

    
}