import * as React from 'react';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'

const PostPrayer = ({ postPrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIphone13 ? '4em' : '2em',
        marginLeft: isIphone13 ? '2em' : '5em',
        height: isIphone13 ? '80vh' : '35vh',
        width: isIphone13 ? '82vw' : '50vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        overflow: 'scroll'
    };

    return (
        <Paper
            elevation={0}
            sx={paperStyle}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {postPrayer.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {postPrayer.content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                {postPrayer.repeat}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}
export default PostPrayer;