import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./card/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Emoji from "./Emoji";
import './App.css';
import { AnimationPropExample } from "./examples/AnimationPropExample";
import { ExampleOne } from "./examples/ExampleOne";
import { GestureExample } from "./examples/GestureExample"
import {Example} from "./card/Card"
//import "./card/cardstyles.css"
import BasicTextFields from "./buttonTest";
import { images } from "./card/image-data";
import NavBar from "./card/NavBar";
import Profile from "./card/Profile";

export default function App() {
 
  const imageHasLoaded = true;

  return (
    <>
      <Router>
      <NavBar/>
      <Header/>
      {/* <Example /> */}
      <main>
        <Route exact path="/" component={Example} />
        <Route path="/Profile" component={Profile} />
     
      </main>
      </Router>

    
      
    </>
  );
}

