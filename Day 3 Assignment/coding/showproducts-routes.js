const express = require("express");
const router = express.Router();



//The route is for Showing all the product

router.get("/showAllProducts", function (req, res) {

    let dataObj = {};
    dataObj.productArray = [
        { pid: 10, pname: "Biscuit", price: 20, quantity: 40, category: 1 },
        { pid: 20, pname: "Chocolate", price: 50, quantity: 50, category: 1 },
        { pid: 30, pname: "Chips", price: 30, quantity: 30, category: 1 },
        { pid: 40, pname: "Kinder joy", price: 35, quantity: 30, category: 1 },
        { pid: 50, pname: "Apple", price: 45, quantity: 80, category: 2 },
        { pid: 60, pname: "Banana", price: 25, quantity: 120, category: 2 },
        { pid: 70, pname: "Grapes", price: 70, quantity: 50, category: 2 },
        { pid: 80, pname: "Orange", price: 95, quantity: 70, category: 2 }
    ];

    res.render("showAllProducts", dataObj);
});



//The Route is for showing product based on the Product Id (pid)

router.get("/GetProductById/:pid", function (req, res) {

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

    let productId  = req.params.pid;
    let dataObj = {};    
    dataObj.productObj = productArray.find( item => item.pid == productId );

    res.render("details", dataObj);
});


//The Route is for showing product based on the Category

// router.get("/getProductBycategory", function (req, res) {

//     var productArray = [
//         { pid: 10, pname: "Biscuit", price: 20, quantity: 40, category: 1 },
//         { pid: 20, pname: "Chocolate", price: 50, quantity: 50, category: 1 },
//         { pid: 30, pname: "Chips", price: 30, quantity: 30, category: 1 },
//         { pid: 40, pname: "Kinder joy", price: 35, quantity: 30, category: 1 },
//         { pid: 50, pname: "Apple", price: 45, quantity: 80, category: 2 },
//         { pid: 60, pname: "Banana", price: 25, quantity: 120, category: 2 },
//         { pid: 70, pname: "Grapes", price: 70, quantity: 50, category: 2 },
//         { pid: 80, pname: "Orange", price: 95, quantity: 70, category: 2 }
//     ];


//     let productCategory = req.query.t1;
//     let dataObj = {};
//     dataObj.productObj = productArray.find(item => item.Category == productCategory);

//     res.render("category", dataObj);
// });


module.exports = router;