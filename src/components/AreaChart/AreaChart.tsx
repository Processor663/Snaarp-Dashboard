import  type { ReactNode } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { GoArrowDown } from "react-icons/go";
import { Wrapper } from "./AreaChart.styles";

//Types
import type { DashboardStat } from "@/data/data";

export type UsersCardProps = DashboardStat & {
  icon: ReactNode;
};

const UsersCard = ({
  title,
  total,
  trend,
  percentage,
  chartData,
  icon,
}: UsersCardProps) => {
  return (
    <Wrapper trend={trend}>
      <div className="stat-card">
        <div className="stat-card-header">
          <span className="stat-icon">{icon}</span>
          <span className="stat-card-label">{title}</span>
        </div>

        <div className="stat-card-body">
          <div className="stat-card-info">
            <div className="stat-card-value">
              <div>{total}</div>
              <div className="stat-card-change">
                <GoArrowDown />
                <span>{percentage}</span>
              </div>
            </div>
            <div className="stat-card-compare">Compared to last week</div>
          </div>

          <div className="stat-card-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient
                    id={`gradient-${title}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={trend === "down" ? "#e34948" : "#05b116"}
                      stopOpacity={0.3}
                    />

                    <stop
                      offset="100%"
                      stopColor={trend === "down" ? "#e34948" : "#05b116"}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <Area
                  dataKey="value"
                  stroke={trend === "down" ? "#e34948" : "#05b116"}
                  fill={`url(#gradient-${title})`}
                  strokeWidth={1}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UsersCard;
