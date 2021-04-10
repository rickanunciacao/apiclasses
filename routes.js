const express = require('express');
const router = express.Router();

const itemCtrl = require('./item-controller');
const userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar',itemCtrl.getWorldParams);
router.post('/hello',itemCtrl.postWorld);



router.post('/users',userCtrl.createUser);
router.get('/users',userCtrl.getUsers);
router.get('/users/:id',userCtrl.getUser);
router.delete('/users/:id',userCtrl.deleteUser);
router.put('/users/:id',userCtrl.updateUser);


module.exports = router;
