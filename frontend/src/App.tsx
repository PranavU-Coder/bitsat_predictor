// import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import About from "./About.tsx";
import Home from "./Home.tsx";
import Working from "./Working.tsx";


function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-950">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working" element={<Working />}> </Route>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home/>}></Route>
      </Routes>

      <Footer></Footer>

    </div>

    </>
  );
}

export default App
