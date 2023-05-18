const express = require ('express');
const router = express.Router();
const departamentoscontroller = require('../controllers/departamentos');

router.get('/', (req, res) => {
    departamentoscontroller.getAll(req,res)
});

router.get('/:id', (req, res) =>{
    departamentoscontroller.get(req,res)
});

router.post('/', (req, res) => {
    departamentoscontroller.create(req, res)
});

router.put('/:id',(req, res)=>{
    departamentoscontroller.update(req, res)
});

router.delete('/:id',(req, res) =>{
    departamentoscontroller.delete(req, res)
});

module.exports = router