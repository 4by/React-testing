import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
// import Users from "../components/users/Users";
// import UserDetailsPage from "../pages/UserDetailsPage";
// import ErrorPage from "../pages/ErrorPage";
// import HelloWorld from "../pages/HelloWorld";
// import UsersForTest from "../components/usersForTest/UsersForTest";
const App = () => {
  return (

    <div>
      <Link to='/' data-testid="main-link"></Link>
      <Link to='/about' data-testid="about-link"></Link>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/hello" element={<HelloWorld />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users-test" element={<UsersForTest />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </div>

  )
}

export default App;
