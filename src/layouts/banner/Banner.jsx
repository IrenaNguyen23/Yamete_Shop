import React from 'react'
import Banner1 from '../../assets/images/banner-1.jpg'
import Banner2 from '../../assets/images/banner-2.jpg'
import Banner3 from '../../assets/images/banner-3.jpg'
const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="slider-container has-scrollbar">
                        <div className="slider-item">
                            <img
                                src={Banner1}
                                alt="women's latest fashion sale"
                                className="banner-img"
                            />
                            {/* <div className="banner-content">
                                <p className="banner-subtitle">Trending item</p>
                                <h2 className="banner-title">Women's latest fashion sale</h2>
                                <p className="banner-text">
                                    starting at $ <b>20</b>.00
                                </p>
                                <a href="#" className="banner-btn">
                                    Shop now
                                </a>
                            </div> */}
                        </div>
                        <div className="slider-item">
                            <img
                                src={Banner2}
                                alt="modern sunglasses"
                                className="banner-img"
                            />
                            
                        </div>
                        <div className="slider-item">
                            <img
                                src={Banner3}
                                alt="new fashion summer sale"
                                className="banner-img"
                            />
                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
