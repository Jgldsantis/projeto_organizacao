const Sequelize = require ('sequelize');
const sequelize = require('../BD/db');
const Funcionarios = require ('../models/funcionarios');


module.exports = {
    async getAll(req, res){
        const funcionarios = await Funcionarios(sequelize,Sequelize.DataTypes).findAll();

        res.status(200).send(funcionarios)
    },


    async get(req,res){
        const funcionarios = await Funcionarios(sequelize,Sequelize.DataTypes).findAll({
            where: {id: req.params.id}
        })

        res.status(200).send(funcionarios)
    },

    async create(req, res){
        const funcionarios = await Funcionarios(sequelize,Sequelize.DataTypes).create({
            nome:req.body.nome,
            endereco:req.body.endereco,
            telefone:req.body.telefone,
            cargo:req.body.cargo,
            salario:req.body.salario,
            id_departamentos:req.body.id_departamentos
        })
        res.status(201).send({
            message: "Funcionário cadastrado com sucesso"
        })
    },
    async update(req, res){
        const funcionarios = await Funcionarios(sequelize,Sequelize.DataTypes).update({
            nome:req.body.nome,
            endereco:req.body.endereco,
            telefone:req.body.telefone,
            cargo:req.body.cargo,
            salario:req.body.salario,
            id_departamentos:req.body.id_departamentos

        },
        {
            where: {id: req.params.id}
        }
        );
        res.status(200).send({
            message: ('Funcionário atualizado com sucesso')
        })
    },

    async delete(req,res){
        await Funcionarios(sequelize,Sequelize.DataTypes).destroy({
            where: {id: req.params.id}
        })
        res.status(200).send({
            message:('Funcionário excluido com sucesso')
        })
    }

    
}