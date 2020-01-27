import React from 'react';
import RenderArtist from '../components/RenderArtists.js'

class ManageArtist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistSearch: this.props.artistSearch,
            artists: [],
            accessToken: this.getHashParams(),
        };
    }

    //gets access token from url
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            }
        return(hashParams.access_token)
    }
    
    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization","Bearer " + this.state.accessToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept","application/json");

        var myInit = { method: 'GET',
                       headers: myHeaders, 
                      }

        /* infinite loop */
        if (this.props.artistSearch !== this.state.artistSearch)
        {
            fetch('https://api.spotify.com/v1/search?q=' + this.props.artistSearch + 
            '&type=artist&limit=3', myInit)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    artists : data.artists.items
                })

            })
            .catch(err=>console.log(err));

            this.inputChange(this.props.artistSearch);
        }
    }


    inputChange = (input) => {
        this.setState({
            artistSearch: input
        });
    }

    render() {
        return (
            <div>
                {this.componentDidMount()}
                <RenderArtist artists = { this.state.artists } accessToken = { this.state.accessToken} />
            </div>
        );
      }
}

export default ManageArtist;