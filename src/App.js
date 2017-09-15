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
    this.state = {
      links: [
        {'id':1,'title':'Baby','url':'/baby'},
        {'id':2,'title':'Surréel oculaire','url':'/eyes'},
        {'id':3,'title':'Insectes','url':'/bugs'},
        {'id':4,'title':'Contact','url':'/contact','cssClass':'highlight'}
      ]
    }
  }
  render() {
    return (
      <div className="Container">
        <Header links={this.state.links} title="Deafsheet"/>
        <Disclaimer text="Sur ce site il y a des dessins. Vous pouvez les regarder, les partager, les colorier (après impression) et les utiliser comme bon vous semble.  Si vous me laissez un petit merci c'est plus gentil :)"/>
        <Grid/>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

class HeaderLink extends Component {
  constructor(props){
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    
    e.preventDefault();
    console.log(this);
    this.clickAnimation();
  }

  clickAnimation() {
    console.log('animate');
  }

  render () {
    var link = this.props.link;
    var cssClassString = null;
    if(typeof link.cssClass !== 'undefined'){
      cssClassString = link.cssClass;
    }
    return (
      <a key={link.id} className={cssClassString} onClick={this.clickEvent} href={link.url}>{link.title}</a>
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
        	  {this.props.links.map(function(link) {
              console.log(link);
                return (
                    <HeaderLink link={link} />
                );
            })}
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

  loadMore(e) {
    e.preventDefault();
    console.log('loadmore');
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
          </div>
          <div className="Grid-btn-container">
            <a className="Grid-btn-readmore" onClick={this.loadMore} >+ de dessins</a>
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
