"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";

const adminCredentials = {
  username: "a",
  password: "a",
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      document.cookie = "isAuthenticated=true; path=/";
      router.push("/admin");
      console.log("login success");
    } else {
      alert("invalid login");
    }
  };

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-4xl font-bold text-center p-8">Admin Login</h1>
      <div className="bg-[#283347] p-6 rounded-lg shadow-md flex">
        <form onSubmit={handleSubmit}>
          <input
            className="mb-4 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="mb-4 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
