import React, { useEffect, useRef, useState } from 'react'
import { GET_ALL } from '../../service/apiService';
import { Link } from 'react-router-dom';

const ProductFeatured = () => {
    const pagesize = 2;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GET_ALL(`products/getsale?pagesize=${pagesize}`).then((item) =>
            setProducts(item.data)
        );
    }, []);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTime = () => {
        const countdownDate = new Date("Jan 5, 2025 15:37:25").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTime();
        return () => {
            clearInterval(interval.current);
        };
    })
    return (
        <div className="product-featured">
            <h2 className="title">Deal of the day</h2>
            <div className="showcase-wrapper has-scrollbar">
                {products.length > 0 &&
                    products.map((row) => (
                        <div className="showcase-container" key={row.id}>
                            <div className="showcase">
                                <Link to={`/detail?productId=${row.id}`}>
                                    <div className="showcase-banner">
                                        <img
                                            src={`./images/items/${row.thumbnail}`}
                                            alt="shampoo, conditioner & facewash packs"
                                            className="showcase-img"
                                        />
                                    </div>
                                </Link>
                                <div className="showcase-content">
                                    <div className="showcase-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star-outline" />
                                        <ion-icon name="star-outline" />
                                    </div>
                                    <a href="#">
                                        <h3 className="showcase-title">
                                            {row.title}
                                        </h3>
                                    </a>
                                    <p className="showcase-desc">
                                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                                        dolor sit amet consectetur Lorem ipsum dolor
                                    </p>
                                    <div className="price-box">
                                        <p className="price">${row.discount}</p>
                                        <del>${row.price}</del>
                                    </div>
                                    <button className="add-cart-btn">add to cart</button>
                                    <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>
                                                already sold: <b>20</b>
                                            </p>
                                            <p>
                                                available: <b>40</b>
                                            </p>
                                        </div>
                                        <div className="showcase-status-bar" />
                                    </div>
                                    <div className="countdown-box">
                                        <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                                        <div className="countdown">
                                            <div className="countdown-content">
                                                <p className="display-number">{timerDays}</p>
                                                <p className="display-text">Days</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{timerHours}</p>
                                                <p className="display-text">Hours</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{timerMinutes}</p>
                                                <p className="display-text">Min</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{timerSeconds}</p>
                                                <p className="display-text">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ProductFeatured
