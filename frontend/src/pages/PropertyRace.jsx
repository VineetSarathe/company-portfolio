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