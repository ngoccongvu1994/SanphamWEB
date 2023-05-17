
const db = require("../models");
const Product = db.product;
exports.post = (req, res) => {
    const imageBuffer = req.file.buffer;
    console.log(req.file)
    const  product = new Product ({
      name : req.body.name,
      description: req.body.description,
      category: req.body.category,
      image: imageBuffer
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