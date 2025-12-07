import React, { useContext } from "react";
import { apiValue } from "./data/AllData";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";

function App() {
  const data = useContext(apiValue);
  console.log(data);
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
