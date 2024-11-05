import React, { useEffect, useState } from 'react'
import { GET_ALL } from '../../service/apiService';
import { Link } from 'react-router-dom';

const ProductMain = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GET_ALL(`products/new`).then((item) =>
            setProducts(item.data)
        );
    }, []);

    return (
        <div className="product-main">
            <h2 className="title">New Products</h2>
            <div className="product-grid">
                {products.length > 0 &&
                    products.map((row) => (
                        <div className="showcase" key={row.id}>
                            <Link to={`/detail?productId=${row.id}`}>
                                <div className="showcase-banner">
                                    <img
                                        src={`./images/items/${row.thumbnail}`}
                                        alt="Black Floral Wrap Midi Skirt"
                                        className="product-img default"
                                        width={300}
                                    />
                                    <img
                                        src={`./images/items/${row.thumbnail}`}
                                        alt="Black Floral Wrap Midi Skirt"
                                        className="product-img hover"
                                        width={300}
                                    />
                                    <p className="showcase-badge angle pink">new</p>
                                    <div className="showcase-actions">
                                        <button className="btn-action">
                                            <ion-icon name="heart-outline" />
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="eye-outline" />
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="repeat-outline" />
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="bag-add-outline" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <div className="showcase-content">
                                <a href="#" className="showcase-category">{row.category.name}</a>
                                <h3>
                                    <a href="#" className="showcase-title">
                                        {row.title}
                                    </a>
                                </h3>
                                <div className="showcase-rating">
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                </div>
                                <div className="price-box">
                                    <p className="price">${row.price}</p>
                                    {/* <del>$35.00</del> */}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ProductMain
