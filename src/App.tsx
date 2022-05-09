import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { useState } from "react";

function App() {
  const [darkMode, darkModeSet] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen w-screen bg-lmBg dark:bg-dmBg text-lmTxt dark:text-dmTxt h-full flex flex-col">
        <Header darkMode={darkMode} darkModeSet={darkModeSet} />
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/country" element={<Country />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
