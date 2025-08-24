import { setTheme } from "../utils/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setTogTheme }) {
  const handleThemeToggle = () => {
    if (localStorage.getItem("theme") == "theme-dark") {
      setTheme("theme-light");
      setTogTheme("light");
    } else if (localStorage.getItem("theme") == "theme-light") {
      setTheme("theme-dark");
      setTogTheme("dark");
    }
  };

  return (
    <div className="fixed w-full border-b border-gray-300 flex justify-around items-center">
      <div className="font-bold text-2xl px-4 py-2">Suresh</div>
      <ul className="flex">
        <li className="px-2 mx-2 cursor-pointer">Home</li>
        <li className="px-2 mx-2 cursor-pointer">About</li>
        <li className="px-2 mx-2 cursor-pointer">Skills</li>
        <li className="px-2 mx-2 cursor-pointer">Projects</li>
        <li className="px-2 mx-2 cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center">
        <button
          onClick={handleThemeToggle}
          className="rounded-full text-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <button className="px-8 py-1 mx-2 my-4 border rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
}
