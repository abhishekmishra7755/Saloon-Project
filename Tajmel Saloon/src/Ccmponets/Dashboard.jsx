import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Settings, LogOut, BarChart2 } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen mt-20 bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} transition-transform duration-300 md:relative md:translate-x-0`}>
        <div className="p-5 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Dashboard</h1>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="mt-5">
          <Link to="/" className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-200">
            <Home className="w-5 h-5 mr-2" /> Home
          </Link>
          <Link to="/profile" className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-200">
            <User className="w-5 h-5 mr-2" /> Profile
          </Link>
          <Link to="/analytics" className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-200">
            <BarChart2 className="w-5 h-5 mr-2" /> Analytics
          </Link>
          <Link to="/settings" className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-200">
            <Settings className="w-5 h-5 mr-2" /> Settings
          </Link>
          <button className="flex items-center px-5 py-3 text-red-600 hover:bg-red-100 w-full">
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center space-x-3">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
            <span className="text-gray-700 font-medium">John Doe</span>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-700">Welcome Back, John!</h1>
          <p className="text-gray-500 mt-1">Here's an overview of your recent activity.</p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center">
              <h2 className="text-3xl font-bold text-blue-600">12</h2>
              <p className="text-gray-600">New Messages</p>
            </div>
            <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center">
              <h2 className="text-3xl font-bold text-green-600">5</h2>
              <p className="text-gray-600">New Notifications</p>
            </div>
            <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center">
              <h2 className="text-3xl font-bold text-yellow-600">3</h2>
              <p className="text-gray-600">Pending Tasks</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
            <ul className="mt-3 space-y-2">
              <li className="text-gray-600"> Completed Task: Design UI for Dashboard</li>
              <li className="text-gray-600"> Received a message from Mike</li>
              <li className="text-gray-600">Updated Profile Information</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
