
const db = require("../models");
const { ObjectId } = require('mongodb').ObjectID;
const Info = db.info;
exports.post = (req, res) => {
  const  InfoContact = new Info ({
    name : req.body.name,
    name_tag: req.body.name_tag,
    value: req.body.value,
    active: req.body.active,
  })
  InfoContact.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Info was registered successfully!"});
  })
}
 exports.getAll = (req, res) => {
    InfoContact.find({},async (err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(result);
 })
}
exports.deleteByCode = (req,res) => {
    InfoContact.deleteOne({code : req.body.code}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was delete successfully!" })
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
  InfoContact.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was update successfully!"})
  })
}