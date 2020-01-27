import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class InputText extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div style={styles.container}>
      <TextField
        id="standard-name"
        label="Name"
        style={styles.textField}
        onChange={handleChange('artistInput')}
        margin="normal"
      />
      </div>
    )
  }
}

const styles = {
  container :{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  textField: {
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}

export default InputText;