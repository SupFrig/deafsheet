import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header/>
        <Disclaimer text="Sur ce site il y a des dessins. Vous pouvez les regarder, les partager, les colorier (après impression) et les utiliser comme bon vous semble.  Si vous me laissez un petit merci c'est plus gentil :)"/>
        <Grid/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
	      <div className="Header-inner">
	      	<img className="Header-logo" src={logo}/>
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

class Disclaimer extends Component {
	render() {
    return (
      <div className="Disclaimer">
	      <div className="Disclaimer-inner">
	      	<p>{this.props.text}</p>
	      </div>
      </div>
    );
  }
}

class Grid extends Component {
	render() {
    return (
      <div className="Grid">
	      <div className="Grid-inner">
	      	<div class="Grid-item"></div>
	      </div>
      </div>
    );
  }
}
export default App;
