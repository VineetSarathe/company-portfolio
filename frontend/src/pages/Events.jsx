// import React, { useEffect, useState } from "react";
// import EventCard from "../components/EventCard";
// import axios from "axios";

// const filters = ["All", "Upcoming", "Previous"];

// const Events = () => {

//   const [events, setEvents] = useState([]);
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/events")
//       .then((res) => setEvents(res.data));
//   }, []);

//   const filtered = events
//     .filter((e) => {
//       if (filter === "All") return true;
//       if (filter === "Upcoming") return e.status === "Upcoming";
//       if (filter === "Previous") return e.status === "Completed";
//       return true;
//     })
//     .sort((a, b) => {

//       if (a.status === "Upcoming" && b.status === "Completed") return -1;
//       if (a.status === "Completed" && b.status === "Upcoming") return 1;

//       return new Date(b.createdAt) - new Date(a.createdAt);

//     });

//   return (

//     <div className="min-h-screen bg-[#171123] pt-28 px-4 sm:px-6 lg:px-10 pb-16">

//       <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
//         Events
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 mb-10">

//         {filters.map((f) => (

//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className="px-4 py-2 bg-purple-600 text-white rounded text-sm"
//           >
//             {f}
//           </button>

//         ))}

//       </div>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

//         {filtered.map((e) => (

//           <EventCard
//             key={e._id}
//             title={e.title}
//             date={e.date}
//             location={e.location}
//             status={e.status}
//           />

//         ))}

//       </div>


//       {/* ===== Gahraaiyan Events Info Section ===== */}

//       <div className="max-w-6xl">

//         <h2 className="text-3xl font-bold text-white mb-4">
//           Gahraaiyan Events
//         </h2>

//         <h3 className="text-xl text-[#A663CC] font-semibold mb-6">
//           About
//         </h3>

//         <p className="text-gray-300 max-w-3xl mb-12">
//           Gahraaiyan Events focuses on organizing live shows and creative
//           gatherings that bring artists and audiences together. The platform
//           hosts stand-up comedy shows, poetry events, music performances,
//           and open-mic experiences, creating a stage for emerging performers
//           and entertainers.
//         </p>

//         {/* Services */}
//         <div className="grid md:grid-cols-2 gap-6">

//           <div className="bg-[#1f1a33] p-6 rounded-xl">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               Stand-Up Comedy Shows
//             </h3>
//             <p className="text-gray-400">
//               Organizing live comedy performances featuring emerging
//               and professional comedians in cafés, venues, and cultural spaces.
//             </p>
//           </div>

//           <div className="bg-[#1f1a33] p-6 rounded-xl">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               Poetry & Open Mic Events
//             </h3>
//             <p className="text-gray-400">
//               Hosting poetry nights and open mic sessions that provide
//               artists with a platform to perform and share their work
//               with live audiences.
//             </p>
//           </div>

//           <div className="bg-[#1f1a33] p-6 rounded-xl">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               Live Music & Jamming Sessions
//             </h3>
//             <p className="text-gray-400">
//               Arranging musical gatherings and live performances where
//               singers and musicians can perform and collaborate.
//             </p>
//           </div>

//           <div className="bg-[#1f1a33] p-6 rounded-xl">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               Artist & Performer Platform
//             </h3>
//             <p className="text-gray-400">
//               Providing a stage for comedians, poets, singers, and
//               performers to showcase their talent and connect with audiences.
//             </p>
//           </div>

//           <div className="bg-[#1f1a33] p-6 rounded-xl md:col-span-2">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               Event Production & Management
//             </h3>
//             <p className="text-gray-400">
//               Planning and executing events including venue coordination,
//               artist management, audience engagement, and show promotion.
//             </p>
//           </div>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default Events;








import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import axios from "axios";

const filters = ["All", "Upcoming", "Previous"];

const Events = () => {

  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data));
  }, []);

  const filtered = events
    .filter((e) => {
      if (filter === "All") return true;
      if (filter === "Upcoming") return e.status === "Upcoming";
      if (filter === "Previous") return e.status === "Completed";
      return true;
    })
    .sort((a, b) => {

      if (a.status === "Upcoming" && b.status === "Completed") return -1;
      if (a.status === "Completed" && b.status === "Upcoming") return 1;

      return new Date(b.createdAt) - new Date(a.createdAt);

    });

  return (

    <div className="min-h-screen bg-[#0A0F1E] pt-28 px-4 sm:px-6 lg:px-10 pb-20 text-[#E8EDF5]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-[30px] sm:text-[40px] font-bold mb-10 text-[#F0F4FF]">
          Events
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">

          {filters.map((f) => (

            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-5 py-2 rounded-full text-[13px] font-semibold transition
                ${filter === f
                  ? "bg-[#3EB8D4] text-[#071018]"
                  : "bg-[#111827] border border-[#1C2540] text-[#8A9BBF] hover:text-[#F0F4FF] hover:border-[#3EB8D4]"
                }
              `}
            >
              {f}
            </button>

          ))}

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

          {filtered.map((e) => (

            <EventCard
              key={e._id}
              title={e.title}
              date={e.date}
              location={e.location}
              status={e.status}
            />

          ))}

        </div>


        {/* ===== Gahraaiyan Events Info Section ===== */}

        <div className="space-y-10">

          <div>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#F0F4FF] mb-3">
              Gahraaiyan Events
            </h2>

            <h3 className="text-[16px] text-[#3EB8D4] font-semibold mb-6">
              About
            </h3>

            <p className="text-[#B8C2D9] max-w-3xl leading-[1.7]">
              Gahraaiyan Events focuses on organizing live shows and creative
              gatherings that bring artists and audiences together. The platform
              hosts stand-up comedy shows, poetry events, music performances,
              and open-mic experiences.
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Stand-Up Comedy Shows",
                desc: "Organizing live comedy performances featuring emerging and professional comedians."
              },
              {
                title: "Poetry & Open Mic Events",
                desc: "Hosting poetry nights and open mic sessions for artists to perform."
              },
              {
                title: "Live Music & Jamming Sessions",
                desc: "Arranging musical gatherings and live performances."
              },
              {
                title: "Artist & Performer Platform",
                desc: "Providing a stage for performers to showcase talent."
              },
              {
                title: "Event Production & Management",
                desc: "Planning and executing events including venue and artist coordination."
              }
            ].map((item, i) => (

              <div
                key={i}
                className="
                bg-[#111827]
                border border-[#1C2540]
                rounded-[16px]
                p-6
                transition duration-300
                hover:-translate-y-[4px]
                hover:border-[#3EB8D4]/60
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
                md:col-span-2
                "
              >

                <h3 className="text-[17px] font-semibold mb-2 text-[#F0F4FF]">
                  {item.title}
                </h3>

                <p className="text-[#B8C2D9] text-[14px] leading-[1.6]">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};

export default Events;