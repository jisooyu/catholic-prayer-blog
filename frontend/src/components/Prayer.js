import * as React from 'react';
import { styled, Grid, Paper, Typography, ButtonBase, useMediaQuery } from '@mui/material'

const Prayer = ({ prayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    const paperStyle = {
        height: isIphone13 ? '80vh' : '35vh',
        width: isIphone13 ? '82vw' : '50vw',
        paddingTop: isIphone13 ? '4em' : '1em',
        marginLeft: isIphone13 ? '2em' : '1em'
    };

    return (
        <Paper
            elevation={0}
            sx={paperStyle}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 150, height: 150 }}>
                        <Img alt="complex" src={prayer.img} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {prayer.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {prayer.content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                {prayer.repeat}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}
export default Prayer;