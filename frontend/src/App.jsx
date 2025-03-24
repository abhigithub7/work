import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Tools from "./pages/Tools";
import ResumeAI from "./pages/ResumeAI";
import Employer from "./pages/Employer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
// import Login from "./pages/LogInModal";
// import LoginInModal from "./pages/LogInModal";
import LogInModal from "./pages/LogInModal";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resumeai" element={<ResumeAI />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogInModal/>} />
      </Routes>
    </Router>
  );
};

export default App;




// import React from "react";
// import Home from "./pages/Home";

// const App = () => {
//   return <Home />;
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Features from "./pages/Features";
// import Tools from "./pages/Tools";
// import ResumeAI from "./pages/ResumeAI";
// import Employer from "./pages/Employer";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="pt-20 p-4"> {/* Add padding to prevent overlap with fixed navbar */}
//         <Routes>
//           <Route path="/features" element={<Features />} />
//           <Route path="/tools" element={<Tools />} />
//           <Route path="/resume-ai" element={<ResumeAI />} />
//           <Route path="/employer" element={<Employer />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

