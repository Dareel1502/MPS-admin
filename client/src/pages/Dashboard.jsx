import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';


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
    icon: "🌤️"
  };


  const yearlyComparisonData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Total Crime Reports',
        data: [crimeStats.twoYearsAgo, crimeStats.previousYear, crimeStats.currentYear],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(99, 102, 241, 0.7)',
          'rgba(99, 102, 241, 0.7)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(99, 102, 241, 1)',
          'rgba(99, 102, 241, 1)'
        ],
        borderWidth: 1,
      }
    ]
  };


  const monthlyComparisonData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021',
        data: crimeStats.twoYearsAgoMonthly,
        borderColor: 'rgba(156, 163, 175, 1)',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: '2022',
        data: crimeStats.monthlyComparisonPrev,
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: '2023',
        data: crimeStats.monthlyComparison,
        borderColor: 'rgba(79, 70, 229, 1)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      }
    ]
  };


  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Reports'
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Police Department Dashboard</h1>
        <p className="text-gray-600">Real-time monitoring and analytics</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
  
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Weather Conditions</h2>
              <p className="text-gray-500">Current patrol conditions</p>
            </div>
            <span className="text-4xl">{weatherData.icon}</span>
          </div>
          <div className="mt-4">
            <div className="text-5xl font-bold text-gray-800">{weatherData.temperature}°C</div>
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
          <h2 className="text-xl font-semibold text-gray-800">Active Police Mobile Users</h2>
          <p className="text-gray-500">Currently logged in officers</p>
          <div className="mt-4">
            <div className="text-5xl font-bold text-blue-600">{activeUsers}</div>
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
              <p className="text-3xl font-bold text-gray-800">{crimeStats.currentYear}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">{pendingReports}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Resolved</p>
              <p className="text-3xl font-bold text-green-600">{resolvedReports}</p>
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Yearly Crime Report Comparison</h2>
        <p className="text-gray-500 mb-4">Total reports for the past three years</p>
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Monthly Crime Trends</h2>
        <p className="text-gray-500 mb-4">Comparison of monthly reports over three years</p>
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

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Reports</h3>
          <p className="text-gray-500 text-sm mb-4">Last 5 incidents</p>
          <div className="space-y-3">
            {[
              { id: 1, type: "Burglary", time: "12:45 PM", status: "Pending", location: "Downtown" },
              { id: 2, type: "Traffic Accident", time: "11:30 AM", status: "Assigned", location: "Main St" },
              { id: 3, type: "Disturbance", time: "10:15 AM", status: "Resolved", location: "Park Ave" },
              { id: 4, type: "Suspicious Activity", time: "9:40 AM", status: "Pending", location: "Northside" },
              { id: 5, type: "Vandalism", time: "8:20 AM", status: "Assigned", location: "South Mall" },
            ].map(report => (
              <div key={report.id} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <div className="flex justify-between">
                  <span className="font-medium">{report.type}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    report.status === 'Assigned' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{report.location}</span>
                  <span>{report.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800">Patrol Status</h3>
          <p className="text-gray-500 text-sm mb-4">Current unit deployment</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Available Units</span>
                <span>12/24</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Response Time Avg</span>
                <span>8.2 min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Area Coverage</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Dispatch Overview
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800">Crime by Category</h3>
          <p className="text-gray-500 text-sm mb-4">Current year distribution</p>
          <div className="h-64 flex items-center justify-center">
           
            <div className="text-center text-gray-400">
              <p>Pie Chart Visualization</p>
              <p className="text-sm">(Would show crime categories)</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { category: "Theft", percentage: 35, color: "bg-blue-500" },
              { category: "Assault", percentage: 25, color: "bg-red-500" },
              { category: "Vandalism", percentage: 15, color: "bg-yellow-500" },
              { category: "Burglary", percentage: 12, color: "bg-green-500" },
              { category: "Other", percentage: 13, color: "bg-gray-500" },
            ].map((item, index) => (
              <div key={index} className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>{item.category}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;