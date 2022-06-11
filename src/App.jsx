import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
