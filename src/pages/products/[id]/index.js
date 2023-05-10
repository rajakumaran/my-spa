import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my SPA!</h1>
      <p>Check out my <Link href="/products"><a>products</a></Link></p>
    </div>
  );
}


const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5' },
];

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );

  
}