import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import ErrorPage from "../pages/ErrorPage";
// import HelloWorld from "../pages/HelloWorld";
// import UsersForTest from "../components/usersForTest/UsersForTest";

const AppRouter = () => (
        <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            {/* 
            <Route path="/hello" element={<HelloWorld/>} />
            <Route path="/users-test" element={<UsersForTest/>} />
             */}
        </Routes>
    );

export default AppRouter;