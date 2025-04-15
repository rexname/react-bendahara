import {
  FiDollarSign,
  FiCalendar,
  FiUser,
  FiCreditCard,
  FiSave,
  FiUpload,
  FiInfo,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const DaftarUlangForm = ({ onSubmit, studentData }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    amount: "",
    academicYear: "",
    paymentMethod: "",
    paymentDate: new Date().toISOString().split("T")[0],
    paymentProof: null,
  });

  const [remainingAmount, setRemainingAmount] = useState(0);

  // Simulasi mendapatkan sisa pembayaran daftar ulang ketika studentId berubah
  useEffect(() => {
    if (formData.studentId && studentData) {
      // Cari data siswa berdasarkan ID
      const student = studentData.find(
        (s) =>
          s.id === formData.studentId || s.name.includes(formData.studentId)
      );
      if (student && student.remainingRegistration) {
        setRemainingAmount(student.remainingRegistration);
      } else {
        setRemainingAmount(0);
      }
    } else {
      setRemainingAmount(0);
    }
  }, [formData.studentId, studentData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
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
      amount: "",
      academicYear: "",
      paymentMethod: "",
      paymentDate: new Date().toISOString().split("T")[0],
      paymentProof: null,
    });
  };

  const needsProof =
    formData.paymentMethod && formData.paymentMethod !== "Tunai";

  return (
    <div className="bg-base-200 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        <FiCreditCard className="inline mr-2" />
        Pembayaran Daftar Ulang
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
            {/* Label untuk sisa pembayaran */}
            {remainingAmount > 0 && (
              <div className="mt-1 flex items-center text-accent">
                <FiInfo className="mr-1" />
                <span className="text-sm">
                  Sisa yang harus dibayar: Rp{" "}
                  {remainingAmount.toLocaleString("id-ID")}
                </span>
              </div>
            )}
          </div>

          {/* Tahun Ajaran */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Tahun Ajaran
            </label>
            <label className="w-full h-max">
              <select
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                required
              >
                <option value="">Pilih Tahun</option>
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2025">2024/2025</option>
              </select>
            </label>
          </div>

          {/* Metode Pembayaran */}
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

          {/* Input Tanggal Pembayaran */}
          <div className={needsProof ? "md:col-span-1" : "md:col-span-2"}>
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
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-content bg-secondary transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base"
        >
          <FiSave className="mr-2" />
          Proses Pembayaran
        </button>
      </form>
    </div>
  );
};

export default DaftarUlangForm;
