const UserCtrl = require('../controller/user.controller');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);



module.exports = (express)=>{
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await UserCtrl.getUsers();
    if(status.ok){
      delete status.payload.password
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await UserCtrl.getUser(id);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/login", async(req,res)=>{ 
    let data = req.body
    let status = await UserCtrl.getUserByEmail(data.email);
    if(status.ok){
      if(!status.payload) return res.status(400).json(status);
      delete status.payload.password
    let pCheck= await bcrypt.compare(data.password,status.payload.password)
      if(!pCheck) return res.status(401).json({status:"failed",message:"wrong password"});
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/",async(req,res)=>{
    let data = req.body
    data.password = bcrypt.hashSync(data.password, salt);
    let status = await UserCtrl.addUser(data);
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  api.patch("/:id", async(req,res)=>{
    let {id} = req.params;
    let body = req.body;
    body.updatedAt = Date.now()
    delete body.createdAt;
    let status = await UserCtrl.updateUser(id,body)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await UserCtrl.deleteUser(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  return api;
}
