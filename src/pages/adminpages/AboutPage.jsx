export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">About Admin Panel</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Tentang Aplikasi</h2>
        <p className="text-gray-600 leading-relaxed">
          TekWeb Store Admin Panel adalah sistem manajemen back-office yang dirancang khusus untuk mempermudah pengelolaan produk, pemantauan inventaris toko, serta pengontrolan data secara real-time.
        </p>
        
        <div className="border-t pt-4 mt-4">
          <h3 className="text-md font-semibold text-gray-800 mb-2">Informasi Sistem</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li><strong>Versi Aplikasi:</strong> v1.0.0</li>
            <li><strong>Framework:</strong> React + Vite & Tailwind CSS</li>
            <li><strong>Developer:</strong> Mahasiswa Ilmu Komputer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}