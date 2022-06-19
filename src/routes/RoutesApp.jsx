import { Routes, Route } from "react-router-dom";
import EntertainmentScreen from "../pages/EntertainmentScreen";
import ErrorScreen from "../pages/ErrorScreen";
import GifScreen from "../pages/GifScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import ReactionsScreen from "../pages/ReactionsScreen";
import SearchScreen from "../pages/SearchScreen";
import SignUp from "../pages/SignUp";
import SportsScreen from "../pages/SportsScreen";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/reactions" element={<ReactionsScreen />} />
      <Route path="/entertainment" element={<EntertainmentScreen />} />
      <Route path="/sports" element={<SportsScreen />} />
      <Route path="/search/:termino" element={<SearchScreen />} />
      <Route path="/gif/:id" element={<GifScreen />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesApp;
