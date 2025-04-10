// src/components/Dashboard/StatsCard.jsx
/**
 * Statistic card component for dashboard
 * @param {string} title - Card title
 * @param {string|number} value - Main value to display
 * @param {string} icon - Icon component
 * @param {string} trend - Trend direction ('up' or 'down')
 * @param {string} trendValue - Trend percentage
 * @param {string} [className] - Additional CSS classes
 */
import { FiTrendingDown } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  className = "",
}) => {
  const trendColors = {
    up: "text-success",
    down: "text-error",
  };

  return (
    <div className={`bg-base-200 rounded-xl shadow-sm p-6 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-primary">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 rounded-lg bg-base-300 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      {trend && (
        <div
          className={`mt-4 flex items-center text-sm gap-1 ${trendColors[trend]}`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          <span>{trendValue}% dari bulan lalu</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
