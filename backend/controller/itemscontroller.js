const Item = require('../models/itemsmodel');

const getitemcontroller = async (req, res) => {
    try {
        const {godown} = req.query;
        const data = await Item.find(
            { godown_id: godown}
        );

        res.status(200).json( data );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getitemcontroller };