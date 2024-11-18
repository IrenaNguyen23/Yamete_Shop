import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';

const Action = () => {
    const { cartItems } = useContext(CartContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('gmailCredential'));
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="header-user-actions">
            {isLoggedIn ? (
                <div>
                    <button className="action-btn">
                        <Link to="/profile">
                            <ion-icon name="person-outline" />
                        </Link>
                    </button>
                </div>
            ) : (
                <button className="action-btn">
                    <Link to="/login">
                        <ion-icon color="secondary" name="person-outline" />
                    </Link>
                </button>
            )}
            <button className="action-btn">
                <Link to="/cart">
                    <ion-icon name="heart-outline" color="secondary" />
                    <span className="count">0</span>
                </Link>
            </button>
            <button className="action-btn">
                <Link to="/cart">
                    <ion-icon color="secondary" name="bag-handle-outline" />
                    <span className="count">{cartItems.length}</span> {/* Sử dụng cartItems.length để lấy số lượng */}
                </Link>
            </button>
        </div>
    );
};

export default Action;