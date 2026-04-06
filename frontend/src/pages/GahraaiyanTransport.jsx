import React from "react";

const GahraaiyanTransport = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-6 md:px-10 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-[32px] md:text-[44px] font-bold mb-4 text-[#F0F4FF] leading-tight">
          Gahraaiyan Management
        </h1>

        <h2 className="text-[18px] text-[#3EB8D4] font-semibold mb-12">
          Services & Features
        </h2>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {[
            {
              title: "Transportation Coordination",
              desc: "Connecting businesses with reliable transport providers for efficient movement of goods."
            },
            {
              title: "Logistics Planning",
              desc: "Structured planning of routes, scheduling, and shipment coordination."
            },
            {
              title: "Supply Chain Support",
              desc: "Managing movement of goods between suppliers, warehouses, and customers."
            },
            {
              title: "Business Transport Solutions",
              desc: "Providing tailored transportation arrangements for businesses."
            },
            {
              title: "Operational Coordination",
              desc: "Managing communication between providers, clients, and logistics teams."
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
          href="https://gahraaiyan.com/"
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

export default GahraaiyanTransport;