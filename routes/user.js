const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');


router.get('/get/all', (req, res) => {
    userController.getAll(req).then(resultFromController => res.send(resultFromController));
})

router.get('/get/:id', (req, res) => {
    userController.get(req.params).then(resultFromController => res.send(resultFromController));
})

router.post('/new', (req, res) => {
    userController.new(req.body).then(resultFromController => res.send(resultFromController));
})

router.delete('/remove/:id', (req, res) => {
    userController.remove(req.params).then(resultFromController => res.send(resultFromController));
})

router.patch('/update/:id', (req, res) => {
    userController.update(req.params).then(resultFromController => res.send(resultFromController));
})

router.delete('/remove-many', (req, res) => {
    userController.removeMany(req.body).then(resultFromController => res.send(resultFromController));
})

module.exports = router;