import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
