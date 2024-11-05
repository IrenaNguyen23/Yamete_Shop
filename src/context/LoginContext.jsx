import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const user = response.data;
            localStorage.setItem('user', JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage
            navigate("/");
            window.location.reload();

        } catch (error) {
            console.error('Đăng nhập thất bại:', error.response);
            alert("Thông tin đăng nhập không chính xác!")
            setError(error.response.data.message);

            // Thêm logic xử lý sau khi đăng nhập thất bại (ví dụ: hiển thị thông báo lỗi)
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <LoginContext.Provider value={{ handleChange, handleSubmit, loading, error, formData }}>
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };