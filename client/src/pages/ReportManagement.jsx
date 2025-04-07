import React from "react";

const ReportManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Recent Reports
          </h3>
          <p className="text-gray-500 text-sm mb-4">Last 5 incidents</p>
          <div className="space-y-3">
            {[
              {
                id: 1,
                type: "Burglary",
                time: "12:45 PM",
                status: "Pending",
                location: "Downtown",
              },
              {
                id: 2,
                type: "Traffic Accident",
                time: "11:30 AM",
                status: "Assigned",
                location: "Main St",
              },
              {
                id: 3,
                type: "Disturbance",
                time: "10:15 AM",
                status: "Resolved",
                location: "Park Ave",
              },
              {
                id: 4,
                type: "Suspicious Activity",
                time: "9:40 AM",
                status: "Pending",
                location: "Northside",
              },
              {
                id: 5,
                type: "Vandalism",
                time: "8:20 AM",
                status: "Assigned",
                location: "South Mall",
              },
            ].map((report) => (
              <div
                key={report.id}
                className="border-b border-gray-100 pb-2 last:border-0 last:pb-0"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{report.type}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      report.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : report.status === "Assigned"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
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
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Response Time Avg</span>
                <span>8.2 min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Area Coverage</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: "78%" }}
                ></div>
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
          <h3 className="text-lg font-semibold text-gray-800">
            Crime by Category
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Current year distribution
          </p>
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
                  <div
                    className={`${item.color} h-1.5 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportManagement;
