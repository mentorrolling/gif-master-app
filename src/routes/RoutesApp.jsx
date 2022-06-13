import { Routes, Route } from "react-router-dom";
import EntertainmentScreen from "../pages/EntertainmentScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import ReactionsScreen from "../pages/ReactionsScreen";
import SignUp from "../pages/SignUp";
import SportsScreen from "../pages/SportsScreen";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/reactions" element={<ReactionsScreen />} />
      <Route path="/entertainment" element={<EntertainmentScreen />} />
      <Route path="/sports" element={<SportsScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesApp;
