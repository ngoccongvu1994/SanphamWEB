
const db = require("../models");
const Product = db.product;
exports.post = (req, res) => {
  const  product = new Product ({
    name : req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  })
  product.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Product was registered successfully!"});
  })
}