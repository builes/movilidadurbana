import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    maxWidth: "450px",
    margin: '20px',
    
  },
  media: {
    height: 140,
  },
  prueba: {
        
      display: 'flex'
  }
});

export default function Blog() {

    const classes = useStyles();

    return (
        <div>
            <img src='ms.png' style={{maxWidth:'100%'}}>

            </img>
            <Grid container >
                <Grid item xs={0} sm={1}/>
                <Grid item sm={12} sm={5}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://unlugar.org.mx/wp-content/uploads/2017/01/2017-01-31_.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                ¿Qué es movilidad urbana?
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                La movilidad se conceptualiza en los desplazamientos origen-destino que tienen lugar en las ciudades, ya sea por medios de transporte motorizados o no motorizados, particulares o colectivos, haciendo referencia a ...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary" variant='contained'>
                                Leer mas
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid> 
                <Grid item xs={0} sm={1}/>                   

                <Grid item sm={12} sm={5} className={classes.prueba}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.semana.com/resizer/HRgkPxLLQqIvDVtkh3zbTv2O9YA=/960x540/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/semana/FDFMLLCTRNDPPGIPFMSYPX5ENY.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Colombia, en la carrera por una movilidad sostenible
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                La movilidad sostenible se ha convertido en una apuesta mundial para frenar el calentamiento global.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary" variant='contained'>
                                Leer mas
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid>
                <Grid item xs={0} sm={1}/>
                

                <Grid item sm={12} sm={5}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://unlugar.org.mx/wp-content/uploads/2017/01/2017-01-31_.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                ¿Qué es movilidad urbana?
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                La movilidad se conceptualiza en los desplazamientos origen-destino que tienen lugar en las ciudades, ya sea por medios de transporte motorizados o no motorizados, particulares o colectivos, haciendo referencia a ...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary" variant='contained'>
                                Leer mas
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid> 
                <Grid item xs={0} sm={1}/>                   

                <Grid item sm={12} sm={5} className={classes.prueba}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.semana.com/resizer/HRgkPxLLQqIvDVtkh3zbTv2O9YA=/960x540/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/semana/FDFMLLCTRNDPPGIPFMSYPX5ENY.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Colombia, en la carrera por una movilidad sostenible
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                La movilidad sostenible se ha convertido en una apuesta mundial para frenar el calentamiento global.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary" variant='contained'>
                                Leer mas
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid>
                <Grid item xs={0} sm={1}/>
                         
            </Grid>
            
        </div>
    )
}
