const multer = require('multer');
const uuid = require('uuid').v4;
const path = require('path');

const BuildingCtrl = require('../controller/building.controller');


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

  const upload = multer({storage});
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await BuildingCtrl.getBuildings();
    if(status.ok){
      if(status.Buildings) return res.status(200).json(status.Buildings);
      res.status(200).json([]);
    }else{
      res.status(500).json(status.error);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await BuildingCtrl.getBuilding(id);
    if(status.ok){
      if(status.Building) return res.status(200).json(status.Building);
      res.status(200).json({});
    }else{
      res.status(500).json(status.error);
    }
  });

  api.post("/", upload.single('image'), async(req,res)=>{
    /*let data = null;
    if(req.body.source){
      data = JSON.parse(req.body.meta);
      //console.log("REQUEST FROM WEB >>>>>>>>> ",data)
    }else{
      data = req.body.meta;
      data = JSON.parse(data);
      //console.log("REQUEST FROM PHONE >>>>>>>>> ",data)
    }*/
    //console.log("body>>>>>>> ",req.body)

    let data = JSON.parse(req.body.meta);
    let status = await BuildingCtrl.addBuilding(data, req.filePath);
    if(status.ok){
      console.log("status >>> ",status);
      res.status(200).json(status.building);
    }else{
      console.log("error >>> ",status.error);
      res.status(500).json(status.error);
    }
  });

  api.patch("/:id", async(req,res)=>{
    let {id} = req.params;
    let body = req.body;
    delete body.createdAt;
    let status = await BuildingCtrl.updateBuilding(id,body)
    if(status.ok){
      res.status(200).json(status.Building);
    }else{
      res.status(500).json(status.error);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await BuildingCtrl.deleteBuilding(id)
    if(status.ok){
      res.status(200).json(status.message);
    }else{
      res.status(500).json(status.error);
    }
  });

  return api;
}
