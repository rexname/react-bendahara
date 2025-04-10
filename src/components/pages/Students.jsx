// src/components/pages/Students.jsx
import { FiSearch, FiPlus } from "react-icons/fi";
import { useState } from "react";
import AddStudentModal from "../Students/AddStudentModal";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      nis: "NIS001",
      name: "Andi Wijaya",
      class: "X IPA 1",
      status: "active",
      email: "andi@email.com",
      phone: "081234567890",
    },
    {
      id: 2,
      nis: "NIS002",
      name: "Budi Santoso",
      class: "X IPA 2",
      status: "active",
      email: "budi@email.com",
      phone: "081234567891",
    },
    {
      id: 3,
      nis: "NIS003",
      name: "Citra Dewi",
      class: "X IPA 1",
      status: "active",
      email: "citra@email.com",
      phone: "081234567892",
    },
    {
      id: 4,
      nis: "NIS004",
      name: "Dian Pratama",
      class: "X IPS 1",
      status: "inactive",
      email: "dian@email.com",
      phone: "081234567893",
    },
    {
      id: 5,
      nis: "NIS005",
      name: "Eka Putri",
      class: "X IPA 3",
      status: "active",
      email: "eka@email.com",
      phone: "081234567894",
    },
  ]);

  // Fungsi untuk menambahkan murid baru
  const handleAddStudent = (newStudent) => {
    const student = {
      id: Date.now(),
      nis: newStudent.nis,
      name: newStudent.name,
      class: newStudent.class,
      status: "active",
      email: newStudent.email,
      phone: newStudent.phone,
    };
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div className="space-y-6">
      {/* Modal Tambah Murid */}
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddStudent={handleAddStudent}
      />

      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-base-content">List Murid</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary mt-4 md:mt-0 inline-flex items-center"
        >
          <FiPlus className="mr-2" />
          Tambah Murid
        </button>
      </div>

      {/* Search and filter */}
      <div className="bg-base-100 p-4 rounded-xl shadow-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-neutral-content" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-neutral rounded-md leading-5 bg-base-100 placeholder-neutral-content focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Cari murid..."
          />
        </div>
      </div>

      {/* Students table */}
      <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral">
            <thead className="bg-base-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-content uppercase tracking-wider"
                >
                  NIS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-content uppercase tracking-wider"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-content uppercase tracking-wider"
                >
                  Kelas
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-content uppercase tracking-wider"
                >
                  Kontak
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-content uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Aksi</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-base-100 divide-y divide-neutral">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-base-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-content">
                    {student.nis}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                        {student.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-content">
                          {student.name}
                        </div>
                        <div className="text-sm text-neutral-content">
                          {student.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-content">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-content">
                    {student.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        student.status === "active"
                          ? "bg-success text-success-content"
                          : "bg-neutral text-neutral-content"
                      }`}
                    >
                      {student.status === "active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-primary-focus mr-3">
                      Edit
                    </button>
                    <button className="text-error hover:text-error-focus">
                      Hapus
                    </button>
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

export default Students;
