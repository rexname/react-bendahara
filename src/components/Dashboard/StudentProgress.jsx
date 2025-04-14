// src/components/Dashboard/StudentProgress.jsx
/**
 * Component displaying payment progress with chart
 */
const StudentProgress = () => {
  // Sample data for the chart
  const paymentData = [
    { month: "Jan", value: 80 },
    { month: "Feb", value: 90 },
    { month: "Mar", value: 70 },
    { month: "Apr", value: 85 },
    { month: "Mei", value: 60 },
    { month: "Jun", value: 50 },
    { month: "Jul", value: 40 },
    { month: "Agt", value: 30 },
    { month: "Sep", value: 20 },
    { month: "Okt", value: 10 },
    { month: "Nov", value: 0 },
    { month: "Des", value: 0 },
  ];

  const maxValue = Math.max(...paymentData.map((item) => item.value));

  return (
    <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow p-6 h-max">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Pembayaran SPP dan Daftar Ulang
      </h3>

      <div className="flex items-end justify-between space-x-2 h-max mt-6">
        {paymentData
          .filter((item) => item.value > 0)
          .map((item, index) => {
            const height = Math.round((item.value / maxValue) * 35);
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-secondary rounded-t-lg transition-all duration-300 hover:bg-secondary-content"
                  style={{ height: `${height}ex` }}
                />
                <span className="text-xs text-primary mt-2">{item.month}</span>
                <span className="text-xs font-medium mt-1 text-primary-content">
                  {item.value}%
                </span>
              </div>
            );
          })}
      </div>

      <div className="mt-6 pt-4 border-t border-neutral">
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-sm text-primary">Rata-rata Pembayaran</p>
            <p className="text-xl font-bold text-primary-content">65%</p>
          </div>
          <div>
            <p className="text-sm text-primary">Murid Aktif</p>
            <p className="text-xl font-bold text-primary-content">124</p>
          </div>
          <div>
            <p className="text-sm text-primary">Kenaikan</p>
            <p className="text-xl font-bold text-green-500">+15%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
