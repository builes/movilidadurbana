import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    margen: {
        marginTop: '3em',
        marginBottom: '3em'
    },
    texto: {
        textAlign: 'justify',
        fontSize: '110%'
    },
    fondo: {
        background: 'gray'
    },
    

})

export default function Inicio() {

    const classes = useStyles()

    return (
        <div>
            <Grid container className={classes.texto}>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={6} className={classes.margen}>
                    <video width="100%" height="100%" src='video.mp4' controls>
                    </video>
                </Grid>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={3} className={classes.margen}>
                    <h1>Curso principal</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                    <a><Button variant='contained' color='primary' fullWidth>Inscribete ahora</Button></a>
                </Grid>
                <Grid item xs={0} md={1}/>


                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={6} className={classes.margen}>
                    <video width="100%" height="100%" src='video.mp4' controls>
                    </video>
                </Grid>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={3} className={classes.margen}>
                    <h1>Curso 2</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                    <a><Button variant='contained' color='primary' fullWidth>Inscribete ahora</Button></a>
                </Grid>
                <Grid item xs={0} md={1}/>


                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={6} className={classes.margen}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image="favicon1.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                Curso2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Inscribete
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={4} className={classes.margen}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                


                
          
            </Grid>
        </div>
    )
}


