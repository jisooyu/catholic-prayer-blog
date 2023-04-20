import React from 'react'
import { Grid, Typography, Paper, useMediaQuery } from '@mui/material'
// import { cardStyle } from '../styles/cardStyle';

const PrePrayer = ({ prePrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');

    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIphone13 ? '4em' : '3em',
        marginLeft: isIphone13 ? '1em' : '5em',
        height: isIphone13 ? '100vh' : '100vh',
        width: isIphone13 ? '90vw' : '65vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll'
    };

    return (
        <Paper elevation={0} sx={paperStyle} >
            <Grid container spacing={0.1} sx={paperStyle}>
                <Grid item xs={12} sm={3} textAlign="center" >
                    <Typography variant="h5" component="div">
                        {prePrayer.title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {prePrayer.hailMary}
                    </Typography>
                </Grid>
            </Grid>
            {/* 청원기도 */}
            <h3 >{prePrayer.petitionPrayerTitle}</h3>
            <div >
                <p style={{ marginTop: '20px', textAlign: 'left', }}>{prePrayer.petitionPrayer}</p>
            </div>
            <h3 >{prePrayer.repititionOne}</h3>
            {/* 감사기도 */}
            <h3 >{prePrayer.thanksgivingPrayerTitle}</h3>
            <div >
                <p style={{ marginTop: '20px', textAlign: 'left' }}>{prePrayer.thanksgivingPrayer}</p>
            </div>
            <h3>{prePrayer.repititionTwo}</h3>
        </Paper >
    )
}

export default PrePrayer