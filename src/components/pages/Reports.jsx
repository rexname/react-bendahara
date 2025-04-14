// src/components/pages/Reports.jsx
import { FiDownload, FiPrinter } from "react-icons/fi";

/**
 * Reports page component
 */
const Reports = () => {
  // Sample report data
  const reports = [
    {
      id: 1,
      title: "Laporan UTS Semester 1",
      type: "Ujian",
      date: "2023-10-15",
      downloadCount: 124,
    },
    {
      id: 2,
      title: "Laporan Perkembangan Siswa",
      type: "Bulanan",
      date: "2023-10-01",
      downloadCount: 89,
    },
    {
      id: 3,
      title: "Laporan Kehadiran September",
      type: "Bulanan",
      date: "2023-09-30",
      downloadCount: 102,
    },
    {
      id: 4,
      title: "Laporan Ekstrakurikuler",
      type: "Semester",
      date: "2023-08-15",
      downloadCount: 76,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">Laporan</h2>
        <button className="btn btn-primary mt-4 md:mt-0">
          Buat Laporan Baru
        </button>
      </div>

      {/* Reports list */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="card-body p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-primary">
                    {report.title}
                  </h3>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-primary-content opacity-70">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>
                      {new Date(report.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{report.downloadCount} kali diunduh</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="btn btn-outline">
                    <FiDownload className="mr-2" />
                    Unduh
                  </button>
                  <button className="btn btn-outline">
                    <FiPrinter className="mr-2" />
                    Cetak
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
