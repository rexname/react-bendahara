// src/components/Dashboard/RecentReports.jsx
import { FiFileText } from "react-icons/fi";

/**
 * Component displaying recent reports
 * @param {Array} reports - Array of report objects
 */
const RecentReports = ({ reports = [] }) => {
  // Sample data if none provided
  const sampleReports = [
    {
      id: 1,
      title: "Laporan UTS Semester 1",
      date: "2023-10-15",
      status: "completed",
    },
    {
      id: 2,
      title: "Laporan Perkembangan Siswa",
      date: "2023-10-10",
      status: "pending",
    },
    {
      id: 3,
      title: "Laporan Kehadiran Oktober",
      date: "2023-10-05",
      status: "completed",
    },
  ];

  const data = reports.length > 0 ? reports : sampleReports;

  const statusColors = {
    completed: "bg-success text-success-content",
    pending: "bg-warning text-warning-content",
  };

  return (
    <div className="bg-base-200 rounded-xl shadow-sm p-6 h-">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary">Laporan Terbaru</h3>
        <button className="text-sm text-primary transition-colors hover:text-primary-content">
          Lihat Semua
        </button>
      </div>

      <div className="space-y-4">
        {data.map((report) => (
          <div key={report.id} className="flex items-start">
            <div className="p-2 rounded-lg bg-base-300 text-content mr-4">
              <FiFileText className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-secondary">{report.title}</h4>
              <p className="text-sm text-secondary-content mt-1">
                {new Date(report.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                statusColors[report.status]
              }`}
            >
              {report.status === "completed" ? "Selesai" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReports;
