import React from 'react'
import {Grid, AppBar, Toolbar, Typography} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/styles"
import { Link, Route } from "react-router-dom"
import Button from '@material-ui/core/Button';
import DropDownNavbar from './DropDownNavbar';

const useStyles = makeStyles({
    typography: {
        flex: 1,
        color: 'black'
    },
    fondo: {
        background: '#f9ae00',
        textDecoration: 'none',
        
    },
    texto: {
        textDecoration: 'none',
        marginRight: '8px',
        marginLeft: '8px'
        
    }

})

export default function Navbar() {

    const classes = useStyles()

    return (

        <AppBar position="static">
            <Toolbar className={classes.fondo}>

                    <Typography className={classes.typography}>
                       <Button><Link to='/'><img src='movilidadJpg.png' width='60px'
                       height='60px' alt='movilidad urbana' ></img></Link></Button>
                    </Typography>                    
                    <DropDownNavbar/>
                    <Link to='/acerca' className={classes.texto}><Button>Acerca</Button></Link>
                    <Link to='/blog' className={classes.texto}><Button>Blog</Button></Link>
                    <Link to='/contacto' className={classes.texto}><Button>Contacto</Button></Link>               
            </Toolbar>
        </AppBar>
    )
}
