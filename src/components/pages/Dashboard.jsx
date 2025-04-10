// src/components/pages/Dashboard.jsx
import { useState } from "react";
import {
  FiUsers,
  FiCreditCard,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import StatsCard from "../Dashboard/StatsCard";
import RecentReports from "../Dashboard/RecentReports";
import StudentProgress from "../Dashboard/StudentProgress";
// import SppInput from "../Dashboard/SppInput";
import SppList from "../Dashboard/SppList";

const Dashboard = () => {
  const [sppPayments, setSppPayments] = useState([]);

  // Fungsi untuk menangani submit pembayaran SPP
  const handleSppSubmit = (data) => {
    const newPayment = {
      id: Date.now(),
      student: {
        id: "NIS" + Math.floor(Math.random() * 1000),
        name: "Murid Baru",
      }, // Contoh data
      amount: parseInt(data.amount),
      month: data.month,
      year: data.year,
      paymentDate: data.paymentDate,
      status: data.amount >= 500000 ? "Lunas" : "Cicilan",
    };

    setSppPayments((prev) => [newPayment, ...prev]);
  };

  // Fungsi untuk edit data SPP
  const handleEditSpp = (payment) => {
    console.log("Edit payment:", payment);
    // Implementasi edit sesuai kebutuhan
  };

  // Fungsi untuk hapus data SPP
  const handleDeleteSpp = (id) => {
    setSppPayments((prev) => prev.filter((payment) => payment.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Pembayaran"
          value="Rp 120.000.000"
          icon={FiDollarSign}
          trend="up"
          trendValue="10.5"
        />
        <StatsCard
          title="Pembayaran Tertunda"
          value="Rp 15.000.000"
          icon={FiCreditCard}
          trend="down"
          trendValue="3.2"
        />
        <StatsCard
          title="Murid Aktif"
          value="124"
          icon={FiUsers}
          trend="up"
          trendValue="2.1"
        />
        <StatsCard
          title="Kenaikan Pembayaran"
          value="15%"
          icon={FiTrendingUp}
          trend="up"
          trendValue="5.0"
        />
      </div>

      {/* Input Pembayaran SPP */}
      {/* <SppInput onSubmit={handleSppSubmit} /> */}

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Progress Chart */}
        <div className="lg:col-span-2 space-y-6">
          <StudentProgress />
          <SppList
            payments={sppPayments}
            onEdit={handleEditSpp}
            onDelete={handleDeleteSpp}
          />
        </div>

        {/* Recent Reports */}
        <div>
          <RecentReports />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
