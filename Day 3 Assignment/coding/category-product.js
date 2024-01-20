const express = require("express");
const router = express.Router();


//The Route is for showing product based on the category
router.get("/getProductBycategory", function (req, res) {
var productArray = [
    { pid: 10, pname: "Biscuit", price: 20, quantity: 40, category: 1 },
    { pid: 20, pname: "Chocolate", price: 50, quantity: 50, category: 1 },
    { pid: 30, pname: "Chips", price: 30, quantity: 30, category: 1 },
    { pid: 40, pname: "Kinder joy", price: 35, quantity: 30, category: 1 },
    { pid: 50, pname: "Apple", price: 45, quantity: 80, category: 2 },
    { pid: 60, pname: "Banana", price: 25, quantity: 120, category: 2 },
    { pid: 70, pname: "Grapes", price: 70, quantity: 50, category: 2 },
    { pid: 80, pname: "Orange", price: 95, quantity: 70, category: 2 }
];

    let productCategory = parseInt(req.query.t1);
    console.log(productCategory);

    let filteredProducts = productArray.filter(item => item.category === productCategory);

    console.log(filteredProducts);

    res.render('category', {filteredProducts});
});




router.get('/category1',function(req,res){
    var productArray = [
        { pid: 10, pname: "Biscuit", price: 20, quantity: 40, category: 1 },
        { pid: 20, pname: "Chocolate", price: 50, quantity: 50, category: 1 },
        { pid: 30, pname: "Chips", price: 30, quantity: 30, category: 1 },
        { pid: 40, pname: "Kinder joy", price: 35, quantity: 30, category: 1 },
        { pid: 50, pname: "Apple", price: 45, quantity: 80, category: 2 },
        { pid: 60, pname: "Banana", price: 25, quantity: 120, category: 2 },
        { pid: 70, pname: "Grapes", price: 70, quantity: 50, category: 2 },
        { pid: 80, pname: "Orange", price: 95, quantity: 70, category: 2 }
    ];

    let filteredProducts = productArray.filter(item => item.category === 1);

    console.log(filteredProducts);

    res.render('category12', {filteredProducts});
});


router.get('/category2',function(req,res){
    var productArray = [
        { pid: 10, pname: "Biscuit", price: 20, quantity: 40, category: 1 },
        { pid: 20, pname: "Chocolate", price: 50, quantity: 50, category: 1 },
        { pid: 30, pname: "Chips", price: 30, quantity: 30, category: 1 },
        { pid: 40, pname: "Kinder joy", price: 35, quantity: 30, category: 1 },
        { pid: 50, pname: "Apple", price: 45, quantity: 80, category: 2 },
        { pid: 60, pname: "Banana", price: 25, quantity: 120, category: 2 },
        { pid: 70, pname: "Grapes", price: 70, quantity: 50, category: 2 },
        { pid: 80, pname: "Orange", price: 95, quantity: 70, category: 2 }
    ];

    let filteredProducts = productArray.filter(item => item.category === 2);

    console.log(filteredProducts);

    res.render('category12', {filteredProducts});
});



module.exports = router;
