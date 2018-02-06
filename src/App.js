import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';
import Lightbox from 'react-images';

import Header from './react-components/Header'
import ContactForm from './react-components/ContactForm'
import Footer from './react-components/Footer'

import './App.scss';

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
        {'id':4,'title':'Planètes','url':'/#planets'},
        {'id':5,'title':'Le reste','url':'/#others','cssClass':'highlight'}
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
      imagesData: {
        'bugs': [
          {'id':1,'caption':'Libellule mimique fleur','src': require('./img/data/dragonfly.jpg')},
          {'id':2,'caption':'Chasseur d\'insectes','src': require('./img/data/insect_hunter.jpg')},
          {'id':3,'caption':'Chasseur d\'insectes avec sa larve de compagnie','src': require('./img/data/insect_hunter_mask_out.jpg')},
          {'id':4,'caption':'Mite géante de combat','src': require('./img/data/mite.jpg')},
          {'id':5,'caption':'Unité biologique de transport','src': require('./img/data/mobile_storage.jpg')},
          {'id':6,'caption':'Unité de combat (Sauterelle réaménagée)','src': require('./img/data/sauterelle.jpg')},
          {'id':7,'caption':'Unité de combat (Araignée améliorée)','src': require('./img/data/spider.jpg')},
          {'id':8,'caption':'Vrombon sauvage','src': require('./img/data/vrombon.jpg')},
          {'id':9,'caption':'Scarabée mécanique','src': require('./img/data/scarab.jpg')},
          {'id':10,'caption':'Nausicäa Tribute','src': require('./img/data/nausicaa.jpg')}
        ],
        'eyes': [
          {'id':1,'caption':'Bras de fer','src': require('./img/data/alienarmwrestling.jpg')},
          {'id':2,'caption':'Space Skate','src': require('./img/data/alienskate.jpg')},
          {'id':3,'caption':'Space Skate 2','src': require('./img/data/alienskatepark.jpg')},
          {'id':4,'caption':'Space Dance','src': require('./img/data/dancing_alien.jpg')},
          {'id':5,'caption':'Residents tribute','src': require('./img/data/bigeyeman.jpg')},
          {'id':6,'caption':'Mauvais Oeil','src': require('./img/data/black_eyed.jpg')},
          {'id':7,'caption':'Bowie tribute','src': require('./img/data/bowie-eye.jpg')},
          {'id':8,'caption':'Oeil de contrebande','src': require('./img/data/eyes_undercover.jpg')},
          {'id':9,'caption':'Araignoeil','src': require('./img/data/eyespider.jpg')},
          {'id':10,'caption':'Monsieur Oeil : Chute','src': require('./img/data/freefall.jpg')},
          {'id':11,'caption':'Monsieur Oeil : Not a tribute','src': require('./img/data/jul_ovni.jpg')},
          {'id':12,'caption':'Monsieur Oeil : Voyage en avion','src': require('./img/data/plane.jpg')},
          {'id':13,'caption':'Mandaloeil','src': require('./img/data/mandala.jpg')},
          {'id':14,'caption':'Kirby Tribute','src': require('./img/data/mreye_kirby.jpg')},
          {'id':15,'caption':'Attraper','src': require('./img/data/mreye_shadow.jpg')},
          {'id':16,'caption':'Jeux divins','src': require('./img/data/shadow_sketch.jpg')},
          {'id':17,'caption':'Sprotch','src': require('./img/data/sprotch.jpg')},
          {'id':18,'caption':'Langage des cordes','src': require('./img/data/string_talking.jpg')},
          {'id':19,'caption':'Le trône du roi idiot','src': require('./img/data/throne.jpg')},
          {'id':20,'caption':'Détective troisyeux','src': require('./img/data/troizyeux.jpg')},
          {'id':21,'caption':'Le voile de la réalité','src': require('./img/data/warp.jpg')},
          {'id':22,'caption':'Horrible Hypnose','src': require('./img/data/weirdstuff.jpg')}
        ],
        'baby': [
          {'id':1,'caption':'Kirby Tribute','src': require('./img/data/baby_kirby.jpg')},
          {'id':2,'caption':'Le concert','src': require('./img/data/baby_live.jpg')},
          {'id':3,'caption':'Surf sur la mer de vomi','src': require('./img/data/baby_surf.jpg')},
          {'id':4,'caption':'Baby Stark','src': require('./img/data/got_baby.jpg')},
          {'id':5,'caption':'Baby Driver','src': require('./img/data/baby_driver.jpg')},
          {'id':6,'caption':'Le petit bébé dans la prairie','src': require('./img/data/baby_ingalls.jpg')},
          {'id':7,'caption':'Bébé = joie','src': require('./img/data/hellbaby.jpg')},
          {'id':8,'caption':'Bébé psychédélique','src': require('./img/data/psyche_baby.jpg')},
          {'id':9,'caption':'Puke my TV','src': require('./img/data/puke_my_TV.jpg')},
          {'id':10,'caption':'Bébé réaliste','src': require('./img/data/realbaby.png')},
          {'id':11,'caption':'Les adieux de bébé','src': require('./img/data/bye_baby.jpg')}
        ],
        'planets': [
          {'id':1,'caption':'Lonely Planet','src': require('./img/data/lonely_planet.jpg')},
          {'id':2,'caption':'Galathia, planète élégante','src': require('./img/data/galathia.jpg')},
          {'id':3,'caption':'Patros (& Hyos), planète paternelle','src': require('./img/data/patros-hyos.jpg')},
          {'id':4,'caption':'Odéole, planète lyrique','src': require('./img/data/odeole.jpg')},
          {'id':5,'caption':'Traumophta, planète fragmentée','src': require('./img/data/traumophta.jpg')}
        ],
        'others': [
          {'id':1,'caption':'Combat Abyssal','src': require('./img/data/abyss_fight.jpg')},
          {'id':2,'caption':'Le monstre du coin','src': require('./img/data/corner_monster.jpg')},
          {'id':3,'caption':'Cthulhu','src': require('./img/data/cthulhu.jpg')},
          {'id':4,'caption':'Onde de choc','src': require('./img/data/headshot.jpg')},
          {'id':5,'caption':'Angoisse moderne','src': require('./img/data/psyche.jpg')},
          {'id':6,'caption':'Jeux de garçons','src': require('./img/data/jeuxdegarcons.jpg')},
          {'id':7,'caption':'Fuite','src': require('./img/data/kaibalike.jpg')},
          {'id':8,'caption':'Combattant de rue','src': require('./img/data/kung_fu_sdf.jpg')},
          {'id':9,'caption':'Le bateau perdu','src': require('./img/data/lost_ship.jpg')},
          {'id':10,'caption':'Vision altérée','src': require('./img/data/minimal_mob.jpg')},
          {'id':11,'caption':'Autoportrait','src': require('./img/data/minimal_selfportrait.jpg')},
          {'id':12,'caption':'Totojaws','src': require('./img/data/rawr.jpg')},
          {'id':13,'caption':'Monstre marin','src': require('./img/data/sea_monster.jpg')},
          {'id':14,'caption':'Horreur shampooinesque','src': require('./img/data/shampoo_horror.jpg')},
          {'id':15,'caption':'Yoga shampoo','src': require('./img/data/yoga_shampoo.jpg')},
          {'id':16,'caption':'Monstre du mur','src': require('./img/data/wall_monster.jpg')},
          {'id':17,'caption':'Assemblage de guerre','src': require('./img/data/warboy.jpg')},
          {'id':18,'caption':'Baleine','src': require('./img/data/whale.jpg')}
        ]
      },
      currentImage: 0,
      lightboxIsOpen: false,
      container: '.Grid-container'
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevLightboxImage = this.gotoPrevLightboxImage.bind(this);
    this.gotoNextLightboxImage = this.gotoNextLightboxImage.bind(this);
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
        <Disclaimer text="Les petits dessins de SuperFrigo. Vous pouvez en disposer comme bon vous semble, tout comme vous pouvez prendre la liberté de m'en informer sur l'adresse e-mail deafsheet@gmail.com. Bon visionnage :)"/>
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
    
    //if (this.props.currentImage === this.props.images.length - 1) return;

    window.open(this.props.images[this.props.currentImage].src,'_blank');
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
        </div>
      </div>
    );
  }

  buildIsotopeGrid() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(width >= 1140){
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
  componentDidMount() {
    this.buildIsotopeGrid();
  }
}
export default App;
