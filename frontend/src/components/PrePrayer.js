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
        marginTop: isIphone13 ? '2em' : '5em',
        marginLeft: isIphone13 ? '1em' : '5em',
        height: isIphone13 ? '90vh' : '80vh',
        paddingTop: isIphone13 ? '3em' : '1em',
        overflow: 'scroll',
        backgroundColor: isIphone13 ? "#f95959" : "#38598b"
    };
    const prayerTitle = { textAlign: 'center', marginTop: '20px' }
    const repetitionStyle = { textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginRight: '30px' }
    const prayerStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5em', marginLeft: '5em', width: '80%' }

    return (
        <Paper elevation={0} sx={paperStyle} >
            <div style={{ margin: '20px', paddingTop: '30px' }}>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{prePrayer.title}</h2>
                <h3 style={{ textAlign: 'center' }}>{prePrayer.trinity}</h3>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>{prePrayer.hailMary}</p>

                {/* 청원기도 */}
                <h3 style={prayerTitle}>{prePrayer.petitionPrayerTitle}</h3>
                <div style={prayerStyle}>
                    <p style={{ marginTop: '20px' }}>{prePrayer.petitionPrayer}</p>
                </div>
                <h5 style={repetitionStyle}>{prePrayer.repititionOne}</h5>

                {/* 감사기도 */}
                <h3 style={prayerTitle}>{prePrayer.thanksgivingPrayerTitle}</h3>
                <div style={prayerStyle}>
                    <p style={{ marginTop: '20px' }}>{prePrayer.thanksgivingPrayer}</p>
                </div>
                <h5 style={repetitionStyle}>{prePrayer.repititionTwo}</h5>
            </div>
        </Paper >
    )
}

export default PrePrayer