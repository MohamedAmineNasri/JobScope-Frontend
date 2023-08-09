import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Loginsignup from "./pages/Login/Loginsignup";
import Header from "./components/Header";
import JobList from "./pages/JOBLISTING/JobList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/login_signup" element={<Loginsignup />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/search/location/:location" element={<JobList />} />
          {/* <Route path="/joblist" element={<JobLis />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
