// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar.jsx'
// import ScrollToTop from './components/ScrollToTop.jsx'

// import Home from './pages/Home.jsx'
// import Websites from './pages/Websites.jsx'
// import Events from './pages/Events.jsx'
// import About from './pages/About.jsx'

// import GahraaiyanDigital from './pages/GahraaiyanDigital.jsx'
// import Gahraaiyanin from './pages/Gahraaiyanin.jsx'
// import PropertyRace from './pages/PropertyRace.jsx'
// import GahraaiyanTransport from './pages/GahraaiyanTransport.jsx'
// import GahraaiyanProductions from './pages/GahraaiyanProductions.jsx'

// /* ADMIN PAGES */
// import Login from './pages/admin/Login.jsx'
// import Dashboard from './pages/admin/Dashboard.jsx'

// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   return (
//     <Router>

//       <ScrollToTop />

//       <div className="min-h-screen bg-[#171123]">

//         <Navbar />

//         {/* FULL WIDTH CONTENT */}
//         <main className="w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10">

//           <Routes>

//             {/* Main Pages */}
//             <Route path="/" element={<Home />} />
//             <Route path="/websites" element={<Websites />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/about" element={<About />} />

//             {/* Website Detail Pages */}
//             <Route path="/gahraaiyan-digital" element={<GahraaiyanDigital />} />
//             <Route path="/gahraaiyan-in" element={<Gahraaiyanin />} />
//             <Route path="/property-race" element={<PropertyRace />} />
//             <Route path="/gahraaiyan-transport" element={<GahraaiyanTransport />} />
//             <Route path="/gahraaiyan-productions" element={<GahraaiyanProductions />} />


//             {/* ADMIN ROUTES */}
//             <Route path="/admin/login" element={<Login />} />

//             <Route
//               path="/admin/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />

//           </Routes>

//         </main>

//       </div>

//     </Router>
//   )
// }

// export default App









import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Websites from './pages/Websites.jsx'
import Events from './pages/Events.jsx'
import About from './pages/About.jsx'

import GahraaiyanDigital from './pages/GahraaiyanDigital.jsx'
import Gahraaiyanin from './pages/Gahraaiyanin.jsx'
import PropertyRace from './pages/PropertyRace.jsx'
import GahraaiyanTransport from './pages/GahraaiyanTransport.jsx'
import GahraaiyanProductions from './pages/GahraaiyanProductions.jsx'

/* ADMIN PAGES */
import Login from './pages/admin/Login.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>

      <ScrollToTop />

      {/* GLOBAL LAYOUT */}
      <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] font-[Outfit]">

        <Navbar />

        {/* FULL WIDTH CONTENT */}
        <main className="
          w-full
          px-4 sm:px-6 lg:px-10
          pt-[100px]   /* 🔥 navbar space fix */
          pb-10
        ">

          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />

            {/* Website Detail Pages */}
            <Route path="/gahraaiyan-digital" element={<GahraaiyanDigital />} />
            <Route path="/gahraaiyan-in" element={<Gahraaiyanin />} />
            <Route path="/property-race" element={<PropertyRace />} />
            <Route path="/gahraaiyan-transport" element={<GahraaiyanTransport />} />
            <Route path="/gahraaiyan-productions" element={<GahraaiyanProductions />} />

            {/* ADMIN ROUTES */}
            <Route path="/admin/login" element={<Login />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

          </Routes>

        </main>

      </div>

    </Router>
  )
}

export default App