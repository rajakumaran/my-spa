import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5' },
];

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
