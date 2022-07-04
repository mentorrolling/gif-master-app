import { Routes, Route } from "react-router-dom";
import CategoryScreen from "../pages/CategoryScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import SearchScreen from "../pages/SearchScreen";
import SignUp from "../pages/SignUp";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/category/:id" element={<CategoryScreen />} />
      <Route path="/search/:termino" element={<SearchScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesApp;
