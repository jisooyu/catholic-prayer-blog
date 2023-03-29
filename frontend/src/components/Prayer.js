import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Box } from '@mui/material';
import { Paper, Button } from '@mui/material'

function Prayer({ prayer }) {
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
                maxWidth: 500,
                display: 'flex',
                marginTop: '140px',
                alignItems: 'top',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'blue'
            }}>
                <CardHeader sx={{ marginLeft: '20px', marginBottom: '10px', textAlign: 'center' }} title={prayer.title} subheader={prayer.subtitle} />
                <CardMedia
                    component="img"
                    image={prayer.img}
                    sx={{ marginLeft: '20px', maxHeight: '400px', objectFit: 'contain' }} // set the maxHeight and objectFit properties
                />
                <CardContent >
                    <p style={{ marginLeft: '20px', marginBottom: '10px' }}>{prayer.content}</p>
                    <p style={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold', }}>{prayer.repeat}</p>
                    <p style={{ marginLeft: '20px', marginBottom: '10px', }}>{prayer.ending}</p>
                </CardContent>
            </Card>
            <Button className='CheckButton'>Next</Button>
        </Box>
    )
}

export default Prayer;