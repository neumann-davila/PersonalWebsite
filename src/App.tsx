import "./index.css";
import { Landing } from "./pages/landing.tsx"
import { Heading } from "./objects/heading.tsx"
import { IconGroup } from "./objects/icon-group.tsx";

export function App() {
  return (
    <div className="app">
      <Heading />
      <Landing />
      <IconGroup id="footer-icons"/>
    </div>
  );
}

export default App;
