// src/modules/member/Routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MemberLogin from './pages/Login/Login';
import MemberDashboard from './pages/Dashboard/Dashboard'; // Example path
import useAuth from '../../../hooks/useAuth';

const MemberRoutes = () => {
    const { token, role } = useAuth();

    return (
        <Routes>
            <Route
                path="/login"
                element={token && role === 'member' ? <Navigate to="/dashboard" /> : <MemberLogin />}
            />
            <Route
                path="/dashboard"
                element={token && role === 'member' ? <MemberDashboard /> : <Navigate to="/login" />}
            />
            {/* Add more member-specific routes here */}
        </Routes>
    );
};

export default MemberRoutes;
