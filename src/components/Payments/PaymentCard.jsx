const PaymentCard = ({ title, amount, icon: Icon, description }) => {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body p-4">
        <div className="flex items-center ">
          <div className="p-2 rounded-full bg-primary text-primary-content text-center items-center">
            <Icon className="h-4 w-4" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-xl font-bold mt-1 text-primary-content">
              {amount.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
            <p
              className={`text-sm text-primary-content mt-1 ${
                description ? "opacity-70" : "opacity-0"
              }`}
            >
              {description ? description : "Deskripsi tidak tersedia"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
