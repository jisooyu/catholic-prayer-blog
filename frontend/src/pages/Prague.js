import React from 'react';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Prague = ({ prayer }) => {
    return (
        <div style={{ marginTop: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={prayer.title}
                    subheader="1637"
                />
                <CardMedia
                    component="img"
                    height="620"
                    image={`${process.env.PUBLIC_URL}/infant-jesus-prague.jpeg`}
                />
                <CardContent>
                    {prayer.prayer}
                    {prayer.ending}
                    {prayer.repetition}
                </CardContent>
            </Card>
        </div>
    )
}

export default Prague