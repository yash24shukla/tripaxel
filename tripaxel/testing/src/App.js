import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import {withRouter} from 'react-router';
import Landing from './views/LandingPage.jsx'
import aboutUs from './views/AboutUs.jsx'
import forums from './views/FormPage.js'
import login from './views/LoginPage.jsx'
import register from './views/RegisterPage.jsx'
class App extends React.Component{
  
  constructor(props) {
    super(props);
      this.state = {
        Qlist: [],
        activeItem:{
          id:null , 
          title:'',

        },
        editing:'',

      }
      
  };
  

  


  render(){
  return (
    <Router>
    <div className="App">
   
     <Switch> 
     <Route exact path='/'  component={withRouter(Landing)} />
     <Route exact path='/home'  component={withRouter(Landing)} />
     <Route path='/about'  component={withRouter(aboutUs)} />
     <Route path='/forums'  component={withRouter(forums)} />
     <Route path='/login'  component={withRouter(login)} />
     <Route path='/register'  component={withRouter(register)} />

     </Switch>
     
     
    </div>
    </Router>
  );
}
}

export default App;
