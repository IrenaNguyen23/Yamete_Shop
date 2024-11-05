import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Box,
    Avatar,
    Grid,
    Link,
    Alert,
    Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        password: '',
        email: '',
        address: '',
        phone_number: '',
        created_at: new Date().toISOString(),
        role_id: '2',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.status === 200) {
                setMessage("Registration successful!");
                alert("Registration successful!");
                navigate("/login");
            } else {
                setMessage("Email already exists.");
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ p: 4, mt: 6, borderRadius: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an Account
                    </Typography>
                    {message && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{message}</Alert>}
                    <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fullname"
                            label="Full Name"
                            name="fullname"
                            autoComplete="name"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="phone_number"
                            label="Phone Number"
                            type="tel"
                            id="phone_number"
                            autoComplete="tel"
                            value={formData.phone_number}
                            onChange={handleChange}
                            inputProps={{ pattern: "[0-9]{10}" }}
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={
                                <Typography variant="body2">
                                    I agree to all statements in&nbsp;
                                    <Link href="#" variant="body2" underline="hover">
                                        Terms of Service
                                    </Link>
                                </Typography>
                            }
                            sx={{ mt: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/login" variant="body2" underline="hover">
                                    {"Already have an account? Login here"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
