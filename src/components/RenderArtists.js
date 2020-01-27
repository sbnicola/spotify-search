import React, { Fragment } from 'react';
import ArtistCard from '../components/ArtistCard.js'
import Grid from '@material-ui/core/Grid';

function RenderArtist ({ artists , accessToken}) {

    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
            {artists.map((artist, index) => {
                if (artist.images.length > 0){
                return <ArtistCard 
                        key={index} 
                        name={artist.name} 
                        followers={artist.followers.total} 
                        image={artist.images[0].url} 
                        genres={artist.genres} 
                        popularity={artist.popularity}
                        id={artist.id} 
                        accessToken={accessToken}/>
                }
                else {
                    return <ArtistCard 
                            key={index} 
                            name={artist.name} 
                            followers={artist.followers.total} 
                            image='https://images.idgesg.net/images/article/2017/05/itunes-12-icon-mac-100724143-large.jpg'
                            genres={artist.genres} 
                            popularity={artist.popularity} 
                            id={artist.id} 
                            accessToken={accessToken}
                    />
                }
            })}
            </Grid>
        </Fragment>
    );
}

export default RenderArtist;