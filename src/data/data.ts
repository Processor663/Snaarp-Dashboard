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
  label: string,
  icon: IconType
}

export const asideItemData: AsideItemProps[] = [
  { label: "Dashboard", icon: MdDashboard },
  { label: "Organization & Reg.", icon: HiOfficeBuilding },
  { label: "Reporting", icon: TbReport },
  { label: "Billing", icon: RiBillLine },
  { label: "Account", icon: AiOutlineUser },
  { label: "Storage", icon: MdStorage },
  { label: "Settings", icon: IoSettingsOutline },
  { label: "Device Management", icon: MdDevices },
  { label: "Productivity Report", icon: TbReportAnalytics },
  
];

export const asideBottomItems: AsideItemProps[] = [
  { label: "User Panel", icon: HiOutlineChartBar },
  { label: "Support", icon: MdOutlineContactSupport },

]

// ─── CLOUD NETWORK ──────────────────────────────────────────

// Sparkline trend data 
export type ChartDataPoint = {
  value: number;
};

export type DashboardStat = {
  title: string,
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

export const activeUsersByCountry = [
  { country: "United Kingdom", code: "GB", percent: 78 },
  { country: "Nigeria", code: "NG", percent: 61 },
  { country: "UAE", code: "AE", percent: 40 },
  { country: "Canada", code: "CA", percent: 59 },
  { country: "United States", code: "US", percent: 78 },
];

export const activeUserMapPins = [
  { lat: 51.5074, lng: -0.1278, label: "London", color: "#6366f1" },
  { lat: 6.5244, lng: 3.3792, label: "Lagos", color: "#ef4444" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai", color: "#6366f1" },
  { lat: 43.6532, lng: -79.3832, label: "Toronto", color: "#6366f1" },
  { lat: 40.7128, lng: -74.006, label: "New York", color: "#6366f1" },
];

// ─── DEVICE MANAGEMENT ──────────────────────────────────────

export const deviceStats = {
  numberOfDevices: { value: 3836, change: 15, trend: "up" },
  users: { value: 3836, change: -15, trend: "down" },
  emails: { value: 316, change: -23, trend: "down" },
  numberOfApps: { value: 316, change: -23, trend: "down" },
  numberOfDownloads: { value: 316, change: 23, trend: "up" },
};

export const deviceBreakdown = {
  plugged: 1923,
  unplugged: 1913,
  active: 592,
  offline: 3836,
  sent: 592,
  received: 3836,
};

export const devicesByOS = [
  { os: "Windows", count: 1403, icon: "windows" },
  { os: "Mac", count: 632, icon: "apple" },
  { os: "Linux", count: 1801, icon: "linux" },
];

export const usersByScope = [
  { scope: "Organizations", count: 1403 },
  { scope: "Departments", count: 632 },
  { scope: "Groups", count: 1801 },
];

export const emailsByStatus = [
  { status: "Read", count: 1403 },
  { status: "Unread", count: 632 },
];

// Device sparklines (last 7 days)
export const deviceSparklines = {
  numberOfDevices: [3200, 3400, 3500, 3600, 3700, 3800, 3836],
  users: [3900, 3800, 3750, 3700, 3836, 3820, 3836],
  emails: [400, 380, 360, 340, 330, 320, 316],
  numberOfApps: [400, 380, 360, 340, 330, 320, 316],
  numberOfDownloads: [200, 220, 250, 270, 290, 310, 316],
};

// ─── PRODUCTIVITY REPORT ─────────────────────────────────────

export const productivityStats = {
  hoursProductivity: { value: 576, unit: "Hrs", change: -15, trend: "down" },
  daysActivity: { value: 267, unit: "Days", change: 15, trend: "up" },
  users: { value: 3836, unit: "", change: -15, trend: "down" },
  webActivity: { value: 178, unit: "Activities", change: 15, trend: "up" },
};

export const productivitySparklines = {
  hoursProductivity: [600, 590, 580, 575, 570, 573, 576],
  daysActivity: [230, 240, 250, 255, 260, 265, 267],
  users: [3900, 3870, 3850, 3840, 3836, 3838, 3836],
  webActivity: [150, 155, 160, 165, 170, 175, 178],
};

// ─── EMAIL ───────────────────────────────────────────────────

export const emailSummary = {
  totalSent: 5421,
  sent: 583,
  received: 932,
  unsent: 12,
  total: 1347,
};

export const totalEmailChartData = [
  { month: "JAN", sent: 300, received: 500, unsent: 8 },
  { month: "FEB", sent: 350, received: 550, unsent: 10 },
  { month: "MAR", sent: 400, received: 600, unsent: 12 },
  { month: "APR", sent: 380, received: 580, unsent: 9 },
  { month: "MAY", sent: 420, received: 620, unsent: 11 },
  { month: "JUN", sent: 500, received: 750, unsent: 15 },
  { month: "JUL", sent: 583, received: 932, unsent: 12 },
  { month: "AUG", sent: 450, received: 700, unsent: 10 },
  { month: "SEP", sent: 480, received: 720, unsent: 13 },
  { month: "OCT", sent: 510, received: 800, unsent: 14 },
  { month: "NOV", sent: 490, received: 780, unsent: 11 },
  { month: "DEC", sent: 460, received: 750, unsent: 10 },
];

// ─── ONLINE USERS TABLE ──────────────────────────────────────

export const onlineUsers = [
  {
    id: 1,
    name: "Annette Black",
    status: "online",
    location: "Ottawa, Canada",
    org: "MSBM, Ottawa",
    device: "Windows",
    activity: "Google Chrome",
    timeUsage: "3 hrs 12 min",
    avatar: "AB",
  },
  {
    id: 2,
    name: "Floyd Miles",
    status: "online",
    location: "Lagos, Nigeria",
    org: "MSBM, Lagos",
    device: "Windows",
    activity: "Instagram",
    timeUsage: "2 hrs 8 min",
    avatar: "FM",
  },
  {
    id: 3,
    name: "Ronald Richards",
    status: "offline",
    location: "Dubai, UAE",
    org: "MSBM, Dubai",
    device: "Mac",
    activity: "Microsoft Teams",
    timeUsage: "6 hrs 45 min",
    avatar: "RR",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    status: "offline",
    location: "London, UK",
    org: "MSBM, London",
    device: "Windows",
    activity: "Instagram",
    timeUsage: "1 hr 30 min",
    avatar: "GH",
  },
  {
    id: 5,
    name: "Jane Cooper",
    status: "online",
    location: "Frankfurt, Germany",
    org: "MSBM, Frankfurt",
    device: "Mac",
    activity: "Google Chrome",
    timeUsage: "9 hrs 10 min",
    avatar: "JC",
  },
  {
    id: 6,
    name: "Leslie Alexander",
    status: "offline",
    location: "Rome, Italy",
    org: "MSBM, Rome",
    device: "Windows",
    activity: "YouTube",
    timeUsage: "45 min",
    avatar: "LA",
  },
  {
    id: 7,
    name: "Annette Black",
    status: "offline",
    location: "Calgary, Canada",
    org: "MSBM, Calgary",
    device: "Linux",
    activity: "Opera Mini",
    timeUsage: "45 min",
    avatar: "AB",
  },
  {
    id: 8,
    name: "Floyd Miles",
    status: "offline",
    location: "Mumbai, India",
    org: "MSBM, Mumbai",
    device: "Mac",
    activity: "WhatsApp",
    timeUsage: "45 min",
    avatar: "FM",
  },
  {
    id: 9,
    name: "Cody Fisher",
    status: "online",
    location: "Lagos, Nigeria",
    org: "MSBM, Lagos",
    device: "Windows",
    activity: "Microsoft Teams",
    timeUsage: "45 min",
    avatar: "CF",
  },
  {
    id: 10,
    name: "Dianne Russell",
    status: "online",
    location: "London, UK",
    org: "MSBM, London",
    device: "Linux",
    activity: "YouTube",
    timeUsage: "45 min",
    avatar: "DR",
  },
];

// ─── APP ACTIVITY REPORT ─────────────────────────────────────

export const appActivityReport = [
  {
    app: "Google Chrome",
    totalUsers: 34,
    totalHours: "3 hrs 12 min",
    date: "2024-06-26 15:33:49",
  },
  {
    app: "YouTube",
    totalUsers: 12,
    totalHours: "2 hrs 8 min",
    date: "2024-05-26 12:45:41",
  },
  {
    app: "Microsoft Teams",
    totalUsers: 16,
    totalHours: "6 hrs 45 min",
    date: "2024-05-21 16:28:21",
  },
  {
    app: "WhatsApp",
    totalUsers: 49,
    totalHours: "1 hr 30 min",
    date: "2024-06-26 15:33:49",
  },
  {
    app: "Opera Mini",
    totalUsers: 3,
    totalHours: "9 hrs 10 min",
    date: "2024-05-21 16:28:21",
  },
  {
    app: "Instagram",
    totalUsers: 22,
    totalHours: "45 min",
    date: "2024-06-26 12:45:41",
  },
];

// ─── WEB ACTIVITY ────────────────────────────────────────────

export const webActivity = [
  { site: "Chrome", percent: 78, hours: "5 hrs 12 min", color: "#6366f1" },
  { site: "Gmail", percent: 61, hours: "2 hrs 24 min", color: "#10b981" },
  { site: "Firefox", percent: 45, hours: "40 min", color: "#f59e0b" },
  { site: "Instagram", percent: 78, hours: "5 hrs 6 min", color: "#ec4899" },
  { site: "X.com", percent: 59, hours: "1 hr 8 min", color: "#6b7280" },
  { site: "Facebook", percent: 61, hours: "3 hrs 1 min", color: "#3b82f6" },
];
