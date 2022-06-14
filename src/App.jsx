import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GifSearch from "./components/GifSearch";
import NavbarApp from "./components/NavbarApp";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
      <NavbarApp />
      <GifSearch />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
