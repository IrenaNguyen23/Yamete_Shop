import React, { useEffect, useState } from 'react';
import { GET_ALL } from '../../service/apiService';
import { Link } from 'react-router-dom';

const ProductShowcase = ({ title, products }) => {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const productChunks = chunkArray(products, 4);

  // Giới hạn độ dài tiêu đề, nếu quá dài, sẽ cắt bớt và thêm ba chấm
  const truncateTitle = (title, maxLength = 30) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className="product-showcase">
      <h2 className="title">{title}</h2>
      <div className="showcase-wrapper has-scrollbar">
        {productChunks.map((chunk, index) => (
          <div className="showcase-container" key={index}>
            {chunk.map((product) => (
              <div className="showcase" key={product.id}>
                <Link to={`/detail?productId=${product.id}`}>
                  <a href="#" className="showcase-img-box">
                    <img
                      src={`./images/items/${product.thumbnail}`} // Hình ảnh sản phẩm
                      alt={product.title}
                      width={70}
                      className="showcase-img"
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{truncateTitle(product.title)}</h4>
                    </a>
                    <a href="#" className="showcase-category">
                      {product.brand || product.category} {/* Hiển thị thương hiệu hoặc danh mục */}
                    </a>
                    <div className="price-box">
                      <p className="price">${product.price}</p>
                      {product.discountPrice && <del>${product.discountPrice}</del>} {/* Hiển thị giá giảm nếu có */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductMinimal = () => {
  const [products, setProducts] = useState([]);
  const [productsTrending, setProductsTrending] = useState([]);
  const [productsTopRates, setProductsTopRates] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await GET_ALL(`products?page=0&size=8`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };

    const fetchTrendingProducts = async () => {
      try {
        const response = await GET_ALL(`products?page=1&size=8`);
        setProductsTrending(response.data);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    };

    const fetchTopRatesProducts = async () => {
      try {
        const response = await GET_ALL(`products?page=2&size=8`);
        setProductsTopRates(response.data);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    };

    fetchProducts();
    fetchTrendingProducts();
    fetchTopRatesProducts()
  }, []);

  return (
    <div className="product-minimal">
      <ProductShowcase title="New Arrivals" products={products} />
      <ProductShowcase title="Trending" products={productsTrending} />
      <ProductShowcase title="Top Rates" products={productsTopRates} />
    </div>
  );
};

export default ProductMinimal;
