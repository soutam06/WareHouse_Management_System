const fs = require('fs');
const godownmodel = require('./models/godownsmodel');
const db = require('./db/connection');

// console.log(godownmodel);

function buildTree(data, parentId = null) {
    let tree = [];
    data.forEach(item => {
        // Check if the item belongs to the current parent
        if (item.parent_godown === parentId) {
            // Recursively build the children of the current item
            let children = buildTree(data, item.id);
            // If children exist, assign them to the current item
            if (children.length) {
                item.children = children;
            }
            // Add the current item to the tree
            tree.push(item);
        }
    });
    return tree;
}

//Insert to MongoDB



const insertData = async (data) => {
    await db();

    try {
        // console.log(data);
        await godownmodel.insertMany(data);
        console.log("Data inserted successfully");
    } catch (error) {
        console.log(error);
        console.error("Data insertion failed");
    }
}


// Read the JSON file


const data = require('./godowns.json');

// console.log(data);



const tree = buildTree(data);
// console.log(JSON.stringify(tree, null, 2));

insertData(tree);

// fs.writeFileSync('tree.json', JSON.stringify(tree, null, 2));



