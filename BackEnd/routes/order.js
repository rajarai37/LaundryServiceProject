const bodyParser = require("body-parser");
const express = require("express");
const Order = require("../model/orders");
const router = express.Router();
SECRET = "RESTAPI";

//============================Create Order API=====================================

router.post("/create", async (req, res) => {
  try {
    const situation = ["In Washing", "Ready To Pickup", "ready to deliver"];
    const state = Math.floor(Math.random() * situation.length);

    const order = await Order.create({
      user: req.user,
      items:req.body.items,
      status: situation[state],
    });
    // console.log(req.body);
    return res.json({
      status: "Success",
      message: "Order Place Successfully",
      order,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

// ---------------FETCH ORDERS---------------
router.get("/create", async(req,res) => {
  try{
    const order = await Order.find({user:req.user});
    res.status(200).json({
        status: "success",
        order
    })
  }catch(e){
        console.log(e);
        return res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
});


// ============================ EDIT POSTS =====================================
router.put("/create/:id", async(req,res) => {
  try{
     const order = await Order.updateOne({_id:req.params.id},{status:"Cancelled"} );
     if (order.modifiedCount>0){
          return res.status(200).json({
              status:"Success",
              message:"Order Cancelled"
          })
     }else{
         return res.status(401).json({
             status:"Failed",
             message:"Not authorized to cancel the order"
         })
     }
  }catch(e){
      console.log(e);
      return res.status(500).json({
          status:"Failed",
          message:e.message
      })
  }
});

module.exports = router;