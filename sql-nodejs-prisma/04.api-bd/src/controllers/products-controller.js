const Product = require("../models/Product");

const productsController = {
  // GET /products
  index: async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
  },

  // POST /products
  create: async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  },

  // GET /products/:id
  show: async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  },

  // PUT /products/:id
  update: async (req, res) => {
    res.send(`Update product with ID: ${req.params.id}`);
  },

  // DELETE /products/:id
  delete: async (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
  },
};

module.exports = productsController;
