import React from "react";

const GahraaiyanProductions = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-6 md:px-10 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-[32px] md:text-[44px] font-bold mb-6 text-[#F0F4FF] leading-tight">
          Gahraaiyan Productions
        </h1>

        {/* About */}
        <div className="
          bg-[#111827]
          border border-[#1C2540]
          rounded-[16px]
          p-6
          mb-12
        ">

          <h2 className="text-[20px] text-[#3EB8D4] font-semibold mb-4">
            About
          </h2>

          <p className="text-[#B8C2D9] text-[15px] leading-[1.7]">
            Gahraaiyan Productions is a media and film production house focused
            on storytelling through visual content. It creates films, short films,
            web series, and digital shows while supporting creative talent.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Film & Short Film Production",
              desc: "Creating cinematic projects focused on storytelling and artistic expression."
            },
            {
              title: "Web Shows & Digital Content",
              desc: "Developing web series and digital entertainment for modern audiences."
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

      </div>

    </div>
  );
};

export default GahraaiyanProductions;