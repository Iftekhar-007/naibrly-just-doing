import React from "react";
import StatsSection from "../../../components/dashboardcomponents/dashboardOverview/StatsSection";
import PaymentHistory from "@/components/dashboardcomponents/payment/PaymentHistory";
import StatsDashboard from "@/components/dashboardcomponents/dashboardOverview/StatsDashboard";
import DashPayment from "@/components/dashboardcomponents/dashboardOverview/DashPayment";

const DashboardOverview = () => {
  return (
    <div>
      <StatsSection />
      <StatsDashboard></StatsDashboard>
      {/* <PaymentHistory></PaymentHistory> */}
      <DashPayment></DashPayment>
    </div>
  );
};

export default DashboardOverview;
