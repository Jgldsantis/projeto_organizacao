const express = require ('express');
const router = express.Router();
const funcionarioscontroller = require('../controllers/funcionarios');

router.get('/', (req, res) => {
    funcionarioscontroller.getAll(req,res)
});

router.get('/:id', (req, res) =>{
    funcionarioscontroller.get(req,res)
});

router.post('/', (req, res) => {
    funcionarioscontroller.create(req, res)
});

router.put('/:id',(req, res)=>{
    funcionarioscontroller.update(req, res)
});

router.delete('/:id',(req, res) =>{
    funcionarioscontroller.delete(req, res)
});

module.exports = router