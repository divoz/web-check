"use client";

import { useState } from "react";

const Page = () => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted", text);
  };

  return (
    <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <main className=""> */}
      <h1 className="text-4xl font-bold">Scan Page</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-8/12">
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 bg-gray-50 w-full rounded-lg p-2.5"
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4"
        >
          Scan
        </button>
      </form>
      {/* </main> */}
    </main>
  );
};

export default Page;
