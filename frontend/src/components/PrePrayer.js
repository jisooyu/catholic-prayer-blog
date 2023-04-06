import React from 'react'
import { Paper, useMediaQuery } from '@mui/material'

const PrePrayer = ({ prePrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');

    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: isIphone13 ? '75vw' : '60vw',
        // marginTop: isIphone13 ? '4em' : '5em',
        // marginLeft: isIphone13 ? '3.5em' : '5em',
        magin: 'auto',
        height: isIphone13 ? '200vh' : '80vh',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll',
    };

    const prayerTitle = { textAlign: 'center', marginTop: '20px' }
    const repetitionStyle = { textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginRight: '30px' }
    const prayerStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5em', marginLeft: '5em', width: '80%' }

    return (
        <Paper elevation={0} sx={paperStyle} >
            <>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{prePrayer.title}</h2>
                <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>{prePrayer.trinity}</h3>
                <p style={{ textAlign: 'center', marginTop: '5px', fontWeight: 'bold' }}>{prePrayer.hailMary}</p>
                {/* 청원기도 */}
                <h3 style={prayerTitle}>{prePrayer.petitionPrayerTitle}</h3>
                <div style={prayerStyle}>
                    <p style={{ marginTop: '20px', textAlign: 'center', }}>{prePrayer.petitionPrayer}</p>
                </div>
                <h5 style={repetitionStyle}>{prePrayer.repititionOne}</h5>
                {/* 감사기도 */}
                <h3 style={prayerTitle}>{prePrayer.thanksgivingPrayerTitle}</h3>
                <div style={prayerStyle}>
                    <p style={{ marginTop: '20px', textAlign: 'center' }}>{prePrayer.thanksgivingPrayer}</p>
                </div>
                <h5 style={repetitionStyle}>{prePrayer.repititionTwo}</h5>
            </>
        </Paper >
    )
}

export default PrePrayer