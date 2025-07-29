import "./index.css";
import { Landing } from "./pages/landing.tsx"
import { Heading } from "./objects/heading.tsx"
import { Footer } from "./objects/footer.tsx";

export function App() {
  return (
    <div className="app">
      <Heading />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
