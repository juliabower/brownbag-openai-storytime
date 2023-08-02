"use client";
import { useState } from "react";
import { useCompletion } from "ai/react";

export default function Page() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [setting, setSetting] = useState("");
  const { completion, complete } = useCompletion({
    api: "/api/completion",
  });

  const prompt = `Create a captivating and creative bedtime story suitable for children. It should include a main character called ${name}, their best friend and pet who is a ${animal}, and should take place in ${setting}. Let your imagination soar and start the adventures of ${name} and ${animal} in this magnificent ${setting}. The story should be no longer than 750 characters`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    complete(prompt);
  };
  return (
    <div className="bg-[#f5f2e8] min-h-screen w-full p-4">
      <h1 className="mx-auto text-center mb-4 text-3xl">Story Generator</h1>
      <div className="flex flex-row items-center p-4 max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-xl placeholder-gray-400"
          />
          <input
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            placeholder="Animal"
            className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-xl placeholder-gray-400"
          />
          <input
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
            placeholder="Setting"
            className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-xl placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#a1456c] text-white px-6 py-2 mt-6 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-200 text-2xl"
          >
            Generate Story
          </button>
        </form>
      </div>
      <p className="my-6 max-w-[75%] mx-auto">{completion}</p>
    </div>
  );
}
