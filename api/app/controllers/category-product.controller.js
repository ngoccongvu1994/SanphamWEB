
const db = require("../models");
const Category = db.category;
exports.post = (req, res) => {
  const  Category = new Category ({
    name : req.body.name,
    description: req.body.description,
    code: req.body.code,
    parent: req.body.parent,
    level: req.body.level,
  })
  Category.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Category was registered successfully!"});
  })
}
exports.getAll = (req, res) => {
 Category.find({},  (err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(data);
 })
}