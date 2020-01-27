import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    minWidth: 300,
    marginTop: 30,
    backgroundColor: '#e8e288',
  },
});

export default function ImgMediaCard( {name, image, artists} ) {

  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={ image }
            title={name}
          />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {name}
              </Typography>
              <Typography component="div">
                <Typography variant="h6" color="textPrimary" component="h6" display="inline">
                  Artist:
                </Typography>
                <Typography  variant="subtitle1" display="inline" color="textSecondary" component="p">
                  {" " + artists}
                </Typography>
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="medium" color="primary" >
              Songs
            </Button>
            </CardActions>
          </CardActionArea>
    </Card>
  );
}