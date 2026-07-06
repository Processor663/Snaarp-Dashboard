// <AppShell>
//   <Sidebar />
//   <MainContent>
//     <TopBar />
//     <CloudNetworkSection>
//       <StatCardGrid />       {/* Users, Groups, Uploads, Departments */}
//       <StorageDonutChart />
//     </CloudNetworkSection>
//     <ChartsRow>
//       <FileSharingBarChart />
//       <ActiveUsersMap />
//     </ChartsRow>
//     <DeviceManagementSection>
//       <StatCardGrid />
//       <DeviceDetailsRow />
//     </DeviceManagementSection>
//     <ProductivitySection>
//       <StatCardGrid />
//       <EmailDonutChart />
//       <TotalEmailLineChart />
//     </ProductivitySection>
//     <TablesSection />
//   </MainContent>
// </AppShell>

import { MdDashboard, MdDevices, MdStorage } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { TbReport, TbReportAnalytics } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import type { IconType } from "react-icons/lib";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { MdOutlineContactSupport } from "react-icons/md";

// ============================================================
// Snaarp Dashboard — Complete Mock Data
// ============================================================

export type AsideItemProps = {
  label: string;
  icon: IconType;
  path?: string;
};

export const asideItemData: AsideItemProps[] = [
  { label: "Dashboard", icon: MdDashboard, path: "/" },
  {
    label: "Organization & Reg.",
    icon: HiOfficeBuilding,
    path: "organization",
  },
  { label: "Reporting", icon: TbReport, path: "reporting" },
  { label: "Billing", icon: RiBillLine, path: "billing" },
  { label: "Account", icon: AiOutlineUser, path: "account" },
  { label: "Storage", icon: MdStorage, path: "storage" },
  { label: "Settings", icon: IoSettingsOutline, path: "settings" },
  { label: "Device Management", icon: MdDevices, path: "device" },
  {
    label: "Productivity Report",
    icon: TbReportAnalytics,
    path: "productivity",
  },
];

type AsideBottomItem = Omit<AsideItemProps, "path">;
export const asideBottomItems: AsideBottomItem[] = [
  { label: "User Panel", icon: HiOutlineChartBar },
  { label: "Support", icon: MdOutlineContactSupport },
];

// ─── CLOUD NETWORK ──────────────────────────────────────────

// Sparkline trend data
export type ChartDataPoint = {
  value: number;
};

export type DashboardStat = {
  title: string;
  total: string;
  trend: "up" | "down";
  percentage: string;
  chartData: ChartDataPoint[];
};

export type DashboardStatsResponse = {
  [key: string]: DashboardStat;
};

export const usersSparklineData: DashboardStatsResponse = {
  users: {
    title: "User",
    total: "3,836",
    trend: "down",
    percentage: "15%",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },
  groups: {
    title: "Groups",
    total: "316",
    trend: "up",
    percentage: "23%",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },
  uploads: {
    title: "Uploads",
    total: "316",
    trend: "up",
    percentage: "23%",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },
  departments: {
    title: "Departments",
    total: "316",
    trend: "down",
    percentage: "23%",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },
};

//Storage Summary
interface StorageSegment {
  name: string;
  value: number;
  color: string;
}

interface LegendItem {
  name: string;
  color: string;
}

export const storageData: StorageSegment[] = [
  { name: "Available Space", value: 20, color: "#f4f5f7" },
  { name: "Files", value: 18, color: "#de03f1" },
  { name: "Miscellaneous", value: 11, color: "#0d02dc" },
  { name: "Videos", value: 18, color: "#0fde16" },
  { name: "Folders", value: 14, color: "#faac03" },
  { name: "Audios", value: 16, color: "#f52710" },
  { name: "Apps", value: 20, color: "#1499ec" },
];

export const legendItems: LegendItem[] = [
  { name: "Files", color: "#de03f1" },
  { name: "Folders", color: "#faac03" },
  { name: "Videos", color: "#0fde16" },
  { name: "Apps", color: "#1499ec" },
  { name: "Audios", color: "#f52710" },
  { name: "Miscellaneous", color: "#0d02dc" },
  { name: "Available Space", color: "#f4f5f7" },
];

// ─── FILE SHARING ────────────────────────────────────────────

export const fileSharingData = [
  { month: "JAN", public: 40, anyone: 25, org: 15 },
  { month: "FEB", public: 55, anyone: 30, org: 20 },
  { month: "MAR", public: 60, anyone: 35, org: 18 },
  { month: "APR", public: 45, anyone: 28, org: 22 },
  { month: "MAY", public: 90, anyone: 50, org: 30 },
  { month: "JUN", public: 80, anyone: 55, org: 35 },
  { month: "JUL", public: 70, anyone: 45, org: 28 },
  { month: "AUG", public: 65, anyone: 40, org: 25 },
  { month: "SEP", public: 75, anyone: 48, org: 32 },
  { month: "OCT", public: 85, anyone: 52, org: 38 },
  { month: "NOV", public: 78, anyone: 46, org: 30 },
  { month: "DEC", public: 68, anyone: 42, org: 26 },
];

// ─── ACTIVE USERS BY COUNTRY ─────────────────────────────────

export interface ActiveUser {
  id: string;
  name: string;
  lat: number;
  lng: number;
  color: string;
}

export const activeUsers: ActiveUser[] = [
  { id: "1", name: "Stanley", lat: 13.0385, lng: 80.2101, color: "#4C5FE8" },
  { id: "2", name: "Chisom", lat: 13.035, lng: 80.2135, color: "#3EA845" },
  { id: "3", name: "Samuel", lat: 13.033, lng: 80.2075, color: "#EA4335" },
];

export const activeUsersByCountry = [
  { country: "United Kingdom", code: "GB", percent: 78 },
  { country: "Nigeria", code: "NG", percent: 61 },
  { country: "UAE", code: "AE", percent: 40 },
  { country: "Canada", code: "CA", percent: 59 },
  { country: "United States", code: "US", percent: 78 },
];

// Active Users by Country - progress bar data
export interface CountryData {
  code: string; // ISO 3166-1 alpha-2, lowercase
  name: string;
  percentage: number;
}

export const countryData: CountryData[] = [
  { code: "gb", name: "United Kingdom", percentage: 78 },
  { code: "ng", name: "Nigeria", percentage: 61 },
  { code: "ae", name: "UAE", percentage: 45 },
  { code: "ca", name: "Canada", percentage: 59 },
  { code: "us", name: "United States of America", percentage: 78 },
];

// ─── DEVICE MANAGEMENT ──────────────────────────────────────

export const deviceStats: DashboardStatsResponse = {
  numberOfDevices: {
    title: "Number of Devices",
    total: "3,836",
    percentage: "15%",
    trend: "up",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },
  users: {
    title: "Users",
    total: "3,836",
    percentage: "15%",
    trend: "down",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },
  emails: {
    title: "Emails",
    total: "316",
    percentage: "23%",
    trend: "down",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },
  numberOfApps: {
    title: "Number of Apps",
    total: "316",
    percentage: "23%",
    trend: "down",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },
  numberOfDownloads: {
    title: "Number of Downloads",
    total: "316",
    percentage: "23%",
    trend: "up",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },
};

// ─── PRODUCTIVITY REPORT ─────────────────────────────────────

export const productivityReport: DashboardStatsResponse = {
  hoursProductivity: {
    title: "Hours Productivity",
    total: "576 Hrs",
    trend: "down",
    percentage: "15%",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },

  daysActivity: {
    title: "Days Activity",
    total: "267 Days",
    trend: "up",
    percentage: "15%",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },

  users: {
    title: "Users",
    total: "3,836",
    trend: "down",
    percentage: "15%",
    chartData: [
      { value: 90 },
      { value: 85 },
      { value: 82 },
      { value: 80 },
      { value: 83 },
      { value: 75 },
      { value: 60 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 30 },
      { value: 20 },
      { value: 15 },
      { value: 5 },
    ],
  },

  webActivity: {
    title: "Web Activity",
    total: "178 Activities",
    trend: "up",
    percentage: "15%",
    chartData: [
      { value: 5 },
      { value: 15 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 40 },
      { value: 40 },
      { value: 60 },
      { value: 75 },
      { value: 83 },
      { value: 80 },
      { value: 82 },
      { value: 85 },
      { value: 90 },
    ],
  },
};

//=========Email Chart==============================//
export interface TooltipDataPoint {
  sent: number;
  received: number;
  unsent: number;
  total: number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: TooltipDataPoint;
  }[];
}

export const monthlyEmailData = [
  { month: "JAN", sent: 1200, received: 200, unsent: 10, total: 330 },
  { month: "FEB", sent: 140, received: 220, unsent: 12, total: 372 },
  { month: "MARCH", sent: 15000, received: 210, unsent: 8, total: 348 },
  { month: "APR", sent: 160, received: 240, unsent: 15, total: 415 },
  { month: "MAY", sent: 300, received: 480, unsent: 20, total: 800 },
  { month: "JUN", sent: 340, received: 520, unsent: 48, total: 878 },
  { month: "JUL", sent: 583, received: 932, unsent: 32, total: 1747 },
  { month: "AUG", sent: 1600, received: 2900, unsent: 60, total: 4560 },
  { month: "SEP", sent: 1750, received: 3100, unsent: 55, total: 4905 },
  { month: "OCT", sent: 1900, received: 3300, unsent: 70, total: 5270 },
  { month: "NOV", sent: 1850, received: 3200, unsent: 65, total: 5115 },
  { month: "DEC", sent: 2000, received: 3400, unsent: 80, total: 5480 },
];
