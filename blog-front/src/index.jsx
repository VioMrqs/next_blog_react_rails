import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
// import User from "./pages/User";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import "./style.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { AppContext } from "./SessionContext";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>
          <NavBar />
          <main className="container">
            <Routes>
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/sign_up" element={<Register />} />
              <Route path="/sign_in" element={<SignIn />} />
              <Route path="/sign_out" element={<SignOut />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* <Route path="/users"> */}
              {/* <Route path="/users/:id" element={<User />} /> */}
              {/* </Route> */}
            </Routes>
          </main>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

