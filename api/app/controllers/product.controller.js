
const db = require("../models");
const Product = db.product;
const Category = db.category;
const path = require('path');
const fs = require('fs');

exports.post =  (req, res) => {
  // Lấy đường dẫn tới tệp đã tải lên
    const filePath = req.file;
    const  product = new Product ({
      name : req.body.name,
      description: req.body.description,
      category_id: req.body.category,
      active: true,
      createDate: Date.now()
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
 Product.find({}, async (err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    const result =  await Promise.all(
    data.map(async item => {
        const docs = await Category.findById({_id: item.category_id})
        return {
        _id: item._id,
        name: item.name,
        description: item.description,
        category: docs
        }
    })
   )
   console.log(result)
    res.send(result);
 })
}
exports.deleteById = (req,res) => {
  Product.deleteOne({_id : req.body._id}, (err)=> {
    console.log(req.body)
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Category was delete successfully!" })
  })
}
exports.update = (req,res) => {
  const updateObject  = {
    name : req.body.data.name,
    description: req.body.data.description,
    active: req.body.data.active,
    category_id: req.body.data.category_id,
    updateDate: Date.now()
  } 
  console.log(req.params)
  Product.updateOne({_id : req.params.id}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Category was update successfully!"})
  })
}