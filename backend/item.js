const items = require("./items.json");
const tree = require ("./tree.json");
const fs = require('fs');
const Item = require('./models/itemsmodel')
const db = require('./db/connection');


function checkforgodown(item,val){
  return item.godown_id===val;
}

function additems(tree,items){
    tree.forEach(node=> {
        const values = items.filter(item => checkforgodown(item, node.id));
        if(values.length>0){
            node.items = values;
        }

        if(node.children){
            additems(node.children,items);
        }

    }
        
    );

}

const insertData = async (data) => {
    await db();

    try {
        // console.log(data);
        await Item.insertMany(data);
        console.log("Data inserted successfully");
    } catch (error) {
        console.log(error);
        console.error("Data insertion failed");
    }
}

insertData(items);

// additems(tree,items);

// fs.writeFileSync('tree_item.json', JSON.stringify(tree, null, 2));
