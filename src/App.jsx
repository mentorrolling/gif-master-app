import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import NavbarApp from "./components/NavbarApp";
import GifSearch from "./components/GifSearch";
import "./App.css";

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
