import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "./SignUp"; // ייבוא קומפוננטת ההרשמה
import "./App.css"; // אופציונלי: לייבא עיצוב כללי לאפליקציה
import "./SignUp.css"; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* תפריט ניווט */}
        <nav className="navbar">
          <h2 className="logo">My Investment App</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>

        {/* הגדרת הנתיבים */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

// דף בית פשוט (אפשר להרחיב אותו)
const Home = () => (
  <div className="home-container">
    <h2>Welcome to the  the Investment Platform</h2>
    <p>Start your journey by signing up!</p>
  </div>
);

export default App;
