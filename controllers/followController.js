const assert = require("assert");
const Definer = require("../lib/mistake");
let followController = module.exports;
const Follow = require("../models/Follow");

followController.subscribe = async (req, res) => {
  try {
    console.log(`POST: cont/subscribe`);
    assert.ok(req.member, Definer.auth_err5);

    const follow = new Follow();
    await follow.subscribeData(req.member, req.body);

    res.json({ state: "success", data: "subscribed" });
  } catch (error) {
    console.log(`ERROR, cont/subscribe, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};
followController.unsubscribe = async (req, res) => {
  try {
    console.log(`POST: cont/unsubscribe`);
    assert.ok(req.member, Definer.auth_err5);

    const follow = new Follow();
    await follow.unsubscribeData(req.member, req.body);

    res.json({ state: "success", data: "unsubscribed" });
  } catch (error) {
    console.log(`ERROR, cont/unsubscribe, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};

followController.getMemberFollowings = async(req,res) =>{
  try{
    console.log(`GET: cont/getMemberFollowings`);
    const follow = new Follow();
    const result= await follow.getMemberFollowingsData(req.query)
    res.json({ state: "success", data: result });

  }catch(err){
    console.log(`ERROR, cont/getMemberFollowings, ${error.message}`);
    res.json({ state: "fail", message: error.message });

  }
};


followController.getMemberFollowers = async (req, res) => {
  try {
      console.log(`GET: cont/getMemberFollowers`);
      const follow = new Follow();

      const result = await follow.getMemberFollowersData(req.member, req.query);
      res.json({ state: "success", data: result })
  } catch (error) {
      console.log(`ERROR, cont/getMemberFollowers, ${error.message}`);
      res.json({ state: "fail", message: error.message });
  }
}
