import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Working from "./Working";
import { ThemeProvider } from "./lib/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-[var(--brutal-bg)] text-[var(--brutal-text)] transition-colors duration-300 relative">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/working" element={<Working />} />
            <Route path="/about" element={<About />} />
            {/* Redirect /home to / */}
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
