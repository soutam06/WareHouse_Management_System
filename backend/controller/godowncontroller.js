const godown = require('../models/godownsmodel');

const getgodowncontroller = async (req, res) => {
    try {
        const data = await godown.find();
        res.status(200).json( data );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getgodowncontroller };