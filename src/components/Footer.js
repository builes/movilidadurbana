import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    fondo: {
        background: '#f9ae00'
    },
    margen: {
        marginRight: "2em"
    },
    icon: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    }
    
})

export default function Footer() {

    const classes = useStyles()

    return (
        <div>
            <Grid container align='center' justify='center' className={classes.fondo}>
                <Grid item xs={10}>
                    <IconButton className={classes.margen}>
                        <LinkedInIcon fontSize='large'/>
                    </IconButton>
                    <IconButton className={classes.margen}>
                        <YouTubeIcon fontSize='large'/>
                    </IconButton>
                    <IconButton className={classes.margen}>
                        <FacebookIcon fontSize='large'/>
                    </IconButton>
                    <IconButton className={classes.margen}>
                        <TwitterIcon fontSize='large'/>
                    </IconButton>
                    <IconButton>
                        <a href='https://www.instagram.com/' target='_blank'><InstagramIcon fontSize='large' color='action'/></a>
                    </IconButton>
                </Grid>
                <Grid item xs={8} >
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor </p>
                </Grid>
                <Grid container style={{marginTop:'1em'}}>
                    <Grid item xs={4}>
                        <div className={classes.icon} >
                            <MailIcon style={{marginRight: '5px'}}/><span >Correo@hotmail.com</span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.icon} >
                            <PhoneIphoneIcon style={{marginRight: '5px'}} /><span >1234567890</span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.icon} >
                            <HomeIcon style={{margin: '5px'}}/><span >Medellin</span>
                        </div>

                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}
