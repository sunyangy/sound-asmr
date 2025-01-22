import { useRef, useState } from "react";
import { AiFillFire, AiFillApple } from "react-icons/ai";
import {
  BsFillCloudHailFill,
  BsFillCupHotFill,
  BsFillLightningFill,
  BsSnow2,
  BsBookFill,
  BsWind,
} from "react-icons/bs";
import { IoWater } from "react-icons/io5";
import VolumeAdjuster from "./VolumeAdjuster";

interface SoundProps {
  name: string;
  suffix: string;
}

export default function Sound({ name, suffix }: SoundProps) {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(0.5);

  const changeIsPlayed = () => {
    setIsPlayed(!isPlayed);
    if (audioRef.current) {
      if (isPlayed) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    console.log(volume, "volume");
  };

  const changeVolume = (volume: number) => {
    if (audioRef.current) {
      setVolume(volume);
      audioRef.current.volume = volume;
    }
  };
  return (
    <div className="">
      <div className="flex-col items-center justify-center">
        <div className="flex justify-center">
          {name === "fire" && (
            <AiFillFire
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          {name === "rain" && (
            <BsFillCloudHailFill
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          {name === "lightning" && (
            <BsFillLightningFill
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          {name === "coffee" && (
            <BsFillCupHotFill
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          {name === "snow" && (
            <BsSnow2
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          {name === "book" && (
            <BsBookFill
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}

          {name === "wind" && (
            <BsWind
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}

          {name === "eat" && (
            <AiFillApple
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}

          {name === "river" && (
            <IoWater
              size={128}
              className="cursor-pointer dark:text-indigo-700"
              onClick={changeIsPlayed}
            />
          )}
          <audio ref={audioRef} src={`./${name}.${suffix}`} loop></audio>
        </div>
        {
          <div className={isPlayed ? "visible" : "invisible"}>
            <VolumeAdjuster onChangeVolume={changeVolume} volume={volume} />
          </div>
        }
      </div>
    </div>
  );
}
