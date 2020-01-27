import React from 'react';
import RenderAlbums from '../components/RenderAlbums.js'
import Grid from '@material-ui/core/Grid';
import '../styles/albumList.css';

class singleList extends React.Component {
  constructor() {
    super();
    this.state = {
        singles: [],
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

  getSingles() {
    if (this.state.singles.length === 0){
    var myHeaders = new Headers();
        myHeaders.append("Authorization","Bearer " + this.getAccessToken());
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept","application/json");

        var myInit = { method: 'GET',
                       headers: myHeaders, 
                      }
            fetch('https://api.spotify.com/v1/artists/' + this.getArtistId() + 
            '/albums?&include_groups=single,compilation&limit=8', myInit)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    singles: data.items,
                })
            })
            .catch(err=>console.log(err));
        }
    }

    
  render() {
    return (
        <div>
          {this.getSingles()}
          <Grid item sx={12}>
              <h1 className="title">Singles and compilations list</h1>
          </Grid>
          <Grid item xs={12}>
          <RenderAlbums 
          albums={this.state.singles} 
          accessToken = {this.getAccessToken()}
          />
          </Grid>
        </div>
    );
  }
}
export default singleList;

