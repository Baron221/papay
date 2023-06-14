const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");
const productController = require("./controllers/productController");
// const uploader_product = require("./utils/upload-multer")("products");
const uploader_product = require("./utils/upload-multer")("products")

/************************************************
 *                       BSSR EJS                                 *
 ************************************************/

router_bssr.get("/",restaurantController.home)

router_bssr
  .get("/sign-up", restaurantController.getSignUpMyRestaurant)
  .post("/sign-up", restaurantController.signupProcess);

router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);
router_bssr.get("/check-me", restaurantController.checkSessions);

router_bssr.get("/products/menu", restaurantController.getMyRestauranProducts);
router_bssr.post(
  "/products/create",
  restaurantController.validateAuthRestaurant,
  uploader_product.array("product_images", 2),
  productController.addNewProduct
);
router_bssr.post("/products/edit/:id", 
restaurantController.validateAuthRestaurant,
productController.updateChosenProduct);

module.exports = router_bssr;
