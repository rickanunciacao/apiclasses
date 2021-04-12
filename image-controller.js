const UPLOAD_PATH = require('./routes').UPLOAD_PATH;
const Image = require('./models/image')
const path = require('path');
const fs = require('fs');
const del = require('del');


// Create Single Image

exports.uploadImage = function(req, res) {

    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.description = req.body.description;
    
    newImage.save(err => {
        if(err){
            return res.sendStatus(400);
        }

        res.status(201).send({newImage})
    });





    var newimage = new Image(req.body);
    newimage.save(function (err, image) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(image); 
});


};

// Read SINGLE Image

exports.getImage = function(req, res) {
  Image.findOne({_id: req.params.id}, function (err, image) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(image);
  });
};


// Read ALL Images

exports.getImages = function(req, res) {
  Image.find({}, function (err, images) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(images);
  }); 
};




// Update SINGLE Image TODO

exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};


// Delete SINGLE User

exports.deleteUser = function(req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};
