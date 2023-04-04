import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Link, Menu, MenuItem, useMediaQuery, ThemeProvider, useTheme, } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
    const theme = useTheme();

    const isIphone13 = useMediaQuery(theme => theme.breakpoints.down('sm'));

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

    return (
        <div style={{ height: 'auto' }}>
            <ThemeProvider theme={theme}>
                <AppBar>
                    <Toolbar sx={{ marginLeft: isIphone13 ? '3px' : '5px', marginBottom: isIphone13 ? '1px' : '10px' }} >
                        <SlowMotionVideoIcon sx={{ color: 'white' }} />
                        <Typography>
                            <Link href='/' sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline', marginLeft: isIphone13 ? '2px' : '5px', fontSize: isIphone13 ? '8px' : '16px' } }} >
                                Catholic Prayers
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href='/' sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline', marginLeft: isIphone13 ? '2px' : '5px', fontSize: isIphone13 ? '8px' : '16px' } }} >
                                Infant Jesus
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href='/fatima' sx={{ fontSize: isIphone13 ? '10px !important' : '16px !important' }}>
                                Our Lady of Fatima
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href='/faust' sx={{ fontSize: isIphone13 ? '10px !important' : '16px !important' }}>
                                Sister Faustina
                            </Link>
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
