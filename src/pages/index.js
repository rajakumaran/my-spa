import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the first product.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the third product.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the fourth product.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the fifth product.",
    image: "https://via.placeholder.com/300x200",
  },
];

export default function Home() {
  return (
    <div>
      <h1>My Product Showcase</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
