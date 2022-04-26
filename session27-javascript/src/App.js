import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Why do we need test
          </p>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            {/* optional: */}
            <Redirect path="/**" to="/" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
