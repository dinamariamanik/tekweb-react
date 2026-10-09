import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden bg-white shadow p-4 flex justify-between items-center">
          <h1 className="font-bold text-lg text-blue-600">My Admin</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 border rounded-lg text-gray-600"
          >
            Menu
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
          2025 My Admin App v1.0.0
        </footer>
      </div>
    </div>
  );
}