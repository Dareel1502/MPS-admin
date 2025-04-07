import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Monitoring = () => {
  const crimeStats = {
    currentYear: 1245,
    previousYear: 987,
    twoYearsAgo: 856,
    monthlyComparison: [45, 60, 75, 90, 110, 130, 145, 120, 95, 80, 65, 50],
    monthlyComparisonPrev: [40, 55, 70, 85, 100, 120, 135, 115, 90, 75, 60, 45],
    twoYearsAgoMonthly: [35, 50, 65, 75, 90, 105, 125, 110, 85, 70, 55, 40],
  };

  const monthlyComparisonData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2021",
        data: crimeStats.twoYearsAgoMonthly,
        borderColor: "rgba(156, 163, 175, 1)",
        backgroundColor: "rgba(156, 163, 175, 0.1)",
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: "2022",
        data: crimeStats.monthlyComparisonPrev,
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: "2023",
        data: crimeStats.monthlyComparison,
        borderColor: "rgba(79, 70, 229, 1)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Reports",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h2 className="text-center text-2xl font-bold">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Real-Time Monitoring Status
          </h2>
          <p className="text-gray-500 mb-4">Total Officers on Rodriguez MPS</p>
          <div className="h-80"></div>
          <div className="mt-4 grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-black-500">4+</p>

              <p className="text-xs text-gray-500">Unavailable Officcer </p>
            </div>
            <div>
              <p className="text-sm text-black-500">4+</p>
              <p className="text-xs text-blue-500">Available Officcer </p>
            </div>
            <div>
              <p className="text-sm text-black-500">4+</p>
              <p className="text-xs text-green-500">Active Officer</p>
            </div>
            <div>
              <p className="text-sm text-black-500">4+</p>
              <p className="text-xs text-red-500">Inactive Officer</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Monthly Crime Trends
          </h2>
          <p className="text-gray-500 mb-4">
            Comparison of monthly reports over three years
          </p>
          <div className="h-80">
            <Line data={monthlyComparisonData} options={chartOptions} />
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
              <span className="text-sm">2023</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">2022</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm">2021</span>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default Monitoring;
