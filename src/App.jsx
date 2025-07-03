import "./App.css";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import ResistorPage from "./pages/ResistorPage";

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
