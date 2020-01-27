import React from 'react';
import LoadingPage from '../components/LoadingPage.js'

class GetToken extends React.PureComponent {

    componentDidMount(){
        window.location.assign("https://accounts.spotify.com/authorize?client_id=8b2b6ed185ac4107b218920694fa2cd4&response_type=token&redirect_uri=http://localhost:3000/search");
        }
  render() {
    return (
        <div>
          <LoadingPage />
        </div>
    );
  }
}
export default GetToken;