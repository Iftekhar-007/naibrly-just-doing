


import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { ChevronRight, CircleAlert, MessageSquareMore, ShieldCheck } from "lucide-react"; // For pending action icons
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"; // Recharts for the chart

// Pending Actions Component
const PendingActions = () => {
    const actions = [
        { title: "Verification", count: "12 providers awaiting verifications", color: "bg-green-100", action: "Review",icon:<ShieldCheck />,textcolor:"text-blue-300" },
        { title: "Support", count: "8 new chat", color: "bg-orange-100", action: "Respond",icon:<MessageSquareMore />,textcolor:"text-orange-200" },
        { title: "Reports", count: "5 new report", color: "bg-red-100", action: "Investigate",icon:<CircleAlert />,textcolor:"text-red-400" },
    ];

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="text-lg font-semibold">Pending Actions</div>
            <div className="flex flex-col gap-4">
                {actions.map((action, index) => (
                <div key={index} className={`p-4 rounded-lg ${action.color} flex items-center justify-between`}>
                    <div className="text-sm font-medium flex flex-row-reverse items-center gap-3">
                        <div>

                        
                       <p> {action.title} </p>
                       <span className="text-xs text-gray-600">{action.count} New</span>
                       </div>
                        <div className={`p-3 bg-white rounded-full ${action.textcolor}`}>
                            {action.icon}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <span className="text-xs text-gray-600">{action.count} New</span> */}
                        <Button variant="outline" className="px-3 py-1">
                            {action.action} <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

// Earnings Summary Component (with Recharts)
const EarningsSummaryChart = () => {
    const data = [
        { month: "May", earnings: 200000 },
        { month: "Jun", earnings: 180000 },
        { month: "Jul", earnings: 150000 },
        { month: "Aug", earnings: 170000 },
        { month: "Sep", earnings: 190000 },
        { month: "Oct", earnings: 220000 },
    ];

    return (
        <div className="w-full h-full">
            {/* Earnings AreaChart with Dark Green Border and Gradient Fill */}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#006400" /> {/* Dark Green Border */}
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="earnings"
                        stroke="#006400" // Dark Green Border color
                        fill="url(#earningsGradient)" // Gradient Fill
                    />
                </AreaChart>
            </ResponsiveContainer>
            {/* Gradient Definition */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="earningsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#82ca9d" />  {/* Green at the top */}
                        <stop offset="100%" stopColor="#ffffff" />  {/* White at the bottom */}
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

// Main Dashboard Component
const StatsDashboard = () => {
    return (
        <div className="flex gap-6 pt-6">
            {/* Left Section: Earnings Summary Chart (2/3 width) */}
            <div className="w-2/3 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Earning Summary</h2>
                <div className="flex justify-between mb-4">
                    <div className="text-sm text-gray-500">Mar 2022 - Oct 2022</div>
                    <Button variant="outline" size="sm">Last 6 months</Button>
                </div>
                <EarningsSummaryChart />
            </div>

            {/* Right Section: Pending Actions (1/3 width) */}
            <div className="w-1/3 bg-white p-6 rounded-lg shadow-sm">
                <PendingActions />
            </div>
        </div>
    );
};

export default StatsDashboard;
