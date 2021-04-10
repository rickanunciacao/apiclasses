const express = require('express');
const router = express.Router();
const itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);


router.get('/hello/:foo/:bar',itemCtrl.getWorldParams);

router.post('/hello',itemCtrl.postWorld);


module.exports = router;
