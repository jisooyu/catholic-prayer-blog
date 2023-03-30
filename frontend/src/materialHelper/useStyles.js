import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        width: '160%'
    },
    image: {
        height: '100%',
        objectFit: 'cover',
    },
    title: {
        fontWeight: 'bold'
    }
}));

export default useStyles;