// src/components/Dashboard/SppInput.jsx
import {
  FiDollarSign,
  FiCalendar,
  FiSave,
  FiUpload,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";
import { useState } from "react";

/**
 * Komponen untuk input pembayaran SPP
 * @param {function} onSubmit - Fungsi yang dipanggil saat form disubmit
 */
const SppInput = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    amount: "",
    month: "",
    year: new Date().getFullYear(),
    paymentDate: new Date().toISOString().split("T")[0],
    isTransfer: false,
    paymentProof: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    onSubmit(formData);
    setFormData({
      studentId: "",
      amount: "",
      month: "",
      year: new Date().getFullYear(),
      paymentDate: new Date().toISOString().split("T")[0],
      isTransfer: false,
      paymentProof: null,
    });
  };

  return (
    <div className="bg-base-200 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Input Pembayaran SPP
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input NIS/Nama Murid */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              NIS/Nama Murid
            </label>
            <label className="input w-full h-max">
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

          {/* Input Jumlah Pembayaran */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Jumlah Pembayaran
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

          {/* Input Bulan */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Untuk Bulan
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
                min="2000"
                max="2100"
                className="input input-primary input-xl w-full text-xl py-2"
                required
              />
            </label>
          </div>

          {/* Input Tanggal Pembayaran */}
          <div className="md:col-span-2">
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

          {/* Toggle Transfer */}
          <div className="md:col-span-2">
            <label className="flex items-center space-x-3">
              <span className="text-sm font-medium text-secondary">
                Transfer
              </span>
              <div
                className="cursor-pointer"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    isTransfer: !prev.isTransfer,
                  }))
                }
              >
                {formData.isTransfer ? (
                  <FiToggleRight className="text-primary text-2xl" />
                ) : (
                  <FiToggleLeft className="text-secondary-content text-2xl" />
                )}
              </div>
            </label>
          </div>

          {/* Optional File Upload */}
          {formData.isTransfer && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-1">
                Bukti Pembayaran (Optional)
              </label>
              <label className="input w-full h-max">
                <FiUpload className="text-secondary-content" />
                <input
                  type="file"
                  name="paymentProof"
                  onChange={handleFileChange}
                  className="input input-primary input-xl w-full text-xl py-2"
                  accept="image/*"
                />
              </label>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-content bg-secondary transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base"
        >
          <FiSave className="mr-2" />
          Simpan Pembayaran
        </button>
      </form>
    </div>
  );
};

export default SppInput;
