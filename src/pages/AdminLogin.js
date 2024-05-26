import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });

            if (response.data.success) {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('token', response.data.token); // Token saklanıyor
                navigate('/admin');
            } else {
                setError('Kullanıcı adı veya şifre hatalı');
            }
        } catch (error) {
            console.error('Giriş sırasında hata oluştu:', error);
            setError('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="admin-login">
            <h2>Admin Girişi</h2>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Giriş Yap</button>
        </div>
    );
}

export default AdminLogin;
