// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/websites", label: "Websites" },
//   { to: "/events", label: "Events" },
//   { to: "/about", label: "About" },
// ];

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const token = localStorage.getItem("token");

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsOpen(false);
//     window.location.href = "/";
//   };

//   return (
//     <header
//       className="fixed top-0 print:hidden left-0 w-full z-50
//       bg-[#171123]/80 backdrop-blur-xl
//       border-b border-[#A663CC33]"
//     >

//       <div className="max-w-7xl mx-auto  py-4 px-2 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={closeMenu}
//           className="text-lg sm:text-xl md:text-2xl font-semibold text-[#EDE8F5] tracking-wide"
//         >
//           Gahraaiyan
//         </Link>


//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 lg:gap-10">

//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               className={({ isActive }) =>
//                 `relative text-xs sm:text-sm uppercase tracking-wider
//                 transition-all duration-300
//                 ${
//                   isActive
//                     ? "text-[#A663CC]"
//                     : "text-[#EDE8F580] hover:text-white"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <span className="relative group">

//                   {link.label}

//                   <span
//                     className={`absolute left-0 -bottom-2 h-px w-full
//                     bg-gradient-to-r from-transparent via-[#A663CC] to-transparent
//                     origin-center transition-transform duration-300
//                     ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />

//                 </span>
//               )}
//             </NavLink>
//           ))}

//           {/* ADMIN BUTTON */}

//           {!token ? (

//             <Link
//               to="/admin/login"
//               className="bg-[#A663CC] px-4 py-2 rounded-full text-xs uppercase tracking-wider
//               hover:bg-[#BC80D9] transition"
//             >
//               Admin Login
//             </Link>

//           ) : (

//             <div className="flex gap-3">

//               <Link
//                 to="/admin/dashboard"
//                 className="bg-green-600 px-4 py-2 rounded-full text-xs uppercase"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 px-4 py-2 rounded-full text-xs uppercase"
//               >
//                 Logout
//               </button>

//             </div>

//           )}

//         </nav>


//         {/* Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden flex flex-col gap-1.5 p-2"
//         >
//           <span
//             className={`h-0.5 w-6 bg-[#EDE8F5] transition-all
//             ${isOpen ? "rotate-45 translate-y-2" : ""}`}
//           />
//           <span
//             className={`h-0.5 w-6 bg-[#EDE8F5] transition-all
//             ${isOpen ? "opacity-0" : ""}`}
//           />
//           <span
//             className={`h-0.5 w-6 bg-[#EDE8F5] transition-all
//             ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
//           />
//         </button>

//       </div>


//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300
//         ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
//       >

//         <nav className="flex flex-col px-6 pb-6 gap-2 bg-[#171123] border-t border-[#A663CC33]">

//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 `text-sm uppercase tracking-wide transition-all duration-300
//                 py-3 px-4 rounded-lg
//                 ${
//                   isActive
//                     ? "text-[#A663CC] bg-[#A663CC22]"
//                     : "text-[#EDE8F580] hover:text-white hover:bg-[#221832]"
//                 }`
//               }
//             >
//               {link.label}
//             </NavLink>
//           ))}

//           {!token ? (

//             <Link
//               to="/admin/login"
//               onClick={closeMenu}
//               className="mt-3 bg-[#A663CC] text-center py-3 rounded-lg"
//             >
//               Admin Login
//             </Link>

//           ) : (

//             <>
//               <Link
//                 to="/admin/dashboard"
//                 onClick={closeMenu}
//                 className="mt-3 bg-green-600 text-center py-3 rounded-lg"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 py-3 rounded-lg"
//               >
//                 Logout
//               </button>
//             </>

//           )}

//         </nav>

//       </div>

//     </header>
//   );
// };

// export default Navbar;










// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/websites", label: "Websites" },
//   { to: "/events", label: "Events" },
//   { to: "/about", label: "About" },
// ];

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);
//   const token = localStorage.getItem("token");

//   const closeMenu = () => setIsOpen(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsOpen(false);
//     window.location.href = "/";
//   };

//   return (
//     <header
//       className="fixed top-0 left-0 w-full z-50 print:hidden
//       bg-[#0A0F1E]/80 backdrop-blur-xl
//       border-b border-[#1C2540]"
//     >

//       <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={closeMenu}
//           className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide
//           text-[#F0F4FF]"
//         >
//           Gahraaiyan
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 lg:gap-10">

//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               className={({ isActive }) =>
//                 `relative text-xs sm:text-sm uppercase tracking-wider
//                 transition-all duration-300
//                 ${
//                   isActive
//                     ? "text-[#3EB8D4]"
//                     : "text-[#8A9BBF] hover:text-[#F0F4FF]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <span className="relative group">

//                   {link.label}

//                   <span
//                     className={`absolute left-0 -bottom-2 h-px w-full
//                     bg-gradient-to-r from-transparent via-[#3EB8D4] to-transparent
//                     origin-center transition-transform duration-300
//                     ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />

//                 </span>
//               )}
//             </NavLink>
//           ))}

//           {/* ADMIN BUTTON */}

//           {!token ? (

//             <Link
//               to="/admin/login"
//               className="bg-[#3EB8D4] text-[#071018] px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold
//               hover:bg-[#6FE3FF] transition"
//             >
//               Admin Login
//             </Link>

//           ) : (

//             <div className="flex gap-3">

//               <Link
//                 to="/admin/dashboard"
//                 className="bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
//                 px-4 py-2 rounded-full text-xs uppercase
//                 hover:bg-[#3EB8D4] hover:text-[#071018] transition"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="bg-[#111827] border border-red-500 text-red-400
//                 px-4 py-2 rounded-full text-xs uppercase
//                 hover:bg-red-500 hover:text-white transition"
//               >
//                 Logout
//               </button>

//             </div>

//           )}

//         </nav>

//         {/* Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden flex flex-col gap-1.5 p-2"
//         >
//           <span
//             className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
//             ${isOpen ? "rotate-45 translate-y-2" : ""}`}
//           />
//           <span
//             className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
//             ${isOpen ? "opacity-0" : ""}`}
//           />
//           <span
//             className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
//             ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
//           />
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300
//         ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
//       >

//         <nav className="flex flex-col px-6 pb-6 gap-2
//         bg-[#0D1424] border-t border-[#1C2540]">

//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 `text-sm uppercase tracking-wide transition-all duration-300
//                 py-3 px-4 rounded-lg
//                 ${
//                   isActive
//                     ? "text-[#3EB8D4] bg-[#3EB8D4]/10"
//                     : "text-[#8A9BBF] hover:text-[#F0F4FF] hover:bg-[#111827]"
//                 }`
//               }
//             >
//               {link.label}
//             </NavLink>
//           ))}

//           {!token ? (

//             <Link
//               to="/admin/login"
//               onClick={closeMenu}
//               className="mt-3 bg-[#3EB8D4] text-[#071018] text-center py-3 rounded-lg font-bold"
//             >
//               Admin Login
//             </Link>

//           ) : (

//             <>
//               <Link
//                 to="/admin/dashboard"
//                 onClick={closeMenu}
//                 className="mt-3 bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
//                 text-center py-3 rounded-lg"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="bg-[#111827] border border-red-500 text-red-400
//                 py-3 rounded-lg"
//               >
//                 Logout
//               </button>
//             </>

//           )}

//         </nav>

//       </div>

//     </header>
//   );
// };

// export default Navbar;









import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/websites", label: "Ventures" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const token = localStorage.getItem("token");

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    window.location.href = "/";
  };

  /* 🔥 SECRET ADMIN ACCESS */
  const handleLogoClick = () => {
    setLogoClicks((prev) => {
      const newCount = prev + 1;

      if (newCount === 5) {
        window.location.href = "/admin/login";
        return 0;
      }

      return newCount;
    });

    /* optional reset (2 sec) */
    setTimeout(() => {
      setLogoClicks(0);
    }, 2000);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 print:hidden
      bg-[#0A0F1E]/80 backdrop-blur-xl
      border-b border-[#1C2540]"
    >

      <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            handleLogoClick();
          }}
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide
          text-[#F0F4FF]"
        >
          Gahraaiyan
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-xs sm:text-sm uppercase tracking-wider
                transition-all duration-300
                ${
                  isActive
                    ? "text-[#3EB8D4]"
                    : "text-[#8A9BBF] hover:text-[#F0F4FF]"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative group">

                  {link.label}

                  <span
                    className={`absolute left-0 -bottom-2 h-px w-full
                    bg-gradient-to-r from-transparent via-[#3EB8D4] to-transparent
                    origin-center transition-transform duration-300
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                </span>
              )}
            </NavLink>
          ))}

          {/* ADMIN BUTTON (HIDDEN FOR NORMAL USERS) */}

          {!token ? (

            <span className="hidden">
              <Link
                to="/admin/login"
                className="bg-[#3EB8D4] text-[#071018] px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold"
              >
                Admin Login
              </Link>
            </span>

          ) : (

            <div className="flex gap-3">

              <Link
                to="/admin/dashboard"
                className="bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
                px-4 py-2 rounded-full text-xs uppercase
                hover:bg-[#3EB8D4] hover:text-[#071018] transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-[#111827] border border-red-500 text-red-400
                px-4 py-2 rounded-full text-xs uppercase
                hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>

            </div>

          )}

        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
            ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
            ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#F0F4FF] transition-all
            ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
      >

        <nav className="flex flex-col px-6 pb-6 gap-2
        bg-[#0D1424] border-t border-[#1C2540]">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wide transition-all duration-300
                py-3 px-4 rounded-lg
                ${
                  isActive
                    ? "text-[#3EB8D4] bg-[#3EB8D4]/10"
                    : "text-[#8A9BBF] hover:text-[#F0F4FF] hover:bg-[#111827]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* ADMIN BUTTON HIDDEN */}
          {!token ? (
            <span className="hidden">
              <Link
                to="/admin/login"
                onClick={closeMenu}
                className="mt-3 bg-[#3EB8D4] text-[#071018] text-center py-3 rounded-lg font-bold"
              >
                Admin Login
              </Link>
            </span>
          ) : (
            <>
              <Link
                to="/admin/dashboard"
                onClick={closeMenu}
                className="mt-3 bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
                text-center py-3 rounded-lg"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-[#111827] border border-red-500 text-red-400
                py-3 rounded-lg"
              >
                Logout
              </button>
            </>
          )}

        </nav>

      </div>

    </header>
  );
};

export default Navbar;