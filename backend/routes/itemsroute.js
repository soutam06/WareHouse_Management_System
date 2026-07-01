const express = require("express");
const { getitemcontroller } = require("../controller/itemscontroller");



const router = express.Router();

router.get('/item',getitemcontroller);

module.exports = router;