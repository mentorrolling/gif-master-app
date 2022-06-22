import { Routes, Route } from "react-router-dom";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import SignUp from "../pages/SignUp";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesApp;
