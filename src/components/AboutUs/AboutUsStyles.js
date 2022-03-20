import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme) => ({

    toolbar: theme.mixins.toolbar,

    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        objectFit: 'cover'

    },

    logo: {
        height: '40%',
        width: '40%',
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

    background: {
        backgroundColor: theme.palette.grey[800]
    },

    profileBackground: {
        backgroundColor: '#B42026'
    },

    text: {
        color: 'white'
    }

}))