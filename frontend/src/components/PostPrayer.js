import * as React from 'react';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'

const PostPrayer = ({ postPrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIphone13 ? '4em' : '3em',
        marginLeft: isIphone13 ? '2em' : '5em',
        height: isIphone13 ? '100vh' : '35vh',
        width: isIphone13 ? '82vw' : '50vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll'
    };
    const gridStyle = {
        height: isIphone13 ? '98vh' : '35vh',
        width: isIphone13 ? '70vw' : '40vw',
        backgroundColor: 'red',
    }

    return (
        <Paper elevation={0} sx={paperStyle}>
            <Grid container spacing={0.5} sx={gridStyle} direction="column">
                <Grid item xs container direction="column" >
                    <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                        {postPrayer.title}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" style={{ textAlign: "left", padding: "1em", }}>
                    <Typography variant="subtitle1" style={{ marginTop: '-2em', marginBottom: '-1em' }} >
                        {postPrayer.content}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" >
                    <Typography variant="h6" style={{ textAlign: "center" }}>
                        {postPrayer.ending}
                    </Typography>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default PostPrayer;