import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'

const Fatima = () => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isIphone13 ? '4em' : '12em',
            marginLeft: isIphone13 ? '1em' : '5em',
            height: isIphone13 ? '200vh' : '83vh',
            width: isIphone13 ? '82vw' : '65vw',
            paddingTop: isIphone13 ? '4em' : '1em',
            overflow: 'scroll'
        }}>
            <CardHeader
                sx={{ mt: isIphone13 ? 2 : 50 }}
                title="Our Lady of the Rosary"
                subheader="1917"
            />
            <CardMedia
                component="img"
                sx={{
                    height: isIphone13 ? 600 : 900,
                    width: isIphone13 ? 300 : 400
                }}
                image={`${process.env.PUBLIC_URL}/fatima-mother.jpeg`}
            />
            <CardContent>
                <Typography sx={{ mx: "auto" }}>
                    <h2>파티마 성모님 발현</h2>
                    <Typography>
                        <p>
                            The apparitions of the Virgin Mary in Fatima, Portugal, are one of the most famous and well-documented Marian apparitions in Catholic history. The events took place in 1917, when three shepherd children - Lucia dos Santos, Francisco Marto, and Jacinta Marto - reported seeing a beautiful lady appear to them on six occasions between May and October of that year.
                            The lady identified herself as "Our Lady of the Rosary" and told the children to pray the rosary daily for peace in the world and the conversion of sinners. She also shared with them three secrets or messages, which Lucia later revealed to the Church. The first two secrets were revealed in 1941 and concerned a vision of hell and a warning of World War II. The third secret was revealed in 2000 and was interpreted as a prediction of the attempted assassination of Pope John Paul II in 1981.
                            The apparitions of Fatima attracted widespread attention and continue to be an important pilgrimage site for Catholics from around the world. The message of peace and prayer for the conversion of sinners that was given to the shepherd children by the Virgin Mary remains an important message for believers today.
                        </p>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Fatima