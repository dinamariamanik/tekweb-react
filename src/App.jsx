import { Routes, Route, Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import { useCart } from './utils/CartContext';

function Home() {
  const products = [
    { id: 1, name: "Laptop Gaming Pro", price: 15000000, slug: "laptop-gaming-pro", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Mechanical Keyboard RGB", price: 750000, slug: "mechanical-keyboard-rgb", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Wireless Mouse Ergonomic", price: 300000, slug: "wireless-mouse-ergonomic", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daftar Produk</h2>
        <Link to="/admin/dashboard" className="text-sm bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition">
          Buka Admin Panel &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}

function MainLayout() {
  const { totalQty } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="text-xl font-bold text-blue-600">TekWeb Store</Link>
        <Link to="/cart" className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium transition">
          🛒 Keranjang: <span className="font-bold">{totalQty}</span> item
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}