const HVEquipmentCtrl = require('../controller/HVEquipment.controller');
const multer = require('multer');
const uuid = require('uuid').v4;
const path = require('path');


module.exports = (express,UPLOADS)=>{
  const storage = multer.diskStorage({ 
    destination: function(req, file, cb){
      const fPath = UPLOADS;
      cb(null,fPath);
    },
    filename: function(req, file, cb){
      const arr = file.originalname.split('.');
      const ext = arr[arr.length-1];
      const fileUrl = `${uuid().replace(/-/g,'')}.${ext}`;
      req.filePath = '/uploads/'+fileUrl;
      cb(null,fileUrl);
    }
  });

  const upload = multer({storage})
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await HVEquipmentCtrl.getHVEquipments();
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await HVEquipmentCtrl.getHVEquipment(id);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/",upload.single('image'),async(req,res)=>{
   
    let data = JSON.parse(req.body.meta);
    let status = await HVEquipmentCtrl.addHVEquipment(data,req.filePath);
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status.error);
    }
  });

  api.patch("/:id", async(req,res)=>{
    let {id} = req.params;
    let body = req.body;
    delete body.createdAt;
    let status = await HVEquipmentCtrl.updateHVEquipment(id,body)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await HVEquipmentCtrl.deleteHVEquipment(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  return api;
}
