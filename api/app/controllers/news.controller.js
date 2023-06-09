
const db = require("../models");
const { ObjectId } = require('mongodb').ObjectID;
const News = db.news;
const fs = require('fs');
exports.post = (req, res) => {
  // const filePath = req.file;
  const  Newss = new News ({
    title : req.body.title,
    content: req.body.content,
    active: true,
    createDate: Date.now(),
    tags: req.body.tags,
  })
    // Đảm bảo thư mục tồn tại
  //   if (!fs.existsSync(filePath.path)) {
  //     fs.mkdirSync(filePath.path);
  //   }
  // Newss.imageUrl = filePath.path;
  Newss.save((err)=>{
    if(err){
        res.status(500).send({message: err})
    }
    res.send({ message: "Info was registered successfully!"});
  })
}
 exports.getAll = (req, res) => {
    News.find({},(err, data)=> {
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
    News.deleteOne({_id : ObjectId(ID)}, (err)=> {
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
    tags: req.body.data.tags,
    updateDate: Date.now()
  } 
  const ID = req.params.id
  News.updateOne({_id : ObjectId(ID)}, {$set: updateObject}, (err)=> {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Info was update successfully!"})
  })
}