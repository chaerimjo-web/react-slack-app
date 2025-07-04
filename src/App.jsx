import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ResistorPage from "./pages/ResistorPage/ResistorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/resistor" element={<ResistorPage />} />
    </Routes>
  );
}

export default App;
