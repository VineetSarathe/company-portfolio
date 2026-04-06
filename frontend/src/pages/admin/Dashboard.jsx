import React, { useEffect, useState } from "react";
import API from "../../services/api";

const Dashboard = () => {

  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Upcoming");

  const token = localStorage.getItem("token");

  const loadEvents = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/api/events");
      const res = await API.get("/api/events");
      setEvents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleAdd = async () => {

    if (!title || !date || !location) {
      alert("Fill all fields");
      return;
    }

    try {


      await API.post("/api/events", {
        title,
        date,
        location,
        status
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setTitle("");
      setDate("");
      setLocation("");
      setStatus("Upcoming");

      loadEvents();

    } catch (error) {
      alert("Add event failed");
    }

  };

  const handleDelete = async (id) => {

    try {


      await API.delete(`/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      loadEvents();

    } catch (error) {
      alert("Delete failed");
    }

  };

  return (

    <div className="min-h-screen bg-[#0A0F1E] text-[#E8EDF5] px-4 sm:px-6 lg:px-10 py-10 mt-16">

      <h1 className="text-[28px] sm:text-[32px] font-bold mb-10 text-[#F0F4FF]">
        Admin Dashboard
      </h1>

      {/* ADD EVENT */}

      <div className="
        bg-[#111827]
        border border-[#3EB8D4]
        rounded-[16px]
        p-4 sm:p-6
        mb-10
      ">

        <h2 className="text-[18px] sm:text-[20px] mb-5 text-[#F0F4FF] font-semibold">
          Add Event
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <input
            className="w-full p-3 rounded-lg bg-[#0D1424] border border-[#1C2540] text-[#E8EDF5] placeholder-[#4B5D7A] focus:outline-none focus:border-[#3EB8D4]"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            className="w-full p-3 rounded-lg bg-[#0D1424] border border-[#1C2540] text-[#E8EDF5] focus:outline-none focus:border-[#3EB8D4]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-lg bg-[#0D1424] border border-[#1C2540] text-[#E8EDF5] placeholder-[#4B5D7A] focus:outline-none focus:border-[#3EB8D4]"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <select
            className="w-full p-3 rounded-lg bg-[#0D1424] border border-[#1C2540] text-[#E8EDF5] focus:outline-none focus:border-[#3EB8D4]"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Upcoming</option>
            <option>Completed</option>
          </select>

        </div>

        <button
          onClick={handleAdd}
          className="
          mt-5
          bg-[#3EB8D4] text-[#071018]
          px-6 py-2 rounded-full font-bold
          hover:bg-[#6FE3FF]
          transition
          "
        >
          Add Event
        </button>

      </div>

      {/* EVENTS TABLE */}

      <div className="
        bg-[#111827]
        border border-[#1C2540]
        rounded-[16px]
        p-4 sm:p-6
      ">

        <h2 className="text-[18px] sm:text-[20px] mb-5 text-[#F0F4FF] font-semibold">
          All Events
        </h2>

        <div className="overflow-x-auto">

          <table className="min-w-full text-left text-[14px]">

            <thead>

              <tr className="border-b border-[#1C2540] text-[#8A9BBF]">

                <th className="p-3 font-medium">Title</th>
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Location</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Action</th>

              </tr>

            </thead>

            <tbody>

              {events.map((event) => (

                <tr
                  key={event._id}
                  className="border-b border-[#1C2540] hover:bg-[#0D1424] transition"
                >

                  <td className="p-3 text-[#F0F4FF]">{event.title}</td>
                  <td className="p-3 text-[#B8C2D9]">{event.date}</td>
                  <td className="p-3 text-[#B8C2D9]">{event.location}</td>

                  <td className="p-3">
                    <span className={`text-[11px] px-3 py-[4px] rounded-full font-semibold ${event.status === "Upcoming"
                      ? "bg-[#3EB8D4]/10 text-[#3EB8D4]"
                      : "bg-[#0D1424] text-[#8A9BBF]"
                      }`}>
                      {event.status}
                    </span>
                  </td>

                  <td className="p-3">

                    <button
                      onClick={() => handleDelete(event._id)}
                      className="
                      bg-[#111827] border border-red-500 text-red-400
                      px-3 py-1 rounded-full text-xs
                      hover:bg-red-500 hover:text-white
                      transition
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;