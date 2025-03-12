import './App.css'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Ccmponets/Navar'
import Hair from './Pages/Hair'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Blog from './Pages/Blog'
import HairRemoval from './Pages/HairRemoval'
import ContactUs from './Pages/ContactUs'
import Massage from './Pages/Massage'
import Service from './Pages/Service'
import Footer from './Ccmponets/Footer'
import Customer from './Pages/Customer '
import Professional from './Pages/Professional';





function App() {


  return (
    <>
      <div className='overflow-y-hidden'>
    {/* Navbar */}
    <div className='w-full h-[64px] fixed top-0 left-0 z-50'>
        <Navbar />
    </div>

    <div className="container mx-auto p-4">
        <Routes>
            <Route path="/" element={<Hair />} />
            <Route path="/hairremoval" element={<HairRemoval />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/service" element={<Service />} />
            <Route path="/massage" element={<Massage/>} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/professional" element={<Professional />} />
        </Routes>
    </div>

    {/* Footer or second Navbar */}
    <div className='ml-20 mt-15'>
          <Footer/>
        </div>
</div>
</>
  )
}

export default App
