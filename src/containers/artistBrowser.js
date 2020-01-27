import React from 'react';
import InputText from '../components/InputText.js'
import ManageArtist from '../components/ManageArtist.js'

class artistBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      artistInput: ''
    };
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }
  render() {

    const { artistInput } = this.state;
    const values = { artistInput }
    return (
        <div>
          <InputText 
          handleChange = {this.handleChange} 
          values = {values}/>

          <ManageArtist 
          artistSearch={this.state.artistInput}
          handleChange={this.handleChange}
          />
        </div>
    );
  }
}
export default artistBrowser;