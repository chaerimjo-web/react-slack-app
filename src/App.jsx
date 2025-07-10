import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";
import { useEffect } from "react";

function App() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        navigate('/');
      } else {
        navigate('/login');
      }
    })
    return () => {
      unsubscribe();
    }
  })

  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
