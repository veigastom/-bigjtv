import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from '../src/components/common/Appbar'
import withStyles from "@material-ui/core/styles/withStyles";

import VideoContent from '../src/components/common/VideoContainer'
// import SlideContainer from '../src/components/slides/SlideContainer'
import Vision from '../src/components/Vision20/Vision20'
// import SectionPill from '../src/components/Sections/Sectionpills'
// import Carousel from '../src/components/Sections/SectionCarousel'
// import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/common/Header'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import LeftLinks from '../src/components/Header/leftLinks'
import componentsStyle from "../src/assets/jss/material-kit-react/views/components";
import Tiles from '../src/components/Tiles/Cardtitles'
import Logo from '../src/assets/img/Logo.png'
import Backcover from '../src/components/common/Backcover'
import { m, b } from './components/common/Device'
const LogoComp = <img src={Logo} width={80} />
const width = window.innerWidth
const height = window.innerHeight

class App extends Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className="App" style={{ width }}>
        <Header
          brand={LogoComp}
          rightLinks={<HeaderLinks />}
          leftLinks={<LeftLinks />}
          fixed
          color="dark"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {/* <Navbar /> */}


        <VideoContent />
        <Tiles />
        <Backcover />
        <Vision />
        {/* <Contact/> */}
        {/* <SectionPill /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withStyles(componentsStyle)(App);



// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>