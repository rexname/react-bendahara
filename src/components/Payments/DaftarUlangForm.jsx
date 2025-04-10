import { FiDollarSign, FiCalendar, FiUser, FiCreditCard } from "react-icons/fi";

const DaftarUlangForm = () => {
  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-primary-content">
          <FiCreditCard className="mr-2" />
          Pembayaran Daftar Ulang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input NIS/Nama */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">
                NIS/Nama Murid
              </span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FiUser className="text-base-content" />
              </div>
              <input
                type="text"
                placeholder="Cari dengan NIS atau nama"
                className="input input-bordered w-full pl-10 bg-base-100 border-base-300 text-base-content"
              />
            </div>
          </div>

          {/* Jumlah Pembayaran */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">
                Jumlah Pembayaran
              </span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FiDollarSign className="text-base-content" />
              </div>
              <input
                type="number"
                placeholder="500000"
                className="input input-bordered w-full pl-10 bg-base-100 border-base-300 text-base-content"
              />
            </div>
          </div>

          {/* Tahun Ajaran */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Tahun Ajaran</span>
            </label>
            <select className="select select-bordered bg-base-100 border-base-300 text-base-content">
              <option disabled selected>
                Pilih Tahun
              </option>
              <option>2023/2024</option>
              <option>2024/2025</option>
            </select>
          </div>

          {/* Metode Pembayaran */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">
                Metode Pembayaran
              </span>
            </label>
            <select className="select select-bordered bg-base-100 border-base-300 text-base-content">
              <option disabled selected>
                Pilih Metode
              </option>
              <option>Transfer Bank</option>
              <option>Tunai</option>
              <option>E-Wallet</option>
            </select>
          </div>

          {/* Tanggal Pembayaran */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text text-base-content">
                Tanggal Pembayaran
              </span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FiCalendar className="text-base-content" />
              </div>
              <input
                type="date"
                className="input input-primary input-xl w-full pl-10 bg-base-100 border-base-300 text-base-content"
              />
            </div>
          </div>
        </div>

        <div className="card-actions justify-end mt-6">
          <button className="btn btn-secondary">
            <FiDollarSign className="mr-2" />
            Proses Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaftarUlangForm;
