// src/components/ui/chartData.tsx

export interface DashboardChartPoint {
  month: string;
  revenue: number;
  orders: number;
  growth: number;
}

/**
 * Demo data for dashboard charts
 * NOTE: This is intentionally static and non-real
 * Used only for UI visualization / preview
 */
export const dashboardChartData: DashboardChartPoint[] = [
  { month: "Jan", revenue: 40, orders: 25, growth: 12 },
  { month: "Feb", revenue: 45, orders: 28, growth: 14 },
  { month: "Mar", revenue: 60, orders: 35, growth: 18 },
  { month: "Apr", revenue: 55, orders: 32, growth: 16 },
  { month: "May", revenue: 70, orders: 40, growth: 22 },
  { month: "Jun", revenue: 65, orders: 38, growth: 20 },
  { month: "Jul", revenue: 78, orders: 45, growth: 26 },
];
