import React from "react";
import MyPhoto from "../assets/MyPhoto.png";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 items-center py-8 mt-20">
      <img
        src={MyPhoto}
        alt="profileImage"
        className="rounded-full h-32 w-32 bg-gray-300 mt-8"
      />
      <h2 className="text-lg">Hi! I'm Suresh Jat 👋🏻</h2>
      <h1 className="text-4xl font-bold w-[35%] text-center mt-8">
        Full stack web developer and DSA Enthusiastic.
      </h1>
      <p className="w-[35%] text-center leading-4 my-4">
        I am passionate full stack developer skilled in MERN stack and DSA
        creating sleek and responsive web experiences.
      </p>
      <div className="">
        <button className="px-10 py-2 mx-2 my-4 border rounded-full">
          Contact
        </button>
        <button className="px-10 py-2 mx-2 my-4 border rounded-full bg-black text-white">
          Resume
        </button>
      </div>
    </div>
  );
}
