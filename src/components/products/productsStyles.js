import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: '#B42026',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.grey[800]
  },
  root: {
    flexGrow: 1,
  },

  background: {
    backgroundColor: "#B42026"
  },

  header: {
    justifyContent: 'center',
    color: 'white',
    fontFamily: "Roboto",
    backgroundColor: "#B42026"

  },

  container: {
    backgroundColor: "#B42026"
  },

  image: {
    height: '15%',
    width: '15%',
    justifyContent: 'center',
    objectFit: 'cover'

  },

  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    color: 'white',

  }
}));