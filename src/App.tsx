import { CssVarsProvider } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { ArchetypeCard } from "./components/ArchetypeCard";
import { archetypeList } from "./const/archetypeList";

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
