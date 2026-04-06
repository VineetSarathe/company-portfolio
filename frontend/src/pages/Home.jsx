import React from "react";
import { Link } from "react-router-dom";

const sites = [
  {
    name: "Gahraaiyan Digital Pvt Ltd",
    description:
      "Full-service digital marketing & tech solutions for modern business growth.",
    url: "https://gahraaiyandigital.com",
    page: "/gahraaiyan-digital",
    tag: "Digital",
    tagClass: "bg-[#0E2D3D] text-[#3EB8D4]",
  },
  {
    name: "Gahraaiyan.in",
    description:
      "Creative platform for poetry, literature & artistic expression.",
    url: "https://gahraaiyan.in",
    page: "/gahraaiyan-in",
    tag: "Creative",
    tagClass: "bg-[#2A1A3D] text-[#A78BFA]",
  },
  {
    name: "Gahraaiyan Managements",
    description: "Efficient logistics & transport coordination services.",
    url: "https://gahraaiyan.com",
    page: "/gahraaiyan-transport",
    tag: "Logistics",
    tagClass: "bg-[#1A2A1A] text-[#6EE7B7]",
  },
  {
    name: "Gahraaiyan Events",
    description: "Live shows, poetry, comedy & creative gatherings.",
    url: "https://youtube.com/@gahraaiyanevents",
    page: "/events",
    tag: "Events",
    tagClass: "bg-[#2D1F10] text-[#FBB26A]",
  },
  {
    name: "Gahraaiyan Productions",
    description: "Films, web series & creative media production.",
    url: "https://youtube.com/@gahraaiyan",
    page: "/gahraaiyan-productions",
    tag: "Media",
    tagClass: "bg-[#2D1020] text-[#F472B6]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] font-[Outfit]">

      {/* HERO */}
      <section className="text-center px-6 pt-[100px] pb-[88px] relative overflow-hidden">

        {/* Glow */}
        <div className="absolute w-[520px] h-[300px] bg-[radial-gradient(ellipse,#1A6B8A_0%,transparent_70%)] opacity-20 left-1/2 -translate-x-1/2 top-0 pointer-events-none"></div>

        <div className="absolute w-[280px] h-[200px] bg-[radial-gradient(ellipse,#2A3F7E_0%,transparent_70%)] opacity-20 right-[8%] top-[50px] pointer-events-none"></div>

        <p className="text-[11px] tracking-[3px] text-[#3EB8D4] mb-[18px] font-medium">
          GAHRAAIYAN GROUP
        </p>

        <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.12] mb-5 text-[#F0F4FF]">
          Building <span className="text-[#3EB8D4]">Creative</span><br />
          Digital Ecosystem
        </h1>

        <p className="text-[#8A9BBF] max-w-[440px] mx-auto mb-8 text-[15px] leading-[1.7]">
          A multi-venture platform across digital, logistics, media, and creative industries.
        </p>

        <Link
          to="/websites"
          className="inline-block bg-[#3EB8D4] text-[#071018] px-8 py-3 rounded-full text-[13px] font-bold tracking-[0.3px]"
        >
          Explore Platforms →
        </Link>
      </section>

      {/* PLATFORMS */}
      <section className="bg-[#0D1424] py-[72px] px-6 border-t border-[#1C2540]">

        <div className="max-w-[960px] mx-auto">

          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-[22px] font-semibold text-[#F0F4FF] whitespace-nowrap">
              Our Platforms
            </h2>
            <div className="flex-1 h-[0.5px] bg-[#1C2540]"></div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">

  {sites.map((site, i) => (
    <div
      key={site.name}
      className="bg-[#111827] border border-[#3EB8D4] rounded-[16px] p-6 
      transition duration-300 
      hover:-translate-y-[4px] 
      hover:border-[#3EB8D4]/80
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
    >

      {/* TOP */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[11px] text-[#4B5D7A] font-medium">
          {String(i + 1).padStart(2, "0")}
        </span>

        <span className={`text-[11px] font-semibold px-3 py-[4px] rounded-full ${site.tagClass}`}>
          {site.tag}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-[18px] font-semibold text-[#FFFFFF] mb-2 leading-[1.35]">
        {site.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[14px] text-[#B8C2D9] leading-[1.7] mb-6">
        {site.description}
      </p>

      {/* LINKS */}
      <div className="flex gap-6 items-center">
        <Link
          to={site.page}
          className="text-[14px] font-semibold text-[#3EB8D4] hover:text-[#6FE3FF] transition"
        >
          Visit →
        </Link>

        <a
          href={site.url}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-[#7C8CA8] hover:text-[#3EB8D4] transition"
        >
          Open ↗
        </a>
      </div>

    </div>
  ))}

</div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0F1E] border-t border-[#1C2540] text-center py-7 text-[12px] text-[#3B4D6A] tracking-[0.3px]">
        © 2026 Gahraaiyan Group — All Platforms, One Vision
      </footer>

    </div>
  );
}