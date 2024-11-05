import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_ID, GET_PAGE } from "../../service/apiService";
import { Box, Typography, Select, MenuItem, Button, Grid, Pagination, Breadcrumbs, Card } from "@mui/material";
import { CardBody, CardImg } from "react-bootstrap";

const Listing = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [totalPages, setTotalPages] = useState(1);
    const numItems = 8;
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    let categoryId = queryParams.get("categoryId");

    const handlePageChange = (event, page) => {
        navigate(`/listing?page=${page}&categoryId=${categoryId}`);
    };

    useEffect(() => {
        if (categoryId === "null") {
            categoryId = null;
        }
        GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
            (response) => {
                setProducts(response.data);
                const contentRangeHeader = response.headers["content-range"];
                const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
                const calculatedTotalPages = Math.ceil(totalItems / numItems);
                setTotalPages(calculatedTotalPages);
            }
        );

        if (categoryId !== null) {
            GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
        } else {
            setCategories({ name: "Tất cả sản phẩm" });
        }
    }, [categoryId, currentPage]);

    return (
        <div className="container">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link to="/">Trang chủ</Link>
                <Typography color="text.primary"> {categories.name}</Typography>
            </Breadcrumbs>

            <Grid container spacing={2}>
                {products.length > 0 && products.map((row) => (
                    <Grid item xs={12} sm={6} md={3} key={row.id}>
                        <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: 2 }}>
                            <Link to={`/detail?productId=${row.id}`}>
                                <Box sx={{ position: 'relative', overflow: 'hidden', height: '300px' }}> {/* Thay đổi chiều cao tại đây */}
                                    <img
                                        src={`./images/items/${row.thumbnail}`}
                                        alt={row.title}
                                        style={{
                                            width: '100%',
                                            height: '100%', // Chiều cao 100% để lấp đầy div cha
                                            objectFit: 'cover', // Giữ tỷ lệ khung hình mà không làm biến dạng
                                            position: 'absolute', // Để giữ cho hình ảnh lấp đầy div
                                            padding: 10
                                        }}
                                    />
                                </Box>
                            </Link>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="body1" component="div" sx={{ mb: 1 }}>
                                    <Link to={`/detail?productId=${row.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                                        {row.title}
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                    ${row.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {row.brand}
                                </Typography>
                                <Button variant="contained" color="primary" fullWidth>
                                <ion-icon name="cart"></ion-icon> Mua ngay
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>


            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                />
            </Box>

        </div>
    );
};

export default Listing;
