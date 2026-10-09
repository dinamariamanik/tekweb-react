import { useLocation, useParams, Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const product = location.state; // Menerima data produk dari Link state
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-4">Produk tidak ditemukan</h2>
        <Link to="/" className="text-blue-600 underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm font-medium mb-6 inline-block">
          &larr; Kembali ke Daftar Produk
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={product.img} alt={product.name} className="w-full h-80 object-cover rounded-lg shadow" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">Rp {product.price.toLocaleString()}</p>
            <p className="text-gray-600 mb-6">
              Produk berkualitas tinggi yang dirancang khusus untuk mendukung kebutuhan produktivitas dan hiburan harianmu. Dapatkan kenyamanan dan performa terbaik sekarang juga!
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}