import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Paper, Button } from '@mui/material'

const PrePrayer = ({ prePrayer }) => {
    const prayerStyle = {
        textAlign: 'center', fontWeight: 'bold', marginTop: '6px', marginBottom: '6px'
    }
    const repetitionStyle = { fontWeight: 'bold', marginTop: '5px', textAlign: 'center' }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '65vh',
                width: '100vw',
                backgroundColor: 'red'
            }}
        >
            <Card sx={{
                maxWidth: 800,
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'blue'
            }}>
                <CardHeader sx={{ marginLeft: '20px', marginBottom: '2px', textAlign: 'center' }} title={prePrayer.title} subheader={prePrayer.trinity} />
                <CardMedia
                    component="img"
                    image={prePrayer.img}
                    sx={{ marginLeft: '20px', maxHeight: '400px', objectFit: 'contain' }} // set the maxHeight and objectFit properties
                />
                <CardContent sx={{ marginLeft: '20px' }}>
                    <Typography sx={{ textAlign: 'center' }} variant="h6">
                        {prePrayer.hailMary}
                    </Typography>
                    {/* 청원기도 */}
                    <Typography variant="h6" sx={prayerStyle}>
                        {prePrayer.petitionPrayerTitle}
                    </Typography>
                    <Typography variant="body3" sx={{ marginBottom: '12px' }} >
                        {prePrayer.petitionPrayer}
                    </Typography>
                    <Typography variant="h6" sx={repetitionStyle}>
                        {prePrayer.repititionOne}
                    </Typography>
                    {/* 감사기도 */}
                    <Typography variant="h6" sx={prayerStyle}>
                        {prePrayer.thanksgivingPrayerTitle}
                    </Typography>
                    <Typography variant="body3">
                        {prePrayer.thanksgivingPrayer}
                    </Typography>
                    <Typography variant="h6" sx={repetitionStyle}>
                        {prePrayer.repititionTwo}
                    </Typography>
                </CardContent>
            </Card >
            <Button className='CheckButton'>Next</Button>
        </Box>
    )
}

export default PrePrayer