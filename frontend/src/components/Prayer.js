// import React from 'react';
// import { useMediaQuery, useTheme } from '@mui/material';
// import useStyles from '../materialHelper/useStyles';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

// function Prayer({ prayer }) {
//     const classes = useStyles();
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     const paperStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: isSmallScreen ? '82vw' : '70vw',
//         marginTop: isSmallScreen ? '2em' : '5em',
//         height: isSmallScreen ? '90vh' : '70vh',
//         paddingTop: isSmallScreen ? '15em' : '15em',
//         overflow: 'auto',
//     };
//     return (
//         <Grid container spacing={2} style={{ marginTop: '58px' }} >
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: '200px' }}>
//                     <Paper className={classes.paper} elevation={0} >
//                         <img src={prayer.img} className={classes.image} alt="Jesus" />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                     <Grid item style={{ height: '50px' }}>
//                         <Paper className={classes.paper} elevation={0}>
//                             <Typography variant="h6" className={classes.title}>{prayer.title}</Typography>
//                         </Paper>
//                     </Grid>
//                     <Grid item style={{ height: '200px' }} >
//                         <Paper className={classes.paper} elevation={0}>
//                             <p style={{ textAlign: 'left' }}>{prayer.content}</p>
//                         </Paper>
//                     </Grid>
//                     <Grid item style={{ height: '50px' }}>
//                         <Paper className={classes.paper} elevation={0}>
//                             <Typography variant="h6" className={classes.title}>{prayer.repeat}</Typography>
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </Grid> 
//     );
// }

// export default Prayer;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Prayer = ({ prayer }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: '30px 0 0 0',
                margin: '2.5em auto 0',
                overflow: 'scroll',
                height: 800,
                maxWidth: '800 px !important',
                maxHeight: '200px !important',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
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