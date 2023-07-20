const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController")
const restaurantController = require("./controllers/restaurantController")
const router_bssr = require("./router_bssr");

/************************************************
 *                       REST API                                 *
 ************************************************/

//memberga dahldor routerlar
// router.get("/",memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

//product related routerlar
router.post("/products",
memberController.retrieveAuthMember,
productController.getAllProducts);

router.get("/products/:id" , 
memberController.retrieveAuthMember ,
productController.getChosenProduct);


router.get("/restaurants",
memberController.retrieveAuthMember , 
restaurantController.getRestaurants)


module.exports = router;
