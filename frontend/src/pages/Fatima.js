import React from 'react';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Fatima = () => {
    console.log("Fatima is here.")
    return (
        <div style={{ marginTop: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 780 }}>
                <CardHeader
                    title="Catholic Prayers"
                    subheader="2023"
                />
                <CardMedia
                    component="img"
                    height="460"
                    image={`${process.env.PUBLIC_URL}/fatima-mother.jpeg`}
                />
                <CardContent>

                </CardContent>
            </Card>
        </div >
    )
}

export default Fatima