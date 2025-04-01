import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dg2 from '../assets/img/dg2.png'; // Replace with actual image import

const Dashboard = () => {
  const navigate = useNavigate();
// Removed unused onhandle function

  // Dummy user data (Replace with actual user data)
  const user = {
    name: 'abhi',
    image: dg2 // Replace with real image URL
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
            className={`w-full text-left   cursor-pointer   p-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('profile')}
          >
            My Profile
          </button>
          <button
            className={`w-full text-left  cursor-pointer  p-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button
            className={`w-full text-left  cursor-pointer p-2 rounded ${activeTab === 'password' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
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



const ChangePassword = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold">Change Password</h2>
    <p className="mt-2 text-gray-600">Update your password here.</p>
  </div>
);

export default Dashboard;
