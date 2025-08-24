import { useEffect } from "react";
import "./App.css";
import { keepTheme } from "./utils/themes.js";
import HomeLayout from "./layouts/HomeLayout.jsx";

function App() {
  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <>
      <HomeLayout />
    </>
  );
}

export default App;
