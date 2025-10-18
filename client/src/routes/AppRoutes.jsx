import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/user/login" replace />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/foodpartner/register" element={<FoodPartnerRegister />} />
            <Route path="/foodpartner/login" element={<FoodPartnerLogin />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes