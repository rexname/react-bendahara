const PaymentCard = ({ title, amount, icon: Icon, description }) => {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body p-4">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-primary text-primary-content">
            <Icon className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-2xl font-bold mt-1 text-primary-content">
              {amount.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            {description && (
              <p className="text-sm text-primary-content opacity-70 mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
