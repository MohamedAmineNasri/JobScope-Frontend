import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import JobList from "./pages/JOBLISTING/JobList";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/user/UserDashboard";
import UserRoute from "./components/UserRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserJobsHistory from "./pages/user/UserJobsHistory";
import HistoryJobUser from "./pages/user/HistoryJobUser";


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/login_signup" element={<Loginsignup />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/search/location/:location" element={<JobList />} />
          <Route path="/search/:keyword" element={<JobList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminDash" element={<AdminDashboard />} />
          <Route
            path="/JobHistory"
            element={
              <UserRoute>
                <UserJobsHistory />
              </UserRoute>
            }
          />
          <Route
            path="/user/JobHistory"
            element={
              <UserRoute>
                <HistoryJobUser />
              </UserRoute>
            }
          />
          <Route
            path="/UserDash"
            element={
              <UserRoute>
                <UserDashboard />
              </UserRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
