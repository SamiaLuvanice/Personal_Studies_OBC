import products from '../database.json';

export default function loadProduct({ params }) {

  const product = products.find(p => p.id === parseInt(params.productId));

  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  return product;
}
