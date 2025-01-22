import { HiMoon, HiSun } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const goGithub = () => {
    window.open("https://github.com/sunyangy");
  };
  return (
    <div>
      <header className="px-8 fixed backdrop-blur flex justify-between items-center w-full py-8 lg:px-64  bg-transparent border-b-2 bg-opacity-80 shadow-lg dark:bg-gray-900/30 dark:border-slate-950 dark:text-white">
        <div>
          {/* <img src="./favicon.ico" alt="website logo" /> */}
          <h1 className="text-2xl italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Atmosphere Focus
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex gap-2">
            <div onClick={toggleDarkMode}>
              {isDarkMode ? (
                <HiSun size={36} className="cursor-pointer" />
              ) : (
                <HiMoon size={36} className="cursor-pointer" />
              )}
            </div>

            <AiFillGithub
              size={36}
              className="cursor-pointer"
              onClick={goGithub}
            />
          </div>
          <div></div>
        </div>
      </header>
    </div>
  );
}
