const express = require("express");
const { getgodowncontroller } = require("../controller/godowncontroller");



const router = express.Router();

router.get('/godown',getgodowncontroller);

module.exports = router;