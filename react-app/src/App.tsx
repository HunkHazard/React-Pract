import { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  let data = [];

  for (let i = 0; i < 17; i++) {
    data.push([
      "02/02/2023 - 6:37 PM",
      17.6,
      17.6,
      17.4,
      51.5,
      51.6,
      51.4,
      7.5,
      14.5,
      30.013,
      30.011,
      30.1,
    ]);
  }

  return (
    <div>
      <Navbar />
      <Table data={data} />
    </div>
  );
}

export default App;
