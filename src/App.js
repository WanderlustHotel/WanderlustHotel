import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Rooms from './pages/rooms';
import Restaurant from './pages/restaurant';
import Spa from './pages/spa';
import Conference from './pages/conference';
import Vietnamonline from './pages/vietnamonline';
import Offers from './pages/offers';
import Explore from './pages/explore';
import Policies from './pages/policies';
import About from './pages/about';
import Bar from './pages/bar';
import Pool from './pages/pool';
import Meeting from './pages/meeting';
import Wedding from './pages/wedding';
import Footer from './components/footer';
import './App.css';
import SuperiorDoubleRoom from './roomList/SuperiorDoubleRoom';
import DeluxeKingDoubleRoom from './roomList/DeluxeKingDoubleRoom';
import DeluxeDoubleRoom from './roomList/DeluxeDoubleRoom';
import DeluxeTwinRoom from './roomList/DeluxeTwinRoom';
import SuiteExecutiveRoom from './roomList/SuiteExecutiveRoom';
import SuiteRoom from './roomList/SuiteRoom';
import SuperiorRoom3 from './roomList/SuperiorRoom3';
import SuperiorTwinRoom from './roomList/SuperiorTwinRoom';
import HeaderComponent from './components/HeaderComponent';

import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Things from './pages/Things';

export default function App() {
  return (
    <Router>
      {/* Header */}
      {/* <HeaderComponent /> */}
      
      <Routes>
        {/* Route không thuộc về main-content-container */}
        <Route path="/vietnamonline" element={<Vietnamonline />} />

        <Route
          path="*"
          element={
            <div className="main-content-container">
            <HeaderComponent />
              <main className="p-4">
                <Routes>
                  <Route path="/WanderlustHotel" element={<Homepage />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/spa" element={<Spa />} />
                  <Route path="/conference" element={<Conference />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/policies" element={<Policies />} />
                  <Route path="/pool" element={<Pool />} />
                  <Route path="/meeting" element={<Meeting />} />
                  <Route path="/wedding" element={<Wedding />} />
                  <Route path="/about" element={<About />} />

                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/things" element={<Things />} />

                  {/* Room Routes */}
                  <Route path="/rooms/DeluxeDoubleRoom" element={<DeluxeDoubleRoom />} />
                  <Route path="/rooms/DeluxeKingDoubleRoom" element={<DeluxeKingDoubleRoom />} />
                  <Route path="/rooms/DeluxeTwinRoom" element={<DeluxeTwinRoom />} />
                  <Route path="/rooms/SuiteExecutiveRoom" element={<SuiteExecutiveRoom />} />
                  <Route path="/rooms/SuiteRoom" element={<SuiteRoom />} />
                  <Route path="/rooms/SuperiorDoubleRoom" element={<SuperiorDoubleRoom />} />
                  <Route path="/rooms/SuperiorRoom3" element={<SuperiorRoom3 />} />
                  <Route path="/rooms/SuperiorTwinRoom" element={<SuperiorTwinRoom />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

