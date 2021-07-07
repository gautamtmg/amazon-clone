import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/Home'
import {db} from './firebase';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot( (snapshot) => {
      let tempItems = [];

      tempItems = snapshot.docs.map( doc => (
        {
          id:doc.id,
          product: doc.data()
        }

        ))
        setCartItems(tempItems)

    })
  }
  useEffect(() =>{
    getCartItems();
  }, [])




  return (
    <div className="App">
        <Router>
        <Header />

          <Switch>
            <Route path="/cart" >
              <Cart cartItems = {cartItems} />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
