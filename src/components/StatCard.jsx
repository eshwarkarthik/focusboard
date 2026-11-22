
import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-card-top">
        <div className="stat-card-icon">
          <Icon size={21} />
        </div>

        <ArrowUpRight size={18} className="stat-card-arrow" />
      </div>

      <div className="stat-card-info">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default StatCard;
