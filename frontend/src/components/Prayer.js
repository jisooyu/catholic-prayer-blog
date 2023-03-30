import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import useStyles from '../materialHelper/useStyles';

function Prayer({ prayer }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} style={{ marginTop: '58px' }} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: '500px' }}>
                    <Paper className={classes.paper}>
                        <img src={prayer.img} className={classes.image} alt="Jesus" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Grid item style={{ height: '100px' }}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.title}>{prayer.title}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item style={{ height: '300px' }} >
                        <Paper className={classes.paper}>
                            <p style={{ textAlign: 'left' }}>{prayer.content}</p>
                        </Paper>
                    </Grid>
                    <Grid item style={{ height: '100px' }}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.title}>{prayer.repeat}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}

export default Prayer;