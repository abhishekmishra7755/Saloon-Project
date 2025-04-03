import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dg2 from '../assets/img/dg2.png'; // Replace with actual image import
import MyProfile from '../Pages/MyProfile';

const Dashboard = () => {
  const navigate = useNavigate();


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
            className={`w-full text-left   cursor-pointer   p-2 rounded ${activeTab === 'myprofile' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('MyProfile')}
          >
            My Profile
          </button>
          <button
            className={`w-full text-left  cursor-pointer  p-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('Bookings')}
          >
            My Bookings
          </button>
          <button
            className={`w-full text-left  cursor-pointer p-2 rounded ${activeTab === 'changepassword' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('ChangePassword ')}
         
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
        {activeTab === 'profile' && <MyProfile/>}
        {activeTab === 'bookings' && <Bookings />}
        {activeTab === 'password' && <ChangePassword />}
      </main>
    </div>
  );
};
export default Dashboard;
