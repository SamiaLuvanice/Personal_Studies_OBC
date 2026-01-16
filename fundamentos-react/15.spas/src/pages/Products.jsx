import { Link } from 'react-router-dom';
import products from '../database.json';

export default function Products() {
  return (
    <section>
      <h2>Product List</h2>
      <p>Here are some products we offer:</p>
      <section className="products">
        <h3>Featured Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`}>
             <button>See</button>
            </Link>
            <button>Buy</button>
          </li>
        ))}
      </ul>
    </section>
    </section>
  );
}
