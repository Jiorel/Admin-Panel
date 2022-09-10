import "./App.css";
import { Button, Input, Checkbox, Select } from "./components";
import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//   },
// ]

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("Feminin");

  return (
    <div className="App">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <Checkbox checked={checked} onChange={setChecked} />
      <Button type="primary" onClick={() => console.log("clicked")}>
        Sign Up
      </Button>
      <Select
        options={["Masculin", "Feminin", "Ma abtin"]}
        value={selectValue}
        onChange={setSelectValue}
      />

      {/* <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart> */}
    </div>
  );
}

export default App;
