// src/pages/Pembayaran.jsx
import { FiDollarSign, FiCreditCard, FiBook, FiList } from "react-icons/fi";
import {
  DaftarUlangForm,
  SppPaymentForm,
  PaymentHistory,
  PaymentCard,
} from "../Payments";

const Pembayaran = () => {
  // Data statistik pembayaran
  const paymentStats = [
    {
      title: "Total Pembayaran",
      amount: 12500000,
      icon: FiDollarSign,
      description: "",
    },
    {
      title: "Daftar Ulang",
      amount: 3000000,
      icon: FiCreditCard,
      description: "3 Murid",
    },
    {
      title: "SPP Bulan Ini",
      amount: 7500000,
      icon: FiBook,
      description: "15 Murid",
    },
    {
      title: "Tertunggak",
      amount: 2000000,
      icon: FiList,
      description: "4 Murid",
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary-content">
          Manajemen Pembayaran
        </h1>
      </div>

      {/* Statistik Pembayaran */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {paymentStats.map((stat, index) => (
          <PaymentCard key={index} {...stat} />
        ))}
      </div>

      {/* Form Pembayaran */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DaftarUlangForm />
        <SppPaymentForm />
      </div>

      {/* Riwayat Pembayaran */}
      <PaymentHistory />
    </div>
  );
};

export default Pembayaran;
