
const db = require("../models");
const Product = db.product;
exports.post = (req, res) => {
  // Lấy đường dẫn tới tệp đã tải lên
  const filePath = req.file.path;
    console.log(req.body.category)
    const  product = new Product ({
      name : req.body.name,
      description: req.body.description,
      category_id: req.body.category,
    })
    product.image = filePath;
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