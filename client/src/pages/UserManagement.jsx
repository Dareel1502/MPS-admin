import React from "react";

const UserManagement = () => {
  const activeUsers = 247;
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h2 className="text-center text-2xl font-bold">
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
      </h2>
    </div>
  );
};

export default UserManagement;
