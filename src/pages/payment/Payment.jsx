import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_ADD } from "../../service/apiService";
import { Box, TextField, Button, Typography, Card, CardContent, Grid, Alert } from "@mui/material";

const Payment = () => {
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [note, setNote] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [total_money, setTotalMoney] = useState("");
    const [user_id, setUserId] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserId(user.id);
            setFullName(user.fullname);
            setEmail(user.email);
            setPhoneNumber(user.phone_number);
            setAddress(user.address);
        }
    }, []);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems) {
            const total = cartItems.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
            setTotalMoney(total);
        }
    }, []);

    const handleConfirmPayment = async () => {
        try {
            const orderData = {
                address,
                email,
                fullname,
                note,
                order_date: new Date().toISOString(),
                phone_number,
                total_money,
                user_id,
            };
    
            const response = await POST_ADD('orders', orderData);
    
            if (response && response.status === 201) { // Kiểm tra mã trạng thái HTTP 201 (Created)
                localStorage.removeItem('cartItems');
                setSuccess("Order placed successfully!");
                navigate("/checkout");
            } else {
                setError('Error placing order: ' + (response ? response.statusText : 'Unknown error'));
            }
        } catch (error) {
            setError("An error occurred: " + error.message);
        }
    };
    

    return (
        <div className="container">
            <Box sx={{ padding: 4 }}>
                <Grid container spacing={3}>
                    {/* Left side: Delivery Info */}
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Delivery Info</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Email"
                                            type="email"
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Full Name"
                                            fullWidth
                                            value={fullname}
                                            onChange={(e) => setFullName(e.target.value)}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Address"
                                            fullWidth
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Phone"
                                            fullWidth
                                            value={phone_number}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    label="Note"
                                    multiline
                                    rows={3}
                                    fullWidth
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    variant="outlined"
                                    sx={{ marginTop: 2 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Right side: Payment */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Payment</Typography>
                                <Typography variant="h6" color="textSecondary">Total: ${total_money}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                    onClick={handleConfirmPayment}
                                >
                                    Confirm Order
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ marginTop: 2 }}>{success}</Alert>}
            </Box>
        </div>
    );
};

export default Payment;
