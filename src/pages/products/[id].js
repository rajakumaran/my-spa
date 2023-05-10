import { useRouter } from "next/router";

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
  ,
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

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}
