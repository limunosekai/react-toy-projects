import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BirthdayReminder from './BirthdayReminder/BirthdayReminder';
import Tours from './Tours/Tours';
import Reviews from './Reviews/Reviews';
import Accordion from './Accordion/Accordion';
import Menu from './Menu/Menu';
import Tabs from './Tabs/Tabs';
import StockPhotos from './StockPhotos/StockPhotos';
import Slider from './Slider/Slider';
import Lorem from './Lorem/Lorem';
import ColorGenerator from './ColorGenerator/ColorGenerator';

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
        <h2 style={{ fontSize: '3rem', color: '#fff' }}>
          React Toy Projects 😎
        </h2>
      </div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/birth' component={BirthdayReminder} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/reviews' component={Reviews} />
        <Route exact path='/accordion' component={Accordion} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/tabs' component={Tabs} />
        <Route exact path='/stock-photos' component={StockPhotos} />
        <Route exact path='/slider' component={Slider} />
        <Route exact path='/lorem' component={Lorem} />
        <Route exact path='/color' component={ColorGenerator} />
      </Switch>
    </div>
  );
}

export default App;
