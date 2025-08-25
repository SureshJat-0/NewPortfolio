import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { setTheme } from "../utils/themes";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";

export default function HomeLayout() {
  const [togTheme, setTogTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme") == "theme-dark") {
      setTheme("theme-dark");
    } else if (localStorage.getItem("theme") == "theme-light") {
      setTheme("theme-light");
    }
  }, [togTheme]);
  return (
    <div>
      <Navbar setTogTheme={setTogTheme} />
      <LandingPage />
      <AboutPage />
    </div>
  );
}
