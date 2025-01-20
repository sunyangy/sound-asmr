import React from "react";
import Sound from "./Sound";

export default function Sounds() {
  const soundsArr = [
    {
      name: "fire",
    },
    {
      name: "rain",
    },
    {
      name: "lightning",
    },
    {
      name: "coffee",
    },
    {
      name: "snow",
    },
    {
      name: "book",
    },
  ];
  return (
    <div className="w-full px-64 py-32 grid grid-cols-3 gap-y-16 justify-center">
      {soundsArr.map((item) => (
        <Sound name={item.name} key={item.name} />
      ))}
      {/* <Sound /> */}
    </div>
  );
}
