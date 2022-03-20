import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({


    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    root: {
        flexGrow: 1,
    },

    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4)
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing(6)}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },

    },

    button: {
        backgroundColor: '#B42026',
        color: 'white',
        fontFamily: 'Roboto'
    },

    font: {
        fontFamily: "Roboto",

    },

    image: {
        height: '5%',
        width: '5%',
        justifyContent: 'center',
        objectFit: 'cover'

    },

    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(3))]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing(8)}px 0`,
    },

    cardHeader: {
        fontFamily: 'Roboto'
    },

    footer: {
        marginTop: theme.spacing(8),
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing(6)}px 0`,
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(3))]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },


}));