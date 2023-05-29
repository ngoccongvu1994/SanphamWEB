
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
    Info.find({},(err, data)=> {
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
    Info.deleteOne({_id : ObjectId(ID)}, (err)=> {
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
    value : req.body.data.value,
  } 
  const ID = req.params.id
  Info.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was update successfully!"})
  })
}