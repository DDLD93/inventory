const CategoryCtrl = require('../controller/category.controller');


module.exports = (express)=>{
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await CategoryCtrl.getCategorys();
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await CategoryCtrl.getCategory(id);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status);
    }
  });
  api.get("/name/:name", async(req,res)=>{ 
    let {name} = req.params;
    let status = await CategoryCtrl.getCategoryByName(name);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/",async(req,res)=>{
    let data = req.body
    let status = await CategoryCtrl.addCategory(data);
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
    let status = await CategoryCtrl.updateCategory(id,body)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await CategoryCtrl.deleteCategory(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  return api;
}
