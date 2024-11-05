import React, { useContext } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, Alert, Divider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
    const navigate = useNavigate();
    const { handleChange, handleSubmit, loading, error, formData } = useContext(LoginContext);

    const handleLoginSuccess = (credentialResponse) => {
        const decode = jwtDecode(credentialResponse.credential);
        sessionStorage.setItem('gmailCredential', JSON.stringify(decode));
        navigate("/");
        window.location.reload();
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={loading}
                    >
                        {loading ? 'Đang đăng nhập...' : 'Sign In'}
                    </Button>
                    {error && <Alert severity="error">{error}</Alert>}
                    <Grid container sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
                        <Grid item xs>
                            <Link to="#" style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.9rem' }}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.9rem' }}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 3 }}>or sign in with</Divider>
                    <Box sx={{ m:3, display: 'flex', justifyContent: 'center' }}>
                        <GoogleOAuthProvider clientId="988031595318-mhvbe5vbu285hpoovdqi9b8evg4uqi8v.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginError}
                                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                            />
                        </GoogleOAuthProvider>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
