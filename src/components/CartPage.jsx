import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Keranjang Belanja Kosong</h2>
        <p className="text-gray-500 mb-6">Belum ada produk yang kamu tambahkan ke keranjang.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Keranjang Belanja Kamu</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-4 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-medium">Rp {item.price.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold transition"
                >
                  -
                </button>
                <span className="px-4 font-semibold">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-between items-center pt-4">
          <span className="text-lg font-bold text-gray-700">Total Harga:</span>
          <span className="text-2xl font-extrabold text-blue-600">Rp {totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/" className="text-blue-600 hover:underline font-medium">
          &larr; Lanjut Belanja
        </Link>
        <button
          onClick={() => alert("Checkout berhasil! Terima kasih sudah berbelanja.")}
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition shadow"
        >
          Checkout Sekarang
        </button>
      </div>
    </div>
  );
}