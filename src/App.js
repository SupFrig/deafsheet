import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';

import Header from './react-components/Header'
import ContactForm from './react-components/ContactForm'
import Footer from './react-components/Footer'

import './App.scss';

import eyeman from './img/data/bigeyeman.jpg';
import animatedLogoEye from './img/skin/eye.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sticky: false,
      headerLinks: [
        {'id':1,'title':'Baby','url':'/baby'},
        {'id':2,'title':'Surréel oculaire','url':'/eyes'},
        {'id':3,'title':'Insectes','url':'/bugs'},
        {'id':4,'title':'Contact','url':'/contact','cssClass':'highlight'}
      ],
      footerLinks: [
        {'id':1,'title':'Mentions légales','url':'/legals'},
        {'id':2,'title':'A propos','url':'/about'}
      ],
      gridItems: [
        {'id':1,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
        {'id':2,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
        {'id':3,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
        {'id':4,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
        {'id':5,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
        {'id':6,'title':'Homme oeil','url':'/img/data/bigeyeman.jpg'},
      ]
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var value = document.body.scrollTop;

    console.log(value);
    if(value > 20){
      this.setState({'sticky': true});
    }else{
      this.setState({'sticky': false});
    }
  }

  getMenuJson () {
    return fetch('https://facebook.github.io/react-native/movies.json')
     .then((response) => response.json())
     .then((responseJson) => {
       return responseJson.movies;
     })
     .catch((error) => {
       console.error(error);
     });
  }
  render() {
    console.log(this.state.sticky);
    var classes = 'Container'+ ((this.state.sticky) ? ' sticky' : '');
    return (
      <div className={classes}>
        <Header links={this.state.headerLinks} sticky={this.state.sticky} title="Deafsheet"/>
        <Disclaimer text="Sur ce site il y a des dessins. Vous pouvez les regarder, les partager, les colorier (après impression) et les utiliser comme bon vous semble.  Si vous me laissez un petit merci c'est plus gentil :)"/>
        <Grid items={this.state.gridItems}/>
        <ContactForm/>
        <Footer links={this.state.footerLinks}/>
      </div>
    );
  }
}


class AnimatedLogo extends Component {
  render() {
    return (
      <div className="Logo-container">
        <div className="Logo">
          <img className="one" alt="Eye" src={animatedLogoEye}/>
          <img className="two" alt="Eye" src={animatedLogoEye}/>
          <img className="three" alt="Eye" src={animatedLogoEye}/>
          <img className="four" alt="Eye" src={animatedLogoEye}/>
          <img className="five" alt="Eye" src={animatedLogoEye}/>
          <img className="six" alt="Eye" src={animatedLogoEye}/>
          <img className="seven" alt="Eye" src={animatedLogoEye}/>
          <img className="eight" alt="Eye" src={animatedLogoEye}/>
        </div>
        <div className="Logo-bg"></div>
      </div>
    );
  }
}

class Disclaimer extends Component {
  render() {
    return (
      <div className="Disclaimer animateSection">
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
      <div className="Grid animateSection">
        <div className="Grid-inner">
          <h2 className="Grid-title">Les <span className="Grid-title--highlight"> dessins</span></h2>
          <div className="Grid-container">
            <div className="Grid-block">
              <div className="Grid-item"><div className="Grid-item-inner"><img alt="Eye" src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img alt="Eye" src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img alt="Eye" src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img alt="Eye" src={eyeman}/></div></div>
              <div className="Grid-item"><div className="Grid-item-inner"><img alt="Eye" src={eyeman}/></div></div>
            </div>
          </div>
          <div className="Grid-btn-container">
            <a className="Btn highlight" href="#" onClick={this.loadMore} ><span>+ de dessins</span></a>
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
