// RelatedProducts.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { GET_ID } from '../../service/apiService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProducts = ({ currentProductBrand }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const response = await GET_ID(`products/category`, currentProductBrand);
            setRelatedProducts(response.data);
        };

        fetchRelatedProducts();
    }, [currentProductBrand]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ mt: 4, position: 'relative' }}>
            <h2 className='title'>
                Sản phẩm liên quan
            </h2>
            <Slider {...settings} ref={sliderRef}>
                {relatedProducts.map((row) => (
                    <div className="showcase" key={row.id}>
                        <Link to={`/detail?productId=${row.id}`}>
                            <div className="showcase-banner">
                                <img
                                    src={`./images/items/${row.thumbnail}`}
                                    alt={row.title}
                                    className="product-img default"
                                    width={300}
                                />
                            </div>
                        </Link>
                        <div className="showcase-content">
                            <h5 className='showcase-title'>
                                <Link to={`/detail?productId=${row.id}`} >
                                    {row.title}
                                </Link>
                            </h5>
                            <div className="price-box">
                                <p className="price">${row.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: 'translateY(-50%)',
                zIndex: 10,
            }}>
                <IconButton onClick={() => sliderRef.current.slickPrev()} aria-label="Previous" sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                }}>
                    <ArrowBack />
                </IconButton>
                <IconButton onClick={() => sliderRef.current.slickNext()} aria-label="Next" sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                }}>
                    <ArrowForward />
                </IconButton>
            </Box>
        </Box>
    );
};

export default RelatedProducts;
