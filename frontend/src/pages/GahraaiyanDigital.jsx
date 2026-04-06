// import React from "react";

// const GahraaiyanDigital = () => {
//   return (
//     <div className="min-h-screen bg-[#171123] text-white px-6 md:px-10 py-16">

//       <h1 className="text-4xl md:text-5xl font-bold mb-4">
//         Gahraaiyan Digital Pvt Ltd
//       </h1>

//       <h2 className="text-2xl text-[#A663CC] font-semibold mb-8">
//         Services & Features
//       </h2>

//       {/* Services */}
//       <div className="grid md:grid-cols-2 gap-6 mb-10">

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Social Media Management
//           </h3>
//           <p className="text-gray-400">
//             Planning, managing, and optimizing social media profiles to
//             increase audience engagement, brand awareness, and maintain a
//             consistent digital presence for businesses.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Website Development
//           </h3>
//           <p className="text-gray-400">
//             Design and development of modern, responsive websites tailored
//             to business needs. From company websites and landing pages to
//             advanced web applications, the focus is on performance,
//             user experience, and scalability.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Performance Marketing
//           </h3>
//           <p className="text-gray-400">
//             Data-driven advertising campaigns focused on generating measurable results such as leads, sales, and customer engagement through platforms like Meta Ads and Google Ads, with continuous optimization to maximize return on investment.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Search Engine Optimization (SEO)
//           </h3>
//           <p className="text-gray-400">
//             Improving website visibility on search engines through keyword
//             research, on-page optimization, and strategic content planning
//             to help businesses attract organic traffic.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Branding & Identity Design
//           </h3>
//           <p className="text-gray-400">
//             Development of strong brand identities including logo design,
//             brand guidelines, visual language, and creative assets that
//             help businesses build a recognizable and professional presence.
//           </p>
//         </div>

//         <div className="bg-[#1f1a33] p-6 rounded-xl">
//           <h3 className="text-xl font-semibold mb-3">
//             Content Creation & Video Editing
//           </h3>
//           <p className="text-gray-400">
//             Creative content production for social media and marketing
//             campaigns including video editing, reels, promotional videos,
//             and visual storytelling to engage audiences.
//           </p>
//         </div>

//       </div>

//       <a
//         href="https://gahraaiyandigital.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#A663CC] hover:bg-[#8f4ab9] px-8 py-3 rounded-lg text-lg font-semibold transition"
//       >
//         Visit Website
//       </a>

//     </div>
//   );
// };

// export default GahraaiyanDigital;











import React from "react";

const GahraaiyanDigital = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-6 md:px-10 py-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-[32px] md:text-[44px] font-bold mb-4 text-[#F0F4FF] leading-tight">
          Gahraaiyan Digital Pvt Ltd
        </h1>

        <h2 className="text-[18px] text-[#3EB8D4] font-semibold mb-10">
          Services & Features
        </h2>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {[
            {
              title: "Social Media Management",
              desc: "Planning, managing, and optimizing social media profiles to increase engagement and brand presence."
            },
            {
              title: "Website Development",
              desc: "Design and development of modern, responsive websites focused on performance and scalability."
            },
            {
              title: "Performance Marketing",
              desc: "Data-driven campaigns focused on leads, sales, and ROI through platforms like Meta Ads and Google Ads."
            },
            {
              title: "Search Engine Optimization (SEO)",
              desc: "Improving visibility on search engines with keyword strategy and optimization."
            },
            {
              title: "Branding & Identity Design",
              desc: "Creating strong brand identity including logos, guidelines, and visual assets."
            },
            {
              title: "Content Creation & Video Editing",
              desc: "Producing engaging content including reels, videos, and creative storytelling."
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

        {/* CTA */}
        <a
          href="https://gahraaiyandigital.com"
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

export default GahraaiyanDigital;