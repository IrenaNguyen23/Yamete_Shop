import React, { createContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_ID } from '../service/apiService';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    const [cartItems, setCartItems] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        if (productId) {
            GET_ID(`products`, productId).then((item) => setProduct(item.data));
        }
    }, [productId]);

    // Cập nhật hàm handleAddToCart để nhận thêm số lượng
    const handleAddToCart = useCallback((productToAdd, quantity) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item.id === productToAdd.id);
            let updatedCartItems;

            if (existingItem) {
                // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
                updatedCartItems = prevCartItems.map(item => 
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                // Nếu sản phẩm chưa có trong giỏ, thêm mới
                const newCartItem = { ...productToAdd, quantity: quantity };
                updatedCartItems = [...prevCartItems, newCartItem];
            }

            // Lưu giỏ hàng vào localStorage
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return updatedCartItems; // Đảm bảo state được cập nhật đúng
        });
    }, []);

    const handleRemoveFromCart = useCallback((productId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.filter((item) => item.id !== productId);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    }, []);

    const calculateTotalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            handleAddToCart, 
            handleRemoveFromCart, 
            calculateTotalPrice 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
