// src/components/Dashboard/SppList.jsx
import {
  FiDollarSign,
  FiUser,
  FiCalendar,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

/**
 * Komponen untuk menampilkan daftar pembayaran SPP
 * @param {Array} payments - Array data pembayaran SPP
 * @param {function} onEdit - Fungsi ketika tombol edit diklik
 * @param {function} onDelete - Fungsi ketika tombol hapus diklik
 */
const SppList = ({ payments, onEdit, onDelete }) => {
  // Data contoh jika payments kosong
  const sampleData = [
    {
      id: 1,
      student: { id: "NIS001", name: "Andi Wijaya" },
      amount: 500000,
      month: "September",
      year: 2023,
      paymentDate: "2023-09-15",
      status: "Lunas",
    },
    {
      id: 2,
      student: { id: "NIS002", name: "Budi Santoso" },
      amount: 500000,
      month: "September",
      year: 2023,
      paymentDate: "2023-09-16",
      status: "Lunas",
    },
    {
      id: 3,
      student: { id: "NIS003", name: "Citra Dewi" },
      amount: 250000,
      month: "September",
      year: 2023,
      paymentDate: "2023-09-10",
      status: "Cicilan",
    },
  ];

  const data = payments?.length > 0 ? payments : sampleData;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden w-full">
      <div className="card-body p-6">
        <h3 className="text-lg font-semibold text-primary">
          Daftar Pembayaran SPP Terakhir
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral">
          <thead className="bg-base-300">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-primary-content uppercase tracking-wider"
              >
                Murid
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-primary-content uppercase tracking-wider"
              >
                Bulan/Tahun
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-primary-content uppercase tracking-wider"
              >
                Jumlah
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-primary-content uppercase tracking-wider"
              >
                Tanggal Bayar
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-primary-content uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-base-100 divide-y divide-neutral">
            {data.map((payment) => (
              <tr key={payment.id} className="hover:bg-base-300">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      <FiUser className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-primary">
                        {payment.student.name}
                      </div>
                      <div className="text-sm text-primary-content opacity-70">
                        {payment.student.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-primary">{payment.month}</div>
                  <div className="text-sm text-primary-content opacity-70">
                    {payment.year}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiDollarSign className="flex-shrink-0 h-4 w-4 text-primary-content opacity-70 mr-1" />
                    <span className="text-sm font-medium text-primary">
                      {formatCurrency(payment.amount)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiCalendar className="flex-shrink-0 h-4 w-4 text-primary-content opacity-70 mr-1" />
                    <span className="text-sm text-primary">
                      {new Date(payment.paymentDate).toLocaleDateString(
                        "id-ID"
                      )}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      payment.status === "Lunas"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEdit(payment)}
                    className="text-primary hover:text-primary-focus mr-3"
                  >
                    <FiEdit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(payment.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SppList;
