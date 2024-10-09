import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { ArchetypeCard } from "./components/ArchetypeCard";
import "./App.css";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <ArchetypeCard title="Archetype #1" formSelectName="archetype-1" />
      <ArchetypeCard title="Archetype #2" formSelectName="archetype-2" />
      <ArchetypeCard title="Archetype #3" formSelectName="archetype-3" />
      <ArchetypeCard title="Archetype #4" formSelectName="archetype-4" />
    </CssVarsProvider>
  );
}

export default App;
