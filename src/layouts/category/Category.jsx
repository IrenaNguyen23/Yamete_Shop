import React from 'react'
import LuuNiem from '../../assets/images/items/hopqua.jpg'
import MoHinh from '../../assets/images/items/mohinh.jpg'
import Electric from '../../assets/images/items/electric.jpg'
import Clothing from '../../assets/images/items/clothing.jpg'
import Tshirt from '../../assets/images/items/TShirt.jpg'
import Watch from '../../assets/images/items/dongho.jpg'
import Hat from '../../assets/images/items/mu.jpg'
import Jacket from '../../assets/images/items/jacket.jpg'
const Category = () => {
    return (
        <div className="category">
            <div className="container">
                <div className="category-item-container has-scrollbar">
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={LuuNiem}
                                alt="luu niem"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Quà lưu niệm</h3>
                                <p className="category-item-amount">(53)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={MoHinh}
                                alt="winter wear"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Mô hình trưng bày</h3>
                                <p className="category-item-amount">(58)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={Electric}
                                alt="glasses & lens"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Đồ điện tử</h3>
                                <p className="category-item-amount">(68)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={Clothing}
                                alt="shorts & jeans"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Thời trang</h3>
                                <p className="category-item-amount">(84)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={Tshirt}
                                alt="t-shirts"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">T-shirts</h3>
                                <p className="category-item-amount">(35)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={Jacket}
                                alt="jacket"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Jacket</h3>
                                <p className="category-item-amount">(16)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img src={Watch} alt="watch" width={30} />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Watch</h3>
                                <p className="category-item-amount">(27)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-img-box">
                            <img
                                src={Hat}
                                alt="hat & caps"
                                width={30}
                            />
                        </div>
                        <div className="category-content-box">
                            <div className="category-content-flex">
                                <h3 className="category-item-title">Hat &amp; caps</h3>
                                <p className="category-item-amount">(39)</p>
                            </div>
                            <a href="#" className="category-btn">
                                Show all
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
