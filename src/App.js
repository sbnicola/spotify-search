import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import albumsList from './containers/albumsList';
import artistBrowser from './containers/artistBrowser';
import GetToken from './containers/GetToken';
import singleList from './containers/singleList'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GetToken} />
          <Route exact path="/search" component={artistBrowser} />
          <Route exact path="/albums" component={albumsList} />
          <Route exact path="/singles" component={singleList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
