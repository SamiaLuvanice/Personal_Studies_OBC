import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();

  // throw new Error('Teste de erro na página de produto');


  return (
    <section>
      <Link to="/products"><button>← Back to Products</button></Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button>Buy Now</button>
    </section>
  );
}
