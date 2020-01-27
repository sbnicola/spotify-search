import React from 'react';
import RenderAlbums from '../components/RenderAlbums.js'
import Grid from '@material-ui/core/Grid';
import '../styles/albumList.css';

class albumsList extends React.Component {
  constructor() {
    super();
    this.state = {
        albums: [],
        songs: [],
    };
  }

  getArtistId = () => {
    var myRe = /([a-zA-Z0-9_-]){22}/;
    var token = myRe.exec(window.location.href);
    return (token[0])
  }

  getAccessToken = () => {
    var myRe = /([a-zA-Z0-9_-]){143}/;
    var token = myRe.exec(window.location.href);
    return (token[0])
  }

  getAlbums() {
    if (this.state.albums.length === 0){
    var myHeaders = new Headers();
        myHeaders.append("Authorization","Bearer " + this.getAccessToken());
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept","application/json");

        var myInit = { method: 'GET',
                       headers: myHeaders, 
                      }
            fetch('https://api.spotify.com/v1/artists/' + this.getArtistId() + 
            '/albums?include_groups=album&limit=8', myInit)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    albums: data.items,
                })
            })
            .catch(err=>console.log(err));
        }
    }

    getSongs(albumID) {
        if (this.state.songs.length === 0){
        var myHeaders = new Headers();
            myHeaders.append("Authorization","Bearer " + this.getAccessToken());
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept","application/json");
    
            var myInit = { method: 'GET',
                           headers: myHeaders, 
                          }
                fetch('https://api.spotify.com/v1/albums/' + albumID + 
                '/tracks', myInit)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                      songs: data.items,
                  })
              })
                .catch(err=>console.log(err));
            }
        }

  render() {
    return (
        <div>
          {this.getAlbums()}
          <Grid item sx={12}>
              <h1 className="title">Album list</h1>
          </Grid>
          <Grid item xs={12}>
          <RenderAlbums 
          albums={this.state.albums} 
          accessToken = {this.getAccessToken()}
          songs = {this.state.songs}
          />
          </Grid>
        </div>
    );
  }
}
export default albumsList;

