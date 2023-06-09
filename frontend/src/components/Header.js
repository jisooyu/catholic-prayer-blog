import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Link, Menu, MenuItem, useMediaQuery } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    const typoStyle = {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        marginLeft: isIphone13 ? '2px' : '8px',
        fontSize: '14px'
    }

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
    const toolbarStyle = {
        display: 'flex',
        flexDirection: isIphone13 ? 'column' : 'row',
        alignItems: 'left',
        justifyContent: 'space-evenly',
    }
    return (
        <div style={{ height: 'auto' }}>
            <AppBar position="sticky">
                <Toolbar sx={toolbarStyle} >
                    <Typography>
                        <SlowMotionVideoIcon sx={{ color: 'white' }} />
                        <Link href='/' sx={typoStyle} >
                            주님의 기도
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href='/prague' sx={typoStyle} >
                            프라그 아기예수님기도
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href='/fatima' sx={typoStyle}>
                            파티마 성모님발현
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href='/faust' sx={typoStyle}>
                            하느님 자비의 기도
                        </Link>
                    </Typography>

                    {/* problem occurs here. 왜 MenuItem을 선택하면 header의 color가 바뀔까? */}
                    <Typography sx={typoStyle} onClick={handleMenuOpen}>
                        묵주기도
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

                    <Toolbar style={toolbarStyle}>
                        {userObject ? (
                            <div style={{
                                display: 'flex',
                                cursor: 'pointer'
                            }}>
                                <LogoutIcon onClick={googleLogout} />
                                <Typography sx={typoStyle} onClick={googleLogout} variant='body1'>Logout</Typography>
                            </div>
                        ) : (
                            <div style={{
                                display: 'flex',
                                cursor: 'pointer'
                            }}>
                                <LoginIcon onClick={googleLogin} />
                                <Typography sx={typoStyle} onClick={googleLogin} variant='body1'>Google Login</Typography>
                            </div>
                        )}
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </div >
    );
}
export default Header;
