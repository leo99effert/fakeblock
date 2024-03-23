"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/3 bg-gradient-to-b from-gray-400 to-blue-400 text-blue-950 text-center font-bold p-10 rounded shadow-2xl">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Enter email addess..."
            className="text-xl shadow rounded w-full focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="text-xl shadow rounded w-full focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-800 text-white text-xl w-1/2 p-2 rounded shadow-2xl hover:text-gray-950">
            Register Account
          </button>
        </form>
      </div>
    </div>
  );
}
