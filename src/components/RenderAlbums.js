import React, { Fragment } from 'react';
import AlbumCard from '../components/AlbumCard.js'
import Grid from '@material-ui/core/Grid';

function RenderAlbums ({ albums }) {

    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
            {albums.map((album, index) => {
                if (album.images.length > 0){
                return <AlbumCard 
                    key={index} name={album.name} 
                    image={album.images[0].url}
                    artists={album.artists[0].name}
                    />
                }
                else {
                    return <AlbumCard 
                            key={index} name={album.name} 
                            image='https://images.idgesg.net/images/article/2017/05/itunes-12-icon-mac-100724143-large.jpg'
                            artists={album.artists[0].name}
                            />
                }
            })}
            </Grid>
        </Fragment>
    );
}

export default RenderAlbums;