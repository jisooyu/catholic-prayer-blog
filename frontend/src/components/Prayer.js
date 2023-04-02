import * as React from 'react';
import { styled, Grid, Paper, Typography, ButtonBase, useMediaQuery, useTheme } from '@mui/material'

const Prayer = ({ prayer }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: isSmallScreen ? '82vw' : '40vw',
        marginTop: isSmallScreen ? '2em' : '1em',
        marginLeft: isSmallScreen ? '2em' : '5em',
        height: isSmallScreen ? '55vh' : '35vh',
        paddingTop: isSmallScreen ? '2em' : '1em',
        overflow: 'scroll',
    };
    return (
        <Paper
            elevation={0}
            sx={paperStyle}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 150, height: 150 }}>
                        <Img alt="complex" src={prayer.img} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {prayer.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {prayer.content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                {prayer.repeat}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}
export default Prayer;