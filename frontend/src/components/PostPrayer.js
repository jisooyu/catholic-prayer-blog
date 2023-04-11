import * as React from 'react';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'

const PostPrayer = ({ postPrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIphone13 ? '1em' : '2em',
        marginLeft: isIphone13 ? '2em' : '5em',
        height: isIphone13 ? '80vh' : '35vh',
        width: isIphone13 ? '82vw' : '50vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll'
    };

    return (
        <div style={{ marginTop: '4em' }}>
            <Paper
                elevation={0}
                sx={paperStyle}
            >
                <Grid container spacing={1}>
                    <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                {postPrayer.title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {postPrayer.content}
                            </Typography>
                            <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
                                {postPrayer.ending}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper >
        </div>
    );
}
export default PostPrayer;