// import React from "react";

// const PropertyRace = () => {
//   return (
//     <div className="min-h-screen bg-[#171123] text-white px-6 md:px-10 py-16">

//       <h1 className="text-4xl md:text-5xl font-bold mb-6">
//         PropertyRace
//       </h1>

//       <p className="text-lg text-gray-300 max-w-3xl mb-8">
//         PropertyRace is a modern real estate discovery platform designed
//         to help users explore properties, learn about new real estate
//         projects, and find investment opportunities. The platform brings
//         together property buyers, sellers, developers, and real estate
//         professionals in one place, making property discovery simpler
//         and more accessible for everyone.
//       </p>

//       {/* Services / Features */}
//       <div className="grid md:grid-cols-2 gap-6 mb-10">

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Property Listings
//           </h3>
//           <p className="text-gray-400">
//             Explore a wide range of residential and commercial properties
//             with detailed information and project insights.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Real Estate Projects
//           </h3>
//           <p className="text-gray-400">
//             Discover new and upcoming real estate developments from
//             builders and developers across different locations.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Property Discovery
//           </h3>
//           <p className="text-gray-400">
//             Easily browse and explore properties through a clean
//             and user-friendly interface designed for quick discovery.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Investment Opportunities
//           </h3>
//           <p className="text-gray-400">
//             Learn about potential property investment opportunities
//             and emerging real estate markets.
//           </p>
//         </div>

//       </div>

//       <a
//         href="https://propertyrace.in"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#A663CC] hover:bg-[#8f4ab9] px-8 py-3 rounded-lg text-lg font-semibold transition"
//       >
//         Visit Website
//       </a>

//     </div>
//   );
// };

// export default PropertyRace;











import React from "react";

const PropertyRace = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-6 md:px-10 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-[32px] md:text-[44px] font-bold mb-6 text-[#F0F4FF] leading-tight">
          PropertyRace
        </h1>

        <p className="text-[#B8C2D9] text-[15px] leading-[1.7] max-w-3xl mb-10">
          PropertyRace is a modern real estate discovery platform designed
          to help users explore properties, learn about new projects, and
          find investment opportunities. It connects buyers, sellers,
          developers, and professionals in one place for easier discovery.
        </p>

        {/* Services / Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {[
            {
              title: "Property Listings",
              desc: "Explore residential and commercial properties with detailed insights."
            },
            {
              title: "Real Estate Projects",
              desc: "Discover new and upcoming developments from builders and developers."
            },
            {
              title: "Property Discovery",
              desc: "Browse properties easily with a clean and user-friendly interface."
            },
            {
              title: "Investment Opportunities",
              desc: "Learn about potential investment opportunities and real estate markets."
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
              "
            >

              <h3 className="text-[18px] font-semibold mb-3 text-[#F0F4FF]">
                {item.title}
              </h3>

              <p className="text-[#B8C2D9] text-[14px] leading-[1.7]">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}
        <a
          href="https://propertyrace.in"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          bg-[#3EB8D4] text-[#071018]
          px-8 py-3 rounded-full text-[14px] font-bold
          hover:bg-[#6FE3FF]
          transition
          "
        >
          Visit Website →
        </a>

      </div>

    </div>
  );
};

export default PropertyRace;