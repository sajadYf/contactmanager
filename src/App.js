import React from 'react';
import {HashRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
import {Provider} from './Context'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider>
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Contacts}/>
                        <Route path="/contact/add" component={AddContact}/>
                        <Route path="/contact/:id" component={EditContact}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </Router>
    </Provider>
  );
}

export default App;
