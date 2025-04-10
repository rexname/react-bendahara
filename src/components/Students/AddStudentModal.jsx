// src/components/Students/AddStudentModal.jsx
import {
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
  FiCalendar,
  FiX,
  FiToggleRight,
  FiToggleLeft,
} from "react-icons/fi";
import { useState } from "react";

/**
 * Modal untuk menambahkan murid baru
 * @param {boolean} isOpen - Status modal terbuka/tutup
 * @param {function} onClose - Fungsi untuk menutup modal
 * @param {function} onAddStudent - Fungsi untuk menambahkan murid baru
 */
const AddStudentModal = ({ isOpen, onClose, onAddStudent }) => {
  const [formData, setFormData] = useState({
    nis: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    class: "X IPA 1",
    gender: "Laki-laki",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderToggle = () => {
    setFormData((prev) => ({
      ...prev,
      gender: prev.gender === "Laki-laki" ? "Perempuan" : "Laki-laki",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    onClose();
    // Reset form
    setFormData({
      nis: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      birthDate: "",
      class: "Kelas 1",
      gender: "Laki-laki",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-base-100 bg-opacity-50 flex items-center justify-center z-50 p-4 h-full">
      <div className="bg-base-200 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-neutral">
          <h3 className="text-xl font-semibold text-primary">
            Tambah Murid Baru
          </h3>
          <button
            onClick={onClose}
            className="text-primary transition-colors hover:text-primary-content"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NIS */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                NIS (Nomor Induk Siswa)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-secondary-content" />
                </div>
                <input
                  type="text"
                  name="nis"
                  value={formData.nis}
                  onChange={handleChange}
                  className="input input-primary input-xl w-full text-xl py-2 pl-10"
                  placeholder="NIS12345"
                  required
                />
              </div>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-primary input-xl w-full text-xl py-2"
                placeholder="Nama murid"
                required
              />
            </div>

            {/* Gender Toggle */}
            <div className="md:col-span-2">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-medium text-secondary">
                  Jenis Kelamin
                </span>
                <div className="cursor-pointer" onClick={handleGenderToggle}>
                  {formData.gender === "Laki-laki" ? (
                    <FiToggleRight className="text-primary text-2xl" />
                  ) : (
                    <FiToggleLeft className="text-secondary-content text-2xl" />
                  )}
                </div>
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-secondary-content" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-primary input-xl w-full text-xl py-2 pl-10"
                  placeholder="email@contoh.com"
                  required
                />
              </div>
            </div>

            {/* Nomor Telepon */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Nomor Telepon
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-secondary-content" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-primary input-xl w-full text-xl py-2 pl-10"
                  placeholder="62******"
                  required
                />
              </div>
            </div>

            {/* Alamat */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-1">
                Alamat
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="input input-primary input-xl w-full text-xl py-2"
                placeholder="Alamat lengkap"
                required
              />
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Tanggal Lahir
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="h-5 w-5 text-secondary-content" />
                </div>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="input input-primary input-xl w-full text-xl py-2 pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-neutral rounded-md shadow-sm text-sm font-medium text-base-content bg-base-100 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-content bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base"
            >
              Simpan Murid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
