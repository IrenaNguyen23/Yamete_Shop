import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setIsLoggedIn(true);
      setUserName(user.fullname); // Thay 'fullname' với trường tương ứng
      setEmail(user.email);
      setAddress(user.address);
    }
  }, []);

  useEffect(() => {
    // Lấy thông tin người dùng từ sessionStorage (dành cho Gmail login)
    const user = JSON.parse(sessionStorage.getItem('gmailCredential'));

    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name); // Thay 'name' với trường tương ứng
      setEmail(user.email);
      setAddress(user.en); // Ví dụ là trường 'en' cho địa chỉ
      setAvatar(user.picture); // Avatar từ Gmail
    }
  }, []);

  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi storage và cập nhật state
    localStorage.removeItem('user');
    sessionStorage.removeItem('gmailCredential');
    setIsLoggedIn(false);
    setUserName('');
    setEmail('');
    setAddress('');
    setAvatar('');
    navigate('/');
    window.location.reload();
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {/* Avatar and name */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="User Avatar"
              src={avatar || 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png'} // Nếu không có avatar, dùng ảnh mặc định
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">{userName || 'User Name'}</Typography>
            <Typography variant="body1" color="textSecondary">
              {email || 'user@example.com'}
            </Typography>
          </Grid>
        </Grid>

        {/* Address */}
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6">Address</Typography>
          <Typography variant="body2" color="textSecondary">
            {address || 'No address provided'}
          </Typography>
        </Box>

        {/* Button for editing profile or logging out */}
        <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserProfile;
