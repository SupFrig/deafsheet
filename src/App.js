import React, { Component } from 'react';
import logo from './logo.svg';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';
import './App.scss';
import eyeman from './img/data/bigeyeman.jpg';
import animatedLogoEye from './img/skin/eye.png';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
  }
  render() {
    return (
      <div className="Container">
        <Header title="Deafsheet"/>
        <Disclaimer text="Sur ce site il y a des dessins. Vous pouvez les regarder, les partager, les colorier (après impression) et les utiliser comme bon vous semble.  Si vous me laissez un petit merci c'est plus gentil :)"/>
        <Grid/>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-inner">
        	<img className="Header-logo" alt={this.props.title} src={logo}/>
        	<nav className="Header-nav">
        	  <a href="#">Baby</a>
        	  <a href="#">Surréel oculaire</a>
        	  <a href="#">Insectes</a>
        	  <a className="highlight" href="#">contact</a>
        	</nav>
        </div>
      </div>
    );
  }
}

class AnimatedLogo extends Component {
  render() {
    return (
      <div className="Logo-container">
        <div className="Logo">
          <img className="one" src={animatedLogoEye}/>
          <img className="two" src={animatedLogoEye}/>
          <img className="three" src={animatedLogoEye}/>
          <img className="four" src={animatedLogoEye}/>
          <img className="five" src={animatedLogoEye}/>
          <img className="six" src={animatedLogoEye}/>
          <img className="seven" src={animatedLogoEye}/>
          <img className="eight" src={animatedLogoEye}/>
        </div>
        <div className="Logo-bg"></div>
      </div>
    );
  }
}

class Disclaimer extends Component {
  render() {
    return (
      <div className="Disclaimer">
        <div className="Disclaimer-inner">
          <AnimatedLogo/>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      container: '.Grid-container',
      isotope: null
    }
  }
	render() {
    var children = this.props.children;
    return (
      <div className="Grid">
	      <div className="Grid-inner">
          <h2 className="Grid-title">Les <span className="Grid-title--highlight"> dessins</span></h2>
          <div className="Grid-container">
            <div className="Grid-block">
              <div className="Grid-item"><div className="Grid-item-inner"><img src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img src={eyeman}/></div></div>
            </div>
            <div className="Grid-block">
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
            </div>
          </div>
	      </div>
      </div>
    );
  }
  componentDidMount() {
    if(!this.state.isotope) {
        this.setState({
            isotope: new Isotope(
              this.state.container,
              {
                layoutMode: 'packery',
                itemSelector : '.Grid-item'
            })
        });
    } else {
        this.state.isotope.reloadItems();
    }
  }
}
export default App;
