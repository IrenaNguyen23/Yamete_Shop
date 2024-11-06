import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import { Breadcrumbs, Box, Typography, Button, IconButton, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Add, Remove, ShoppingCart, FavoriteBorder, Home } from '@mui/icons-material';
import { GET_ID } from "../../service/apiService";
import { CartContext } from "../../context/CartProvider";
import { NotificationContext } from "../../context/NotificationContext";
import RelatedProducts from "./RelatedProducts";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProductDetail = () => {
    const { handleAddToCart } = useContext(CartContext);
    const [product, setProduct] = useState({});
    const [galleries, setGalleries] = useState([]);
    const [amount, setAmount] = useState(1);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");
    const { showNotification, notificationMessage, showSuccessNotification } = useContext(NotificationContext);

    useEffect(() => {
        GET_ID(`products`, productId).then((item) => setProduct(item.data));
        GET_ID(`galleries/product`, productId).then((item) => setGalleries(item.data));
    }, [productId]);

    const addToCart = () => {
        handleAddToCart(product, amount); // Pass product and amount to addToCart
        showSuccessNotification('Thêm sản phẩm vào giỏ hàng thành công!');
    };

    // Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        showNotification(false); // Update the notification context to hide it
    };

    return (
        <div className="container">
            <Box sx={{ p: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link to="/products" color="inherit">
                        Products
                    </Link>
                    <Typography color="text.primary">{product.title}</Typography>
                </Breadcrumbs>
            </Box>

            <section className="py-5">
                <Box className="container">
                    <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {notificationMessage}
                        </Alert>
                    </Snackbar>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box className="border rounded-4 mb-3 d-flex justify-content-center">
                                <ReactImageGallery
                                    items={galleries.map((row) => ({
                                        original: `./images/thumbnail/${row.thumbnail}`,
                                        thumbnail: `./images/thumbnail/${row.thumbnail}`,
                                    }))}
                                    showFullscreenButton
                                    showPlayButton={false}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" component="h4" gutterBottom>
                                {product.title}
                            </Typography>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="body2" color="text.secondary">
                                    154 orders
                                </Typography>
                                <Typography variant="body2" color="success.main" sx={{ ml: 2 }}>
                                    In stock
                                </Typography>
                            </Box>

                            <Typography variant="h5" color="primary" component="p">
                                ${product.price}
                            </Typography>

                            <Typography variant="body1" paragraph>
                                Modern look and quality demo item is a streetwear-inspired collection that continues
                                to break away from the conventions of mainstream fashion.
                            </Typography>

                            <Box>
                                <Typography variant="body2" color="text.secondary">Brand: {product.brand}</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" mt={3} mb={3}>
                                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                                    Quantity
                                </Typography>
                                <IconButton onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}>
                                    <Remove />
                                </IconButton>
                                <Typography variant="body1" sx={{ mx: 1 }}>{amount}</Typography>
                                <IconButton onClick={() => setAmount((prev) => Math.min(prev + 1, 5))}>
                                    <Add />
                                </IconButton>
                            </Box>

                            <Box display="flex" gap={2}>
                                <Button variant="contained" color="secondary" startIcon={<ShoppingCart />} onClick={addToCart}>
                                    Add to Cart
                                </Button>
                                <Button variant="contained" color="primary">
                                    Buy Now
                                </Button>
                                <Button variant="outlined" color="default" startIcon={<FavoriteBorder />}>
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>

            {product.brand && <RelatedProducts currentProductBrand={product.category.id} />}
        </div>
    );
};

export default ProductDetail;
