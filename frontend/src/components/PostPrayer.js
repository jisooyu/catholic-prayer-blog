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
        height: isIphone13 ? '80vh' : '35vh',
        width: isIphone13 ? '82vw' : '50vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll'
    };
    const gridStyle = {
        height: isIphone13 ? '80vh' : '35vh',
        width: isIphone13 ? '60vw' : '40vw',
        backgroundColor: 'red'
    }

    return (
        <Paper elevation={0} sx={paperStyle}>
            <Grid container spacing={0.5} sx={gridStyle} direction="column">
                {/* <Grid item xs container direction="column" spacing={0.5}> */}
                <Grid item xs container direction="column" spacing={0.5}>
                    <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                        {postPrayer.title}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" spacing={0.5}>
                    <Typography variant="subtitle1" style={{ textAlign: "left", margin: "0 2 0 2" }} >
                        {postPrayer.content}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" spacing={0.5}>
                    <Typography variant="h6" style={{ textAlign: "center" }}>
                        {postPrayer.ending}
                    </Typography>
                </Grid>
                {/* </Grid> */}

            </Grid>
        </Paper>
    );
}

export default PostPrayer;