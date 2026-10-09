import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block w-64 bg-white shadow-md flex-shrink-0`}
    >
      <div className="p-4 font-bold text-xl text-blue-600 border-b">My Admin</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/admin/dashboard" className="hover:bg-gray-100 p-2 rounded font-medium text-gray-700">
          Dashboard
        </Link>
        <Link to="/admin/about" className="hover:bg-gray-100 p-2 rounded font-medium text-gray-700">
          About
        </Link>
        <Link to="/" className="hover:bg-red-50 p-2 rounded font-medium text-red-600 mt-4 border-t">
          &larr; Keluar ke Web Utama
        </Link>
      </nav>
    </div>
  );
}