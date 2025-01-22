import { AiOutlinePause, AiOutlineMuted } from "react-icons/ai";
import { HiOutlinePlay } from "react-icons/hi2";

export default function Player() {
  return (
    <div className=" absolute bottom-0 shadow-lg border-t-2 w-full bg-black text-white">
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center justify-center gap-8">
          <AiOutlinePause className="hidden" />
          <HiOutlinePlay size={20} className="cursor-pointer" />
          <img src="./favicon.ico" alt="sound cover" />
        </div>
        <div className="">跳动的节奏</div>
        <div>
          <div className="flex items-center justify-center gap-4">
            <AiOutlineMuted />
            <div>
              <input type="range" name="range" min="0" max="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
