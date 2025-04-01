import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy user data (Replace with actual user data)
  const user = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/100', // Replace with real image URL
  };

  const [activeTab, setActiveTab] = useState('profile');

  // Handle Logout
  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div className="flex min-h-screen mt-30 bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex flex-col items-center">
          <img src={user.image} alt="Profile" className="w-20 h-20 rounded-full" />
          <h2 className="text-lg font-bold mt-3">{user.name}</h2>
        </div>
        <nav className="mt-6 space-y-2">
          <button
            className={`w-full text-left p-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('profile')}
          >
            My Profile
          </button>
          <button
            className={`w-full text-left p-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button
            className={`w-full text-left p-2 rounded ${activeTab === 'password' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
          <button
            className="w-full text-left p-2 text-red-600 hover:bg-red-100 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'bookings' && <MyBookings />}
        {activeTab === 'password' && <ChangePassword />}
      </main>
    </div>
  );
};

const Profile = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold">My Profile</h2>
    <p className="mt-2 text-gray-600">This is your profile section.</p>
  </div>
);

const MyBookings = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold">My Bookings</h2>
    <p className="mt-2 text-gray-600">This is where your bookings will appear.</p>
  </div>
);

const ChangePassword = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold">Change Password</h2>
    <p className="mt-2 text-gray-600">Update your password here.</p>
  </div>
);

export default Dashboard;
