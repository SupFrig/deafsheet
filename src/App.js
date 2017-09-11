import React, { Component } from 'react';
import logo from './logo.svg';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';
import './App.scss';
import eyeman from './img/data/bigeyeman.jpg';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header title="Deafsheet"/>
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
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"></div></div>
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
