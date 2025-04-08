import React from "react";

const UserManagement = () => {
  const activeUsers = 247;

  return (
    <div className="flex justify-between min-h-screen bg-gray-100 p-4 md:p-8 ">
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100 min-w-1/3 mx-4 min-h-min">
        <h2 className="text-xl font-semibold text-gray-800">
          Active Police Mobile Users
        </h2>
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
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100 w-full mx-4 min-h-min">
        <h3 className="text-lg font-semibold text-gray-800">OFFICERS STATUS</h3>

        <div className="space-y-3">
          {[
            {
              id: 1,
              name: "Juan",
              rank: "PO1",
              status: "Deployed",
              location: "San Isidro",
            },
            {
              id: 2,
              name: "Pedro",
              rank: "PO1",
              status: "Assigned",
              location: "San Jose",
            },
            {
              id: 3,
              name: "Peter",
              rank: "PO1",
              status: "Assigned",
              location: "Riverside",
            },
            {
              id: 4,
              name: "Lagrimas",
              rank: "PO1",
              status: "Pending",
              location: "Jala-jala",
            },
            {
              id: 5,
              name: "Market",
              rank: "PO1",
              status: "Assigned",
              location: "Kasiglahan",
            },
          ].map((report) => (
            <div
              key={report.id}
              className="border-b border-gray-100 pb-2 last:border-0 "
            >
              <div className="flex justify-between">
                <span className="font-semibold">{report.name}</span>
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
                <span>{report.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
