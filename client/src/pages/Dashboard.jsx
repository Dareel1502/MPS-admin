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
import Map from "../components/Map";
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

function Dashboard() {
  const crimeStats = {
    currentYear: 1245,
    previousYear: 987,
    twoYearsAgo: 856,
    monthlyComparison: [45, 60, 75, 90, 110, 130, 145, 120, 95, 80, 65, 50],
    monthlyComparisonPrev: [40, 55, 70, 85, 100, 120, 135, 115, 90, 75, 60, 45],
    twoYearsAgoMonthly: [35, 50, 65, 75, 90, 105, 125, 110, 85, 70, 55, 40],
  };

  const activeUsers = 247;
  const pendingReports = 18;
  const resolvedReports = 1245 - 18;

  const weatherData = {
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12,
    icon: "🌤️",
  };

  const yearlyComparisonData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Total Crime Reports",
        data: [
          crimeStats.twoYearsAgo,
          crimeStats.previousYear,
          crimeStats.currentYear,
        ],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(99, 102, 241, 0.7)",
          "rgba(99, 102, 241, 0.7)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(99, 102, 241, 1)",
        ],
        borderWidth: 1,
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
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Police Department Dashboard
        </h1>
        <p className="text-gray-600">Real-time monitoring and analytics</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Weather Conditions
              </h2>
              <p className="text-gray-500">Current patrol conditions</p>
            </div>
            <span className="text-4xl">{weatherData.icon}</span>
          </div>
          <div className="mt-4">
            <div className="text-5xl font-bold text-gray-800">
              {weatherData.temperature}°C
            </div>
            <div className="text-gray-600 mt-2">{weatherData.condition}</div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="font-medium">{weatherData.humidity}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Wind Speed</p>
                <p className="font-medium">{weatherData.wind} km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Active Police Mobile Users
          </h2>
          <p className="text-gray-500">Currently logged in officers</p>
          <div className="mt-4">
            <div className="text-5xl font-bold text-blue-600">
              {activeUsers}
            </div>
            <div className="mt-2">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                +12% from yesterday
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800">Crime Reports</h2>
          <p className="text-gray-500">Current status</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Reports</p>
              <p className="text-3xl font-bold text-gray-800">
                {crimeStats.currentYear}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">
                {pendingReports}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Resolved</p>
              <p className="text-3xl font-bold text-green-600">
                {resolvedReports}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Resolution Rate</p>
              <p className="text-3xl font-bold text-blue-600">
                {Math.round((resolvedReports / crimeStats.currentYear) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Yearly Crime Report Comparison
        </h2>
        <p className="text-gray-500 mb-4">
          Total reports for the past three years
        </p>
        <div className="h-80">
          <Bar data={yearlyComparisonData} options={chartOptions} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">2021</p>
            <p className="text-2xl font-bold">{crimeStats.twoYearsAgo}</p>
            <p className="text-xs text-gray-500">-13.3% from 2022</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">2022</p>
            <p className="text-2xl font-bold">{crimeStats.previousYear}</p>
            <p className="text-xs text-green-500">+15.3% from 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">2023</p>
            <p className="text-2xl font-bold">{crimeStats.currentYear}</p>
            <p className="text-xs text-red-500">+26.2% from 2022</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold">MPS RODRIGUEZ MAPS</h2>
        <p className="text-gray-500 mb-4">Real-time Monitoring Maps</p>
        <Map />
      </div>
    </div>
  );
}

export default Dashboard;
