import React from 'react'
import R from '../../assets/images/avatars/R.png'
import quost from '../../assets/images/icons/quotes.svg'
const Testimonials = () => {
    return (
        <div className="testimonial">
            <h2 className="title">testimonial</h2>
            <div className="testimonial-card">
                <img
                    src={R}
                    alt="alan doe"
                    className="testimonial-banner"
                    width={80}
                    height={80}
                />
                <p className="testimonial-name">Alan Doe</p>
                <p className="testimonial-title">CEO &amp; Founder Invision</p>
                <img
                    src={quost}
                    alt="quotation"
                    className="quotation-img"
                    width={26}
                />
                <p className="testimonial-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
                    amet.
                </p>
            </div>
        </div>
    )
}

export default Testimonials
