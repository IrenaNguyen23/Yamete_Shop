import React, { useEffect, useState } from 'react'
import { GET_ALL } from '../../service/apiService';
import { Link } from 'react-router-dom';

const ProductCategory = (category) => {
    const { categoryName, categoryId } = category;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) =>
            setProducts(item.data)
        );
    }, [categoryId]);
  return (
    <div className="product-main">
                <h3 className="title-section">{categoryName}</h3>

                <div className="product-grid">
                    {products.length > 0 &&
                        products.map((product) => (
                            <>
                                <div className="showcase" key={product.id}>
                                    <div className="showcase-banner">
                                        <Link to={`/detail?productId=${product.id}`}>
                                        {" "}
                                        <img src={`./images/items/${product.thumbnail}`} alt="" className="product-img default"
                                            width="300" /> {" "}
                                        {" "}
                                        <img src={`./images/items/${product.thumbnail}`} alt="" className="product-img hover"
                                            width="300" />{" "}

                                        </Link>
                                        <p className="showcase-badge angle pink">new</p>

                                        <div className="showcase-actions">
                                            <button className="btn-action">
                                                <ion-icon name="heart-outline"></ion-icon>
                                            </button>

                                            <button className="btn-action">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </button>

                                            <button className="btn-action">
                                                <ion-icon name="repeat-outline"></ion-icon>
                                            </button>

                                            <button className="btn-action">
                                                <ion-icon name="bag-add-outline"></ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="showcase-content">
                                        <a href="#" className="showcase-category">{product.brand}</a>

                                        <h3>
                                            <Link to={`/detail-product?productId=${product.id}`} className="showcase-title">{product.title}</Link>
                                        </h3>

                                        <div className="showcase-rating">
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                        </div>

                                        <div className="price-box">
                                            <p className="price">${product.price}</p>
                                        </div>

                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
  )
}

export default ProductCategory
