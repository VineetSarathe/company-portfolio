import React, { useState } from "react";
import { Link } from "react-router-dom";

import digitalLogo from "../assets/gahraaiyan-digital.png";
import gahraaiyanLogo from "../assets/gahraaiyan.png";
import eventsLogo from "../assets/events.png";
import transportLogo from "../assets/transport.png";

const allSites = [
  {
    id: 1,
    name: "Gahraaiyan Digital Pvt Ltd",
    category: "Digital",
    description:
      "Digital marketing and technology company helping businesses grow.",
    features: [
      "Website development",
      "Digital marketing",
      "SEO & social media",
    ],
    url: "https://gahraaiyandigital.com",
    page: "/gahraaiyan-digital",
    logo: digitalLogo,
    logoStyle: { width: "100px", height: "100px" },
  },
  {
    id: 2,
    name: "Gahraaiyan.in",
    category: "Media",
    description:
      "Creative poetry and literature platform.",
    features: [
      "Poetry collection",
      "Creative writing",
      "Literary showcases",
    ],
    url: "https://gahraaiyan.in",
    page: "/gahraaiyan-in",
    logo: gahraaiyanLogo,
    logoStyle: { width: "100px", height: "100px" },
  },
  {
    id: 3,
    name: "Gahraaiyan Events",
    category: "Media",
    description:
      "Live events platform for comedy, poetry, and music.",
    features: [
      "Comedy shows",
      "Open mic",
      "Music events",
    ],
    url: "https://youtube.com/@gahraaiyanevents",
    page: "/events",
    logo: eventsLogo,
    logoStyle: { width: "100px", height: "100px" },
    buttonText: "Watch ▶",
  },
  {
    id: 4,
    name: "Gahraaiyan Management",
    category: "Transport",
    description:
      "Logistics and transport coordination platform.",
    features: [
      "Transport coordination",
      "Logistics planning",
      "Supply chain",
    ],
    url: "https://app.gahraaiyan.com/",
    page: "/gahraaiyan-transport",
    logo: transportLogo,
    logoStyle: { width: "96px", height: "96px" },
  },
];

const categories = ["All", "Digital", "Media", "Transport"];

const Websites = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? allSites
      : allSites.filter((site) => site.category === filter);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] pt-28 px-4 sm:px-6 lg:px-10 pb-16">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-[30px] sm:text-[40px] font-bold mb-10 text-[#F0F4FF]">
          Our Ventures
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-2 rounded-full text-[13px] font-semibold transition
                ${
                  filter === cat
                    ? "bg-[#3EB8D4] text-[#071018]"
                    : "bg-[#111827] border border-[#1C2540] text-[#8A9BBF] hover:text-[#F0F4FF] hover:border-[#3EB8D4]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((site) => (

            <div
              key={site.id}
              className="
              bg-[#111827]
              border border-[#1C2540]
              rounded-[16px]
              p-6
              flex flex-col items-center text-center
              transition duration-300
              hover:-translate-y-[4px]
              hover:border-[#3EB8D4]/60
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
              "
            >

              {/* Logo */}
              <div className="w-24 h-24 rounded-full bg-[#0D1424] border border-[#1C2540] flex items-center justify-center mb-5 overflow-hidden">
                <img
                  src={site.logo}
                  alt={site.name}
                  style={site.logoStyle}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <h3 className="text-[18px] font-semibold text-[#F0F4FF] mb-2">
                {site.name}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#B8C2D9] mb-4 leading-[1.6]">
                {site.description}
              </p>

              {/* Features */}
              <ul className="text-[13px] text-[#B8C2D9] space-y-1 mb-6 text-left w-full">
                {site.features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#3EB8D4]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-auto flex gap-3 w-full">

                <Link
                  to={site.page}
                  className="
                  flex-1 text-center
                  bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
                  px-4 py-2 rounded-full text-xs font-semibold
                  hover:bg-[#3EB8D4] hover:text-[#071018]
                  transition
                  "
                >
                  View Details
                </Link>

                {site.url && (
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex-1 text-center
                    bg-[#3EB8D4] text-[#071018]
                    px-4 py-2 rounded-full text-xs font-bold
                    hover:bg-[#6FE3FF]
                    transition
                    "
                  >
                    {site.buttonText || "Visit"}
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Websites;