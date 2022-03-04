import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
// import User from "./pages/User";
import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import "./style.scss";
import { UserContext } from "./UserContext";
import { useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const App = () => {
  const [user, setUser] = useState(null);
  const userToken = Cookies.get("token");

  // Fetch user data
  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3000/member-data`, {
      method: "GET",
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setUser(result.user);
  };

  // Check if there is a valid cookie
  const checkCookies = () => {
    if (typeof userToken === "string") {
      setUser(jwt_decode(userToken));
    }
  };

// Check cookie + fetch user when token change

  useEffect(() => {
    checkCookies();
    fetchUser();
  }, [userToken]);

  return (
    <div>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <NavBar />
            <main className="container">
              <Routes>
                {/* <Route path="*" element={<NotFound />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path="/sign_in" element={<SignIn />} />
                <Route path="/sign_out" element={<SignOut />} />
                <Route path="/profil" element={<Profile />} />
                {/* <Route path="/users"> */}
                {/* <Route path="/users/:id" element={<User />} /> */}
                {/* </Route> */}
              </Routes>
            </main>
          </Router>
        </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
