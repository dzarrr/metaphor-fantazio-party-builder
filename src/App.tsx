import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/joy/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="soft">Here's my button</Button>
    </>
  );
}

export default App;
