const ProductCtrl = require('../controller/product.controller');


module.exports = (express)=>{
  api = express.Router();
  
  api.get("/",async(req,res) =>{
    let status = await ProductCtrl.getProducts();
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.get("/:id", async(req,res)=>{ 
    let {id} = req.params;
    let status = await ProductCtrl.getProduct(id);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json({});
    }else{
      res.status(500).json(status.error);
    }
  });

  api.get("/name/:name", async(req,res)=>{ 
    let {name} = req.params;
    let status = await ProductCtrl.getProductCategoryByName(name);
    if(status.ok){
      if(status.payload) return res.status(200).json(status);
      res.status(200).json([]);
    }else{
      res.status(500).json(status);
    }
  });

  api.post("/",async(req,res)=>{
    let data = req.body
    let status = await ProductCtrl.addProduct(data);
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
    let status = await ProductCtrl.updateProduct(id,body)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });
  
  // Deleting One
  api.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    let status = await ProductCtrl.deleteProduct(id)
    if(status.ok){
      res.status(200).json(status);
    }else{
      res.status(500).json(status);
    }
  });

  return api;
}
