import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { setTheme } from "../utils/themes";

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
    <>
      <Navbar setTogTheme={setTogTheme} />
    </>
  );
}
