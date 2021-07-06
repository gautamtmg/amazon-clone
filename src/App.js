import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
        <Router>
        <Header />

          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
