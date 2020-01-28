import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';

import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Popin from './components/Popin'

import gridItems from './json/homepage-content.json'
import imagesByCategory from './json/images-by-categories.json'

import '../scss/App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sticky: false,
      headerLinks: [
        {'id':1,'title':'Baby','url':'#baby'},
        {'id':2,'title':'Surréel oculaire','url':'#eyes'},
        {'id':3,'title':'Insectes','url':'#bugs'},
        {'id':4,'title':'Planètes','url':'#planets'},
        {'id':5,'title':'Le reste','url':'#others','cssClass':'highlight'}
      ],
      footerLinks: [
        {'id':1,'title':'Mentions légales','url':'/legals'},
        {'id':2,'title':'A propos','url':'/about'}
      ],
      gridItems: gridItems,
      imagesData: imagesByCategory,
      currentImage: 0,
      popinIsOpen: false,
      container: '.Grid-container'
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.openPopin = this.openPopin.bind(this);
    this.closePopin = this.closePopin.bind(this);
    this.gotoPrevPopinImage = this.gotoPrevPopinImage.bind(this);
    this.gotoNextPopinImage = this.gotoNextPopinImage.bind(this);
    this.handleHash = this.handleHash.bind(this);
    this.updateGridItems = this.updateGridItems.bind(this);
  }

  handleHash () {
    var hash = window.location.hash.replace('#','');

    if(hash.length > 0){
      this.updateGridItems(hash,5);
    }
  }

  updateGridItems(slug, number) {
    if(typeof number === 'undefined'){
      var number = 5;
    }

    var data = this.state.imagesData[slug];
    this.setState({
        gridItems: data
    });

    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(width >= 1140){
      this.setState({
          isotope: new Isotope(
            this.state.container,
            {
              layoutMode: 'packery',
              itemSelector : '.Grid-item'
          })
      });
    }
  }


  componentDidMount(){
    //set site title
    document.title = "Deafsheet";
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    //this.handleHash();
    window.addEventListener('hashchange', this.handleHash);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  openPopin (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      popinIsOpen: true,
    });

  }

  closePopin () {
    this.setState({
      currentImage: 0,
      popinIsOpen: false,
    });

  }

  gotoPrevPopinImage () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNextPopinImage () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  handleResize() {
    var headerHeight = document.querySelector('.Header').offsetHeight + 'px';
    var container = document.querySelector('.Container');
    container.style.paddingTop = headerHeight;
  }

  handleScroll() {
    var doc = document.documentElement;
    var value = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if(value > 20){
      this.setState({'sticky': true});
    }else{
      this.setState({'sticky': false});
    }
  }

  render() {
    var classes = 'Container'+ ((this.state.sticky) ? ' sticky' : '');
    return (
      <div className={classes}>
        <Header links={this.state.headerLinks} sticky={this.state.sticky} title="Deafsheet"/>
        <Disclaimer text="Bonjour o/"/>
        <Popin 
          isLoading={false}
          images={this.state.gridItems} 
          currentIndex={this.state.currentImage} 
          popinIsOpen={this.state.popinIsOpen} 
          openPopin={this.openPopin}
          closePopin={this.closePopin}
          gotoPrevPopinImage={this.gotoPrevPopinImage}
          gotoNextPopinImage={this.gotoNextPopinImage}
        />

        <Grid items={this.state.gridItems} itemClickHandler={this.openPopin}/>
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
          <img className="one" alt="Eye" src="img/skin/eye.png"/>
          <img className="two" alt="Eye" src="img/skin/eye.png"/>
          <img className="three" alt="Eye" src="img/skin/eye.png"/>
          <img className="four" alt="Eye" src="img/skin/eye.png"/>
          <img className="five" alt="Eye" src="img/skin/eye.png"/>
          <img className="six" alt="Eye" src="img/skin/eye.png"/>
          <img className="seven" alt="Eye" src="img/skin/eye.png"/>
          <img className="eight" alt="Eye" src="img/skin/eye.png"/>
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

ReactDOM.render(<App />, document.getElementById('root'));
