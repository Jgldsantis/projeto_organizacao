const express = require ('express');
const router = express.Router();
const dependentesController = require('../controllers/dependentes');

router.get('/', (req, res) => {
    dependentesController.getAll(req,res)
});

router.get('/:id', (req, res) =>{
    dependentesController.get(req,res)
});

router.post('/', (req, res) => {
    dependentesController.create(req, res)
});

router.put('/:id',(req, res)=>{
    dependentesController.update(req, res)
});

router.delete('/:id',(req, res) =>{
    dependentesController.delete(req, res)
});

module.exports = router