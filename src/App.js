import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BirthdayReminder from './BirthdayReminder/BirthdayReminder';
import Tours from './Tours/Tours';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          background: 'black',
        }}
      >
        <h2 style={{ fontSize: '3rem', color: '#fff' }}>React Toy Projects</h2>
      </div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/birth' component={BirthdayReminder} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/reviews' component={Reviews} />
      </Switch>
    </div>
  );
}

export default App;
