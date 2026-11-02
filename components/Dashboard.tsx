"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface DashboardProps {
  data: {
    Diet_type: string;
    Recipe_name: string;
    Cuisine_type: string;
  }[];
}

export default function Dashboard({ data }: DashboardProps) {
  // Count recipes per diet type for the chart
  const counts: { [key: string]: number } = {};
  data.forEach((item) => {
    const diet = item.Diet_type || "Other";
    counts[diet] = (counts[diet] || 0) + 1;
  });

  const chartData = Object.keys(counts).map((diet) => ({
    dietName: diet,
    count: counts[diet],
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">Nova Diet Analytics Dashboard</h1>
        <p className="text-gray-600 mt-1">Total Recipes Loaded: {data.length}</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recipes per Diet Type</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dietName" angle={-15} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}