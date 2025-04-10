import { FiDollarSign, FiCalendar, FiUser, FiBook } from "react-icons/fi";

const SppPaymentForm = () => {
  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-primary-content">
          <FiBook className="mr-2" />
          Pembayaran SPP
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

          {/* Bulan Pembayaran */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">
                Bulan Pembayaran
              </span>
            </label>
            <select className="select select-bordered bg-base-100 border-base-300 text-base-content">
              <option disabled selected>
                Pilih Bulan
              </option>
              <option>Januari</option>
              <option>Februari</option>
              <option>Maret</option>
              {/* ... bulan lainnya */}
            </select>
          </div>

          {/* Tahun */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Tahun</span>
            </label>
            <input
              type="number"
              placeholder="2023"
              className="input input-bordered bg-base-100 border-base-300 text-base-content"
            />
          </div>

          {/* Jumlah */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Jumlah</span>
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
          <button className="btn btn-primary">
            <FiDollarSign className="mr-2" />
            Bayar SPP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SppPaymentForm;
