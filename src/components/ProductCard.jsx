import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white transition">
      <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h2 className="font-semibold text-lg">{p.name}</h2>
      <p className="text-gray-600 font-medium mb-2">Rp {p.price.toLocaleString()}</p>
      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/product/${p.slug}`}
          state={p}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Lihat Detail
        </Link>
        <button
          onClick={() => addToCart(p)}
          className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}