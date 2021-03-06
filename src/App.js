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
import GroceryBud from './GroceryBud/GroceryBud';
import NavBar from './NavBar/NavBar';
import Sidebar from './Sidebar/Sidebar';
import Stripe from './Stripe/Stripe';
import Cart from './Cart/Cart';
import Markdown from './Markdown/Markdown';
import RandomUser from './RandomUser/RandomUser';
import Pagination from './Pagination/Pagination';
import Dark from './Dark/Dark';
import HackerIndex from './HackerNews/HackerIndex';
import QuizIndex from './Quiz/QuizIndex';

function App() {
  return (
    <div>
      <NavBar />
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
        <Route exact path='/grocery' component={GroceryBud} />
        <Route exact path='/sidebar' component={Sidebar} />
        <Route exact path='/stripe' component={Stripe} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/markdown' component={Markdown} />
        <Route exact path='/random-user' component={RandomUser} />
        <Route exact path='/pagination' component={Pagination} />
        <Route exact path='/dark' component={Dark} />
        <Route exact path='/hacker' component={HackerIndex} />
        <Route exact path='/quiz' component={QuizIndex} />
      </Switch>
      <footer style={{ textAlign: 'center' }}>
        <p>limunosekai</p>
      </footer>
    </div>
  );
}

export default App;
