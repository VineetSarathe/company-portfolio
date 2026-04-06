// import React from "react";

// const Gahraaiyanin = () => {
//   return (
//     <div className="min-h-screen bg-[#171123] text-white px-6 md:px-10 py-16">

//       {/* Header */}
//       <div className="max-w-5xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Gahraaiyan.in
//         </h1>

//         <h2 className="text-2xl text-[#A663CC] font-semibold mb-10">
//           Features & Services
//         </h2>
//       </div>

//       {/* Features Section */}
//       <div className="grid md:grid-cols-2 gap-6 max-w-5xl mb-12">

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-2">
//             Poetry & Literature
//           </h3>
//           <p className="text-gray-400">
//             A platform where poets and writers can publish and share their
//             original poetry, stories, and literary works with a wider audience.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-2">
//             Creative Community
//           </h3>
//           <p className="text-gray-400">
//             Building a community of writers, poets, and literature enthusiasts
//             who connect through shared creativity and artistic expression.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-2">
//             Artist Promotion
//           </h3>
//           <p className="text-gray-400">
//             Helping emerging writers and poets gain visibility through
//             features, collaborations, and creative showcases.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-2">
//             Literary Events & Showcases
//           </h3>
//           <p className="text-gray-400">
//             Organizing poetry readings, creative discussions, and literary
//             gatherings to promote poetry and storytelling.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl md:col-span-2">
//           <h3 className="text-xl font-semibold mb-2">
//             Creative Collaboration
//           </h3>
//           <p className="text-gray-400">
//             Encouraging collaboration between writers, performers, and
//             artists to create meaningful artistic projects.
//           </p>
//         </div>

//       </div>

//       {/* Button */}
//       <a
//         href="https://gahraaiyan.in"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#A663CC] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#8f4ab9] transition"
//       >
//         Visit Official Website
//       </a>

//     </div>
//   );
// };

// export default Gahraaiyanin;












import React from "react";

const Gahraaiyanin = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-6 md:px-10 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-[32px] md:text-[44px] font-bold mb-4 text-[#F0F4FF] leading-tight">
          Gahraaiyan.in
        </h1>

        <h2 className="text-[18px] text-[#3EB8D4] font-semibold mb-12">
          Features & Services
        </h2>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {[
            {
              title: "Poetry & Literature",
              desc: "A platform where poets and writers can publish and share their original works with a wider audience."
            },
            {
              title: "Creative Community",
              desc: "Building a community of writers, poets, and literature enthusiasts."
            },
            {
              title: "Artist Promotion",
              desc: "Helping emerging writers and poets gain visibility through showcases and collaborations."
            },
            {
              title: "Literary Events & Showcases",
              desc: "Organizing poetry readings, discussions, and literary gatherings."
            },
            {
              title: "Creative Collaboration",
              desc: "Encouraging collaboration between writers, performers, and artists."
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

              <h3 className="text-[18px] font-semibold mb-2 text-[#F0F4FF]">
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
          href="https://gahraaiyan.in"
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
          Visit Official Website →
        </a>

      </div>

    </div>
  );
};

export default Gahraaiyanin;