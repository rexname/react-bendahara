import {
  FiDollarSign,
  FiCalendar,
  FiUser,
  FiBook,
  FiSave,
  FiUpload,
} from "react-icons/fi";
import { useState } from "react";

const SppPaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    month: "",
    year: new Date().getFullYear(),
    amount: "",
    paymentDate: new Date().toISOString().split("T")[0],
    paymentMethod: "",
    paymentProof: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      paymentProof: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData({
      studentId: "",
      month: "",
      year: new Date().getFullYear(),
      amount: "",
      paymentDate: new Date().toISOString().split("T")[0],
      paymentMethod: "",
      paymentProof: null,
    });
  };

  const needsProof =
    formData.paymentMethod && formData.paymentMethod !== "Tunai";

  return (
    <div className="bg-base-200 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        <FiBook className="inline mr-2" />
        Pembayaran SPP
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input NIS/Nama Murid */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              NIS/Nama Murid
            </label>
            <label className="input w-full h-max">
              <FiUser className="text-secondary-content" />
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                placeholder="Cari dengan NIS atau nama"
                required
              />
            </label>
          </div>

          {/* Input Metode Pembayaran (Baru) */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Metode Pembayaran
            </label>
            <label className="w-full h-max">
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                required
              >
                <option value="">Pilih Metode</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Tunai">Tunai</option>
                <option value="E-Wallet">E-Wallet</option>
              </select>
            </label>
          </div>

          {/* Input Bulan Pembayaran */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Bulan Pembayaran
            </label>
            <label className="w-full h-max">
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                required
              >
                <option value="">Pilih Bulan</option>
                <option value="Januari">Januari</option>
                <option value="Februari">Februari</option>
                <option value="Maret">Maret</option>
                <option value="April">April</option>
                <option value="Mei">Mei</option>
                <option value="Juni">Juni</option>
                <option value="Juli">Juli</option>
                <option value="Agustus">Agustus</option>
                <option value="September">September</option>
                <option value="Oktober">Oktober</option>
                <option value="November">November</option>
                <option value="Desember">Desember</option>
              </select>
            </label>
          </div>

          {/* Input Tahun */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Tahun
            </label>
            <label className="input w-full h-max">
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                placeholder="2023"
                min="2000"
                max="2100"
                required
              />
            </label>
          </div>

          {/* Input Jumlah */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Jumlah
            </label>
            <label className="input w-full h-max">
              <FiDollarSign className="text-secondary-content" />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                placeholder="500000"
                required
              />
            </label>
          </div>
          {/* Upload Bukti Pembayaran */}
          {needsProof && (
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Bukti Pembayaran
              </label>
              <label className="input w-full h-max">
                <FiUpload className="text-secondary-content" />
                <input
                  type="file"
                  name="paymentProof"
                  onChange={handleFileChange}
                  className="input input-primary input-xl w-full text-xl py-2"
                  accept="image/*,.pdf"
                  required
                />
              </label>
            </div>
          )}
          {/* Input Tanggal Pembayaran */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Tanggal Pembayaran
            </label>
            <label className="input w-full h-max">
              <FiCalendar className="text-secondary-content" />
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                required
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-content bg-secondary transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base"
        >
          <FiSave className="mr-2" />
          Bayar SPP
        </button>
      </form>
    </div>
  );
};

export default SppPaymentForm;
