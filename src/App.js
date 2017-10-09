import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';
import Lightbox from 'react-images';

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
        {'id':1,'title':'Baby','url':'/#baby'},
        {'id':2,'title':'Surréel oculaire','url':'/#eyes'},
        {'id':3,'title':'Insectes','url':'/#bugs'},
        {'id':4,'title':'Contact','url':'/#contact','cssClass':'highlight'}
      ],
      footerLinks: [
        {'id':1,'title':'Mentions légales','url':'/legals'},
        {'id':2,'title':'A propos','url':'/about'}
      ],
      gridItems: [
        {'id':1,'caption':'Homme oeil','src': require('./img/data/bigeyeman.jpg')},
        {'id':2,'caption':'Blougiboulga','src': require('./img/data/weirdstuff.jpg')},
        {'id':3,'caption':'Papa oeil','src': require('./img/data/shadow_sketch.jpg')},
        {'id':4,'caption':'Chasseur d\'insectes','src': require('./img/data/insect_hunter.jpg')},
        {'id':5,'caption':'Le monstre du mur','src': require('./img/data/wall_monster.jpg')}
      ],
      gridsJsonUrl: '/getImages.php',
      currentImage: 0,
      lightboxIsOpen: false
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevLightboxImage = this.gotoPrevLightboxImage.bind(this);
    this.gotoNextLightboxImage = this.gotoNextLightboxImage.bind(this);
    this.handleHash = this.handleHash.bind(this);
  }

  handleHash () {
    var hash = window.location.hash.replace('#','');
    console.log('current hash',hash);

    switch(hash){
      case 'baby':

      break;
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('hashchange', this.handleHash);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevLightboxImage () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNextLightboxImage () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
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
        <Disclaimer text="Sur ce site il y a des dessins. Vous pouvez les regarder, les partager, les colorier (après impression) et les utiliser comme bon vous semble.  Si vous me laissez un petit merci c'est plus gentil :)"/>
        <Popin 
          images={this.state.gridItems} 
          currentImage={this.state.currentImage} 
          lightboxIsOpen={this.state.lightboxIsOpen} 
          openLightbox={this.openLightbox}
          closeLightbox={this.closeLightbox}
          gotoPrevLightboxImage={this.gotoPrevLightboxImage}
          gotoNextLightboxImage={this.gotoNextLightboxImage}
        />
        <Grid items={this.state.gridItems} itemClickHandler={this.openLightbox}/>
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

class Popin extends Component {
  constructor(props){
    super(props);
    
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNextLightboxImage();
  }

  render () {
    return (
      <Lightbox
        backdropClosesModal={true}
        currentImage={this.props.currentImage}
        images={this.props.images}
        isOpen={this.props.lightboxIsOpen}
        onClickImage={this.handleClickImage}
        onClickPrev={this.props.gotoPrevLightboxImage}
        onClickNext={this.props.gotoNextLightboxImage}
        openLightbox={this.props.openLightbox}
        onClose={this.props.closeLightbox}
      />
    );
  }
}

class Grid extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      container: '.Grid-container',
      isotope: null,
      ajaxUrl: '',
      loadIterations: 0
    }

    this.loadMore = this.loadMore.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this);
  }

  loadMore(e) {
    e.preventDefault();
  }

  itemClickHandler(index,e) {
    if (typeof this.props.itemClickHandler === 'function') {
      this.props.itemClickHandler(index,e);
      this.forceUpdate();
    }
  }

  render() {
    var Component = this;
    return (
      <div className="Grid animateSection">
        <div className="Grid-inner">
          <h2 className="Grid-title">Les <span className="Grid-title--highlight"> dessins</span></h2>
          <div className="Grid-container">
            <div className="Grid-block">
              {this.props.items.map(function(item, index) {

                  return (
                      <div key={item.id} className="Grid-item"><div className="Grid-item-inner" onClick={(e) => Component.itemClickHandler(index,e)}><img alt="Eye" src={item.src}/></div></div>
                  );
              })}
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
