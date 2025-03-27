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
import Listing from './Ccmponets/Listing';
import ListingDetails from './Ccmponets/ListingDetails';
import ListingDetails3 from './Pages/ListingDetails3';
import ListingDetails11 from './Pages/ListingDetails11';
import ListingDetails12 from './Pages/ListingDetails12';
import ListingDetails13 from './Pages/ListingDetails13';
import ListingDetails14 from './Pages/ListingDetails14';
import ListingDetails15 from './Pages/ListingDetails15';
import ListingDetails16 from './Pages/ListingDetails16';
import ListingDetails17 from './Pages/ListingDetails17';
import ListingDetails18 from './Pages/ListingDetails18';
import ListingDetails19 from './Pages/ListingDetails19';
import Final from './Pages/Final'
import SignUp1 from './Pages/SignUp1';
import Dashboard from './Ccmponets/Dashboard';
import Wishlist from './Pages/Wishlist';
import Dashboard1 from './Pages/Dashboard1';
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';




function App() {
    
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);


  return (
    <>
      <div className='overflow-y-hidden   overflow-x-hidden'>
    {/* Navbar */}
    <div className='w-full h-[64px] fixed top-0 left-0 z-50'>
        <Navbar />
    </div>

    <div className="container mx-auto p-4">
        <Routes>
            <Route path="/" element={<Final />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/hairremoval" element={<HairRemoval />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup1" element={<SignUp1 />} />
            <Route path="/service" element={<Service />} />
            <Route path="/massage" element={<Massage/>} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/listing" element={<Listing />} />
            <Route path='/listingdetails' element= {<ListingDetails/>}/>
            <Route path='/listingdetails3' element= {<ListingDetails3/>}/>
            <Route path='/listingdetails11' element= {<ListingDetails11/>}/>
            <Route path='/listingdetails12' element= {<ListingDetails12/>}/>
            <Route path='/listingdetails13' element= {<ListingDetails13/>}/>
            <Route path='/listingdetails14' element= {<ListingDetails14/>}/>
            <Route path='/listingdetails15' element= {<ListingDetails15/>}/>
            <Route path='/listingdetails16' element= {<ListingDetails16/>}/>
            <Route path='/listingdetails17' element= {<ListingDetails17/>}/>
            <Route path='/listingdetails18' element= {<ListingDetails18/>}/>
            <Route path='/listingdetails19' element= {<ListingDetails19/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard1" element={user ? <Dashboard1 /> : <Navigate to="/login" />} />
            <Route path="/wishlist" element={< Wishlist />} />
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
