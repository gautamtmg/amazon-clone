import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/Home'
import {db, auth} from './firebase';
import Login from './pages/Login'



function App() {
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
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

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null)
      localStorage.removeItem("user")
    })
  }


  useEffect(() =>{
    getCartItems();
  }, [])




  return (
        <Router>
          {
            !user ? (
              <Login setUser ={setUser}/>
            ):(
              <div>
              <Header 
                user={user} 
                cartItems = { cartItems }
                signOut={signOut}  
              />

              <Switch>
                
                <Route path="/cart" >
                  <Cart cartItems = {cartItems} />
                </Route>
                <Route path="/" component={Home} />
              </Switch>
              </div>
            )
          }

        </Router>
  );
}

export default App;
