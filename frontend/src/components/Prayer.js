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
            height: '65vh',
            width: '70vw',
            margin: '3em',
        }}>
            <>
                <h3 style={{
                    textAlign: 'center',
                    marginBottom: '10px'
                }}>
                    {prayer.title}
                </h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img style={{
                        marginLeft: '20px',
                        maxHeight: '500px',
                        maxWidth: '500px',
                        height: '100%',
                        width: '100%',
                        marginBottom: '10px',
                        objectFit: 'contain',
                    }}
                        src={prayer.img} />
                </div>
                <div style={prayerStyle}>
                    <p style={{
                        marginLeft: '20px',
                        marginBottom: '10px'
                    }}>{prayer.content}</p>
                </div>
                <p style={repetitionStyle}>{prayer.repeat}</p>
            </>
        </Paper>
    )
}

export default Prayer;