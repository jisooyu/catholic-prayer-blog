import React from 'react'
import { Paper } from '@mui/material'

function Prayer({ prayer }) {

    const prayerStyle = {
        textAlign: 'center',
        marginTop: '20px',
        marginLeft: '20em',
        marginRight: '20em'
    }
    const repetitionStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '20px',
        marginRight: '30px'
    }

    return (
        <Paper elevation={0} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh',
            width: '70vw',
            marginTop: '5em',
            marginLeft: '10em',
            marginRight: '10em',
            backgroundColor: '#F5E8CE'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h3 style={{
                    textAlign: 'center',
                    marginBottom: '3px'
                }}>
                    {prayer.title}
                </h3>
                <img style={{
                    marginLeft: '20px',
                    height: '32vh',
                    width: '20vw',
                    objectFit: 'cover',
                }}
                    src={prayer.img}
                    alt='Jesus'
                />
            </div>
            <div style={prayerStyle}>
                <p style={{
                    textAlign: 'left',
                    marginLeft: '20px',
                    marginBottom: '2px'
                }}>{prayer.content}</p>
            </div>
            <p style={repetitionStyle}>{prayer.repeat}</p>

        </Paper>
    )
}

export default Prayer;