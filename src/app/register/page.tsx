"use client";
import FormHolder from "@/components/FormHolder";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormHolder>
      <form className="flex flex-col gap-4 justify-center items-center">
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
    </FormHolder>
  );
}
