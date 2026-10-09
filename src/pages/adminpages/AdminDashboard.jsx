import { useState } from "react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop Gaming Pro", price: 15000000, stock: 12 },
    { id: 2, name: "Mechanical Keyboard RGB", price: 750000, stock: 25 },
    { id: 3, name: "Wireless Mouse Ergonomic", price: 300000, stock: 40 },
  ]);

  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    setProducts([newProduct, ...products]);
    setForm({ name: "", price: "", stock: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Kartu Statistik Ringkas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Total Produk</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{products.length} Item</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Status Sistem</p>
          <p className="text-2xl font-bold text-green-600 mt-1">Aktif & Normal</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Hak Akses</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">Administrator</p>
        </div>
      </div>

      {/* Form Tambah Produk */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Tambah Produk Baru</h2>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama Produk"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded-lg text-sm focus:outline-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Harga (Rp)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border p-2 rounded-lg text-sm focus:outline-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Stok"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            className="border p-2 rounded-lg text-sm focus:outline-blue-500"
            required
          />
          <button
            type="submit"
            className="sm:col-span-3 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Simpan Produk
          </button>
        </form>
      </div>

      {/* Tabel Daftar Produk */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b font-bold text-gray-800">Daftar Inventaris Produk</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                <th className="p-3">Nama Produk</th>
                <th className="p-3">Harga</th>
                <th className="p-3">Stok</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">{p.name}</td>
                  <td className="p-3 text-blue-600">Rp {p.price.toLocaleString()}</td>
                  <td className="p-3 text-gray-600">{p.stock} unit</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-xs bg-red-50 hover:bg-red-100 px-3 py-1 rounded transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}