import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { LangContext } from "./context/LangContext";

function App() {
  const [lang, setLang] = useState("bn");

  return (
    <div>
      <LangContext.Provider value={{ lang, setLang }}>
        <Navbar onChange={setLang} />
        <Outlet />
      </LangContext.Provider>
    </div>
  );
}

export default App;