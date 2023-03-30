import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import useStyles from '../materialHelper/useStyles';

function Prayer({ prayer }) {

    const classes = useStyles();
    const [imgHeight, setImgHeight] = useState(0);
    const [textHeight, setTextHeight] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.src = prayer.img;
        img.onload = () => {
            setImgHeight(img.height);
        };
    }, [prayer.img]);

    useEffect(() => {
        if (imgHeight === 0) return;

        const totalTextHeight = document.getElementById('prayer-texts').offsetHeight;
        const availableTextHeight = imgHeight - totalTextHeight;

        setTextHeight(availableTextHeight > 0 ? availableTextHeight : 0);
    }, [imgHeight]);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: `${imgHeight}px` }}>
                    <Paper className={classes.paper}>
                        <img src={prayer.img} className={classes.image} alt="Jesus" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: `${imgHeight}px` }}>
                    <Grid container direction="column" justify="space-between" style={{ height: `${imgHeight}px` }}>
                        <Grid item id="prayer-texts" style={{ height: `${textHeight / 3}px` }}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6">{prayer.title}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item id="prayer-texts" style={{ height: `${textHeight / 3}px` }}>
                            <Paper className={classes.paper}>
                                <Typography variant="body1">{prayer.content}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item id="prayer-texts" style={{ height: `${textHeight / 3}px` }}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6">{prayer.repeat}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Prayer;