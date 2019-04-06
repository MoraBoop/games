const express = require('express');
const router = express.Router();

const datos = require('../database');

router.get('/', (req, res)=>{
    res.send(datos);
});

module.exports = router;