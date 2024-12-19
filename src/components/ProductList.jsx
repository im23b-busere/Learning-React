import Product from './Product.jsx';
import { useEffect, useState } from "react";
import BaseLayout from "../layout/Base";

export default function ProductList() {
  const limit = 12;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const skip = (page - 1) * limit;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [page, skip]);

  return (
    <BaseLayout>
      <div className="flex flex-wrap w-full p-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <div className="w-full py-5 flex justify-end">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
          <p className="font-bold text-lg px-4 py-2">{page}</p>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
      </div>
    </BaseLayout>
  );
}