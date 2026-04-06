// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");

//   const handleLogin = async (e) => {

//     e.preventDefault();

//     try {

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("token", res.data.token);

//       window.location.href = "/admin/dashboard";

//     } catch (error) {

//       alert("Login failed");

//     }

//   };

//   return (

//     <div className="min-h-screen flex items-center justify-center bg-[#171123]">

//       <form
//         onSubmit={handleLogin}
//         className="bg-[#221832] p-8 rounded-xl w-80 flex flex-col gap-4"
//       >

//         <h2 className="text-white text-2xl font-bold text-center">
//           Admin Login
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="p-2 rounded bg-[#171123] text-white"
//           onChange={(e)=>setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="p-2 rounded bg-[#171123] text-white"
//           onChange={(e)=>setPassword(e.target.value)}
//         />

//         <button className="bg-purple-600 text-white p-2 rounded">
//           Login
//         </button>

//       </form>

//     </div>

//   );
// };

// export default Login;









import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      window.location.href = "/admin/dashboard";

    } catch (error) {

      alert("Login failed");

    }

  };

  return (

    // <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] px-4">
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] px-4 overflow-hidden -mt-30">

      {/* Glow Effects */}
      {/* <div className="absolute w-[400px] h-[250px] bg-[radial-gradient(ellipse,#1A6B8A_0%,transparent_70%)] opacity-20 left-1/2 -translate-x-1/2 top-0 pointer-events-none"></div> */}
      <div className="absolute w-[400px] max-w-full h-[250px] overflow-hidden
bg-[radial-gradient(ellipse,#1A6B8A_0%,transparent_70%)]
opacity-20 left-1/2 -translate-x-1/2 top-0 pointer-events-none"></div>

      <form
        onSubmit={handleLogin}
        className="
        relative
        bg-[#111827]
        border border-[#3EB8D4]
        p-8
        rounded-[16px]
        w-full max-w-[340px]
        flex flex-col gap-5
        shadow-[0_12px_30px_rgba(0,0,0,0.6)]
        "
      >

        <h2 className="text-[#F0F4FF] text-[24px] font-bold text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="
          p-3 rounded-lg
          bg-[#0D1424]
          border border-[#1C2540]
          text-[#E8EDF5]
          placeholder-[#4B5D7A]
          focus:outline-none focus:border-[#3EB8D4]
          "
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="
          p-3 rounded-lg
          bg-[#0D1424]
          border border-[#1C2540]
          text-[#E8EDF5]
          placeholder-[#4B5D7A]
          focus:outline-none focus:border-[#3EB8D4]
          "
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="
          bg-[#3EB8D4] text-[#071018]
          p-3 rounded-full font-bold
          hover:bg-[#6FE3FF]
          transition
          "
        >
          Login
        </button>

      </form>

    </div>

  );

};

export default Login;