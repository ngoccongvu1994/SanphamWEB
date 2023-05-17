
const db = require("../models");
const Product = db.product;
const path = require('path');
const fs = require('fs');

exports.post =  (req, res) => {
  // Lấy đường dẫn tới tệp đã tải lên
    const filePath = req.file;
    const  product = new Product ({
      name : req.body.name,
      description: req.body.description,
      category_id: req.body.category,
    })
      // Đảm bảo thư mục tồn tại
    if (!fs.existsSync(filePath.path)) {
      fs.mkdirSync(filePath.path);
    }

    product.image = filePath.path;
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