const SupplyCtrl = require('../controller/supply.controller');


module.exports = (express)=>{
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await SupplyCtrl.getSupplys();
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await SupplyCtrl.getSupply(id);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/",async(req,res)=>{
    let data = req.body
    let status = await SupplyCtrl.addSupply(data);
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  api.patch("/:id", async(req,res)=>{
    let {id} = req.params;
    let body = req.body;
    delete body.createdAt;
    let status = await SupplyCtrl.updateSupply(id,body)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await SupplyCtrl.deleteSupply(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  ////////////---------////////////////
  // added code by umar jere
  // supply return endpoint
  api.get("/return/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await SupplyCtrl.ReturnSupply(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/email/:email", async(req,res)=>{
    let {email} = req.params;
    let status = await SupplyCtrl.getSupplyByEmail(email)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/batch", async(req,res)=>{
    let data = req.body
    let status = await SupplyCtrl.addSupplyMany(data)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });


  return api;
}
