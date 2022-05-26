// import './App.css';
// import ProductsComponent from './components/ProductsComponent';

// function App() {
//   return (
//     <ProductsComponent />
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import RecommendedComponent from './components/RecommendedComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import ProductsComponent from './components/ProductsComponent';
import { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Product_name: '',
      Price: 0,
      weight: '',
      description: '',
      quantity: 0
    }
    this.create = this.create.bind(this);
  }

  getData() {
    // get all entities - GET
    fetch("http://localhost:3000/products", {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => { console.log(err); 
    });
  }



    create(e) {
      // add entity - POST
      e.preventDefault();
      // creates entity
      fetch("http://localhost:3000/products/add", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          Product_name: this.state.Product_name,
          Price: this.state.Price,
          weight: this.state.weight,
          description: this.state.description,
          quantity: this.state.quantity,
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
    }

    changeNameHandler = (event) => {
      this.setState({Product_name: event.target.value});
    }
    changePriceHandler = (event) => {
      this.setState({Price: event.target.value});
    }
    changeWeightHandler = (event) => {
      this.setState({weight: event.target.value});
    }
    changeDescriptionHandler = (event) => {
      this.setState({description: event.target.value});
    }
    changeQuantityHandler = (event) => {
      this.setState({quantity: event.target.value});
    }


  render() {
  return (
    <>
    <HeaderComponent />
    {/* <input placeholder='Product_name' name='Product_name' value={this.state.Product_name} onChange={this.changeNameHandler} />
    <input placeholder='Price' name='Price' value={this.state.Price} onChange={this.changePriceHandler} />
    <input placeholder='weight' name='weight' value={this.state.weight} onChange={this.changeWeightHandler} />
    <input placeholder='description' name='description' value={this.state.description} onChange={this.changeDescriptionHandler} />
    <input placeholder='quantity' name='quantity' value={this.state.quantity} onChange={this.changeQuantityHandler} />
    <button onClick={this.create}>Test</button>
    <button onClick={this.getData}>Get</button> */}
      <Router>
        <Switch>
          <Route path='/products' component={ProductsComponent}></Route>
          <Route path='/' component={HomeComponent}></Route>
        </Switch>
      </Router>
    <FooterComponent />
    </>
    
  )
}
}
export default App;
