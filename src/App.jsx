import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Navbar from './components/navbar';
import Table from './components/table';

import currentTerm from './util/currentTerm';

import './App.css';

const App = () => (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/:term/:week?/" component={Table} />
          <Route path="/">
            <Redirect to={`/${currentTerm().name}`} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
);

export default App;
