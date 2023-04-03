import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Link, Menu, MenuItem, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    // const theme = useTheme();
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery('(max-width:375px)');
    const theme = createTheme({
        typography: {
            body1: {
                fontSize: isSmallScreen ? '8px' : '16px',
            },
        },
    });

    const userObject = useContext(userContext);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const googleLogin = () => {
        window.location.href = '/auth/google';
    };

    const googleLogout = async () => {
        try {
            await axios.post('/api/logout');
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    };

    const handleMenuOpen = (event) => {
        document.body.classList.add('menu-open');
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        document.body.classList.remove('menu-open');
        setAnchorEl(null);
    };

    const handleMenuItemClick = (route) => {
        handleMenuClose();
        navigate(route);
    }

    const linkTextStyle = {
        textDecoration: 'none',
        color: '#e3e3e3',
        marginLeft: isSmallScreen ? '3px' : '20px !important'
    };

    return (
        <div style={{ height: 'auto' }}>
            <ThemeProvider theme={theme}>
                <AppBar>
                    <Toolbar sx={{ marginLeft: isSmallScreen ? '1px' : '5px', marginBottom: isSmallScreen ? '1px' : '10px' }} >
                        <SlowMotionVideoIcon sx={{ color: 'white !important' }} />
                        <Typography>
                            <Link href='/' sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} style={{ fontSize: isSmallScreen ? '10px !important' : '16px !important' }}>
                                Catholic Prayers
                            </Link>                     <Link href='/' sx={linkTextStyle} style={{ fontSize: isSmallScreen ? '10px' : '16px' }}>Catholic Prayers</Link>
                        </Typography>
                        <Typography>
                            <Link href='/prague' sx={linkTextStyle}>Infant Jesus</Link>
                        </Typography>
                        <Typography>
                            <Link href='/fatima' sx={linkTextStyle}>Our Lady of Fatima</Link>
                        </Typography>
                        <Typography>
                            <Link href='/faust' sx={linkTextStyle}>Sister Faustina</Link>
                        </Typography>

                        {/* problem occurs here. 왜 MenuItem을 선택하면 header의 color가 바뀔까? */}
                        <Typography sx={{ cursor: 'pointer', color: '#e3e3e3', }} onClick={handleMenuOpen}>
                            Rosary
                        </Typography>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                onClick={() => handleMenuItemClick('/joyful')}
                            >Joyful Mysteries</MenuItem>
                            <MenuItem
                                onClick={() => handleMenuItemClick('/luminous')}
                            >Luminous Mysteries</MenuItem>
                            <MenuItem
                                onClick={() => handleMenuItemClick('/sorrowful')}
                            >Sorrowful Mysteries</MenuItem>
                            <MenuItem
                                onClick={() => handleMenuItemClick('/glorious')}
                            >Glorious Mysteries</MenuItem>
                        </Menu>

                        <Toolbar style={{ marginLeft: 'auto' }}>
                            {userObject ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <LogoutIcon onClick={googleLogout} />
                                    <Typography onClick={googleLogout} variant='body1'>Logout</Typography>
                                </div>
                            ) : (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <LoginIcon onClick={googleLogin} />
                                    <Typography onClick={googleLogin} variant='body1'>Google Login</Typography>
                                </div>
                            )}
                        </Toolbar>
                    </Toolbar>
                </AppBar>
            </ ThemeProvider>
        </div>
    );
}
export default Header;
