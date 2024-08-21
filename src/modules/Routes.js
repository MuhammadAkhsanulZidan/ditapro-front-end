import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './member/pages/Login/Login';
import useAuth from '../hooks/useAuth';
import Dashboard from './member/pages/Dashboard/Dashboard';

const AppRoutes = () => {
    const { token } = useAuth();
    return (
        <Routes>
            <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} token={token} />} />        </Routes>
    );
};

const ProtectedRoute = ({ component: Component, token }) => {
    return token ? <Component /> : <Navigate to="/login" />;
};

export default AppRoutes;
