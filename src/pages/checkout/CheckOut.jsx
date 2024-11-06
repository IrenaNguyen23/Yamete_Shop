import React from 'react'
import ButtonPayPal from './Paypal'

const CheckOut = () => {
    return (
        <div className="container">
            <h1 className="text-center">Chọn hình thức thanh toán</h1>
            <div style={{ marginLeft: 350 }}>
                <ButtonPayPal />
            </div>
        </div>
    )
}

export default CheckOut
