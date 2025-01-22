import React from "react";
import Sound from "./Sound";

export default function Sounds() {
  const soundsArr = [
    {
      name: "fire",
      suffix: "mp3",
    },
    {
      name: "rain",
      suffix: "mp3",
    },
    {
      name: "lightning",
      suffix: "mp3",
    },
    {
      name: "coffee",
      suffix: "mp3",
    },
    {
      name: "snow",
      suffix: "mp3",
    },
    {
      name: "book",
      suffix: "mp3",
    },
    {
      name: "wind",
      suffix: "mp3",
    },
    {
      name: "eat",
      suffix: "wav",
    },
    {
      name: "river",
      suffix: "wav",
    },
  ];
  return (
    <div className=" dark:bg-slate-900 w-full px-16 pt-32 md:px-32 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-y-16 justify-center">
      {soundsArr.map((item) => (
        <Sound name={item.name} key={item.name} suffix={item.suffix} />
      ))}
      {/* <Sound /> */}
    </div>
  );
}
