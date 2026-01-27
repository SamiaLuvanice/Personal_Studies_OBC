const { Router } = require("express");
const productsController = require("./controllers/products-controller");

const router = Router();

router.get("/products", productsController.index);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.show);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

module.exports = router;
