"use client";
import FormHolder from "@/components/FormHolder";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    await fetch("../../api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <FormHolder>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Enter email addess..."
          className="text-2xl font-bold shadow rounded-lg w-full p-3 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password..."
          className="text-2xl font-bold shadow rounded-lg w-full p-3 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-800 text-white font-bold text-2xl w-full p-4 rounded shadow-2xl hover:text-gray-950 hover:bg-blue-600">
          Register Account
        </button>
      </form>
    </FormHolder>
  );
}
