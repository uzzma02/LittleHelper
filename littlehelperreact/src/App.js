import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import ServicesCategories from './ServicesCategories';
import AppContext from './AppContext';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const App = () => {

  // const [globalState, setGlobalState] = useState(
  //   {
  //     loggedIn: true
  //   }
  // )
  return (
      <BrowserRouter>

        <Navigation/>

        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/servicescategories" component={ServicesCategories} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  )
}
export default App;