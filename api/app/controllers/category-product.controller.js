
const db = require("../models");
const { ObjectId } = require('mongodb').ObjectID;
const Category = db.category;
exports.post = (req, res) => {
  const  category = new Category ({
    name : req.body.name,
    description: req.body.description,
    code: req.body.code,
    parent_id: req.body.parent_id || null,
    level: parent_id? 2 : 1,
  })
  category.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Category was registered successfully!"});
  })
}
exports.getAll = (req, res) => {
  Category.find((err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(data);
 })
}
exports.deleteByCode = (req,res) => {
  Category.deleteOne({code : req.body.code}, (err)=> {
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
    code : req.body.data.code,
    description: req.body.data.description,
    level: req.body.data.level
  } 
  const ID = req.params.id
  console.log(updateObject)
  Category.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Category was update successfully!"})
  })
}