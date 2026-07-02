//Components
import UpgradePlanButton from "../UpgradePlanButton/UpgradePlanButton";

//Rechart
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

//Styles
import { Wrapper } from "./PieChart.styles";

//Data
import { storageData } from "@/data/data";
import { legendItems } from "@/data/data";



const StorageCard = () => {
  return (
    <Wrapper>
      <div className="storage-card">
        {/* ── Left: Donut chart ── */}
        <div className="storage-chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={storageData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={85}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                labelLine={false}
                stroke="true"
                isAnimationActive={true}
              >
                {storageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Dashed blue ring */}
          <svg className="storage-chart-svg-overlay" viewBox="0 0 180 180">
            <circle
              cx="90"
              cy="90"
              r="52"
              fill="none"
              stroke="#0d02dc"
              strokeWidth="5"
              strokeDasharray="5 9"
              strokeLinecap="round"
            />
          </svg>

          {/* Center text */}
          <div className="storage-chart-center">
            <div className="storage-chart-center-value">80%</div>
            <div className="storage-chart-center-label">Used</div>
          </div>
        </div>

        {/* ── Right: Note + Legend + Button ── */}
        <div className="storage-right">
          {/* Note box */}
          <div className="storage-note">
            <div className="storage-note-header">
              <span className="storage-note-icon">!</span>
              <span className="storage-note-title">Note</span>
            </div>
            <p className="storage-note-text-primary">
              You've almost reached your limit
            </p>
            <p className="storage-note-text-secondary">
              You have used 80% of your available storage. Upgrade plan to
              access more space.
            </p>
          </div>

          {/* Legend */}
          <div className="storage-legend">
            {legendItems.map((item) => (
              <div key={item.name} className="storage-legend-item">
                <span
                  className={`storage-legend-swatch ${
                    item.color === "#f4f5f7"
                      ? "storage-legend-swatch--available"
                      : ""
                  }`}
                  style={{ background: item.color }}
                />
                <span className="storage-legend-label">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Upgrade button */}
          <div className="upgrade-button">
            <UpgradePlanButton />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StorageCard;
