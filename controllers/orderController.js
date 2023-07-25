const assert = require("assert");
const Definer = require("../lib/mistake");
const Order = require("../models/Order");

let orderController = module.exports;

orderController.createOrder = async (req, res) => {
  try {
    console.log("POST:  const/createOrder");
    assert.ok(req.member, Definer.auth_err5);
    console.log(req.body);

    const order = new Order();
    const result = await order.createOrderData(req.member, req.body);

    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`ERROR , cont/signup ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
orderController.getMyOrders = async (req, res) => {
  try {
    console.log("GET:  const/getMyOrders");
    assert.ok(req.member, Definer.auth_err5);
    const order = new Order();
    const result = await order.getMyOrdersData(req.member, req.query);
    
    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`ERROR , cont/getMyOrders ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

orderController.editChosenOrder = async (req ,res) =>{
  try{
    console.log("GET:  const/editChosenOrder");
    assert.ok(req.member, Definer.auth_err5);
    
    const order = new Order();
    const result = await order.editChosenOrderData(req.member , req.body);
    res.json({ state: "succeed", data: result });

    
  }catch(err){
    console.log(`ERROR , cont/editChosenOrder ${err.message}`);
    res.json({ state: "fail", message: err.message });

  }
}
