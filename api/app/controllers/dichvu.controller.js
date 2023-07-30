
const db = require("../models");
const { ObjectId } = require('mongodb').ObjectID;
const DichVu = db.dichvu;
exports.post = (req, res) => {
  const  dichvu = new DichVu ({
    name : req.body.name,
    description: req.body.description,
    code: req.body.code,
    parent_id: req.body.parent_id,
    level: req.body.parent_id? 2 : 1,
  })
  dichvu.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "dichvu was registered successfully!"});
  })
}
 exports.getAll = (req, res) => {
  DichVu.find({},async (err, data)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
   const result =  await Promise.all(
    data.map(async item => {
        const docs = await DichVu.find({parent_id: item._id})
        return {
        _id: item._id,
        name: item.name,
        description: item.description,
        code: item.code,
        level: item.level,
        listMenu: docs,
        is_parent : (item.level === 1 && docs.length > 0 && item.parent_id === '')? true : false
        }
    })
   )
    res.send(result);
 })
}
exports.deleteByCode = (req,res) => {
  DichVu.deleteOne({code : req.body.code}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "DichVu was delete successfully!" })
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
  // console.log(updateObject)
  DichVu.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "DichVu was update successfully!"})
  })
}