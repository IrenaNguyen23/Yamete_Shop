import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import payment from '../../assets/images/misc/payments.png'
import { Breadcrumbs, Button, Box, Typography, IconButton, Divider, Grid, TextField, Card, CardContent, Stack } from '@mui/material';
import { Home, ShoppingCart, Delete, FavoriteBorder, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { CartContext } from "../../context/CartProvider";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, handleRemoveFromCart, calculateTotalPrice } = useContext(CartContext);

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.");
            return;
        }
        navigate("/payment");
    };

    return (
        <div className="container">
            <Box sx={{ p: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Typography color="text.primary">Cart</Typography>
                </Breadcrumbs>
            </Box>

            <section className="section-content padding-y">
                <Box className="container">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Shopping Cart
                                    </Typography>
                                    <Divider />
                                    {cartItems.map((item) => (
                                        <Box key={item.id} display="flex" alignItems="center" py={2}>
                                            <img src={`./images/items/${item.thumbnail}`} alt="Product" width={80} height={80} />
                                            <Box ml={2} flexGrow={1}>
                                                <Link to={`/detail?productId=${item.id}`} className="title text-dark">
                                                    <Typography variant="subtitle1">{item.title}</Typography>
                                                </Link>
                                                <Typography variant="body2" color="text.secondary">
                                                    Quantity: {item.quantity} 
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Brand: {item.brand} 
                                                </Typography>

                                            </Box>
                                            <Typography variant="body1">${item.price}</Typography>
                                            <Box ml={2} display="flex" alignItems="center">
                                                <IconButton onClick={() => handleRemoveFromCart(item.id)} color="secondary">
                                                    <Delete />
                                                </IconButton>
                                                <IconButton color="default">
                                                    <FavoriteBorder />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    ))}
                                    <Divider />
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                                        <Button component={Link} to="/" startIcon={<ChevronLeft />}>
                                            Continue Shopping
                                        </Button>
                                        <Button variant="contained" color="primary" endIcon={<ChevronRight />} onClick={handleCheckout}>
                                            Checkout
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>

                            <Box mt={3}>
                                <Typography variant="body2" color="success.main" align="center">
                                    <ShoppingCart sx={{ mr: 1 }} /> Free Delivery within 1-2 weeks
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Order Summary
                                    </Typography>
                                    <Divider />
                                    <Stack spacing={2} my={2}>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography>Total price:</Typography>
                                            <Typography>${calculateTotalPrice}</Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography>Discount:</Typography>
                                            <Typography>0 %</Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="space-between" fontWeight="bold">
                                            <Typography>Total:</Typography>
                                            <Typography>${calculateTotalPrice}</Typography>
                                        </Box>
                                    </Stack>
                                    <Divider />
                                    <Box mt={2}>
                                        <Typography variant="body2" align="center" color="text.secondary">
                                            <img src={payment} alt="Payment methods" height="26" />
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>

                            <Card sx={{ mt: 3 }}>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Have a coupon?
                                    </Typography>
                                    <TextField variant="outlined" size="small" placeholder="Coupon code" fullWidth />
                                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                        Apply
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </div>
    );
};

export default Cart;
