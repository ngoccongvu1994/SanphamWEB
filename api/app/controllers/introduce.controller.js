
const db = require("../models");
const { ObjectId } = require('mongodb').ObjectID;
const Introduce = db.intro;
exports.post = (req, res) => {
  const  Introduces = new Introduce ({
    title : req.body.title,
    content: req.body.content,
    active: true,
    createDate: Date.now()
  })
  Introduces.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Info was registered successfully!"});
  })
}
 exports.getAll = (req, res) => {
    Introduce.find({},(err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    console.log(data)
    res.send(data);
 })
}
exports.delete = (req,res) => {
  const ID = req.params.id
    Introduce.deleteOne({_id : ObjectId(ID)}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was delete successfully!" })
  })
}
exports.update = (req,res) => {
  const updateObject  = {
    title : req.body.data.title,
    content : req.body.data.content,
    updateDate: Date.now()
  } 
  const ID = req.params.id
  Introduce.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was update successfully!"})
  })
}