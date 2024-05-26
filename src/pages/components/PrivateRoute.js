import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Kullanıcı doğrulama durumunu kontrol edin
    const token = localStorage.getItem('token'); // Token kontrolü

    return isAuthenticated && token ? children : <Navigate to="/admin/login" />;
}

export default PrivateRoute;
