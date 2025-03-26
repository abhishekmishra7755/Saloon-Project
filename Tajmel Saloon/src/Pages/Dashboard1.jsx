import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="p-4">
      {user ? (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold">Welcome, {user.name}!</h2>
          <img src={user.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mt-2" />
          <p>Email: {user.email || "N/A"}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
