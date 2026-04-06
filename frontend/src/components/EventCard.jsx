// import React from "react";

// const EventCard = ({ title, date, location, status }) => {

//   const statusStyle =
//     status === "Upcoming"
//       ? "bg-[#A663CC22] text-[#A663CC]"
//       : "bg-[#2a1c3d] text-[#EDE8F580]";

//   return (

//     <div
//       className="
//       bg-[#221832]
//       border border-[#A663CC33]
//       rounded-xl
//       px-5 py-4
//       transition
//       hover:-translate-y-1
//       hover:border-[#A663CC80]
//       shadow-lg
//       flex flex-col gap-2
//       "
//     >

//       {/* Top Section */}

//       <div className="flex items-center justify-between">

//         <h3 className="text-lg font-semibold text-white leading-tight">
//           {title}
//         </h3>

//         <span
//           className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle}`}
//         >
//           {status}
//         </span>

//       </div>


//       {/* Date */}

//       <div className="flex items-center gap-2 text-sm text-[#EDE8F580]">
//         <span>📅</span>
//         <span>{date}</span>
//       </div>


//       {/* Location */}

//       <div className="flex items-center gap-2 text-sm text-[#EDE8F580]">
//         <span>📍</span>
//         <span>{location}</span>
//       </div>

//     </div>

//   );

// };

// export default EventCard;










import React from "react";

const EventCard = ({ title, date, location, status }) => {

  const statusStyle =
    status === "Upcoming"
      ? "bg-[#3EB8D4]/10 text-[#3EB8D4]"
      : "bg-[#111827] text-[#8A9BBF] border border-[#1C2540]";

  return (

    <div
      className="
      bg-[#111827]
      border border-[#3EB8D4]
      rounded-[16px]
      px-5 py-4
      transition duration-300
      hover:-translate-y-[4px]
      hover:border-[#3EB8D4]/80
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
      flex flex-col gap-3
      "
    >

      {/* Top Section */}
      <div className="flex items-center justify-between">

        <h3 className="text-[16px] font-semibold text-[#F0F4FF] leading-tight">
          {title}
        </h3>

        <span
          className={`text-[11px] px-3 py-[4px] rounded-full font-semibold ${statusStyle}`}
        >
          {status}
        </span>

      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-[13px] text-[#B8C2D9]">
        <span>📅</span>
        <span>{date}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-[13px] text-[#B8C2D9]">
        <span>📍</span>
        <span>{location}</span>
      </div>

    </div>

  );

};

export default EventCard;