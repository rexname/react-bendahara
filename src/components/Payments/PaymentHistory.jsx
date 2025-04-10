import { FiDollarSign, FiCheckCircle, FiClock } from "react-icons/fi";

// Export payments array for reuse
export const payments = [
  {
    id: 1,
    type: "SPP",
    student: "Andi Wijaya (NIS001)",
    amount: 500000,
    date: "2023-10-15",
    status: "completed",
    month: "Oktober 2023",
  },
  {
    id: 2,
    type: "Daftar Ulang",
    student: "Budi Santoso (NIS002)",
    amount: 1500000,
    date: "2023-10-10",
    status: "completed",
    year: "2023/2024",
  },
  {
    id: 3,
    type: "SPP",
    student: "Citra Dewi (NIS003)",
    amount: 250000,
    date: "2023-10-05",
    status: "pending",
    month: "Oktober 2023",
  },
];

const PaymentHistory = () => {
  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-primary-content">Riwayat Pembayaran</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Murid</th>
                <th>Detail</th>
                <th>Jumlah</th>
                <th>Tanggal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-base-300">
                  <td>{payment.type}</td>
                  <td>{payment.student}</td>
                  <td>
                    {payment.type === "SPP" ? payment.month : payment.year}
                  </td>
                  <td>
                    <div className="flex items-center">
                      <FiDollarSign className="mr-1" />
                      {payment.amount.toLocaleString("id-ID")}
                    </div>
                  </td>
                  <td>{new Date(payment.date).toLocaleDateString("id-ID")}</td>
                  <td>
                    <span
                      className={`badge ${
                        payment.status === "completed"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {payment.status === "completed" ? (
                        <FiCheckCircle className="mr-1 bg-success rounded-2xl w-5 h-5 text-success-content" />
                      ) : (
                        <FiClock className="mr-1 bg-warning w-5 h-5 text-warning-content rounded-2xl" />
                      )}
                      {payment.status === "completed" ? "Lunas" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
