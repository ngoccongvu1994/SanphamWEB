
const db = require("../models");
const Product = db.product;
exports.post = (req, res) => {
  const  product = new Product ({
    name : req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    category_child: req.body.category_child,
    image: req.body.image,
  })
  product.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Product was registered successfully!"});
  })
}
exports.getAll = (req, res) => {
 Product.find({},  (err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(data);
 })
}