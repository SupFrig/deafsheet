import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';

import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Popin from './components/Popin'

import '../scss/App.scss';
import animatedLogoEye from './../img/skin/eye.png';

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
        {'id':1,'caption':'Homme oeil','src': 'img/data/bigeyeman.jpg'},
        {'id':2,'caption':'Blougiboulga','src': 'img/data/weirdstuff.jpg'},
        {'id':3,'caption':'Papa oeil','src': 'img/data/shadow_sketch.jpg'},
        {'id':4,'caption':'Chasseur d\'insectes','src': 'img/data/insect_hunter.jpg'},
        {'id':5,'caption':'Le monstre du mur','src': 'img/data/wall_monster.jpg'}
      ],
      imagesData: {
        'bugs': [
          {'id':1,'caption':'Libellule mimique fleur','src': 'img/data/dragonfly.jpg'},
          {'id':2,'caption':'Chasseur d\'insectes','src': 'img/data/insect_hunter.jpg'},
          {'id':3,'caption':'Chasseur d\'insectes avec sa larve de compagnie','src': 'img/data/insect_hunter_mask_out.jpg'},
          {'id':4,'caption':'Mite géante de combat','src': 'img/data/mite.jpg'},
          {'id':5,'caption':'Unité biologique de transport','src': 'img/data/mobile_storage.jpg'},
          {'id':6,'caption':'Unité de combat (Sauterelle réaménagée)','src': 'img/data/sauterelle.jpg'},
          {'id':7,'caption':'Unité de combat (Araignée améliorée)','src': 'img/data/spider.jpg'},
          {'id':8,'caption':'Vrombon sauvage','src': 'img/data/vrombon.jpg'},
          {'id':9,'caption':'Scarabée mécanique','src': 'img/data/scarab.jpg'},
          {'id':10,'caption':'Nausicäa Tribute','src': 'img/data/nausicaa.jpg'}
        ],
        'eyes': [
          {'id':1,'caption':'Bras de fer','src': 'img/data/alienarmwrestling.jpg'},
          {'id':2,'caption':'Space Skate','src': 'img/data/alienskate.jpg'},
          {'id':3,'caption':'Space Skate 2','src': 'img/data/alienskatepark.jpg'},
          {'id':4,'caption':'Space Dance','src': 'img/data/dancing_alien.jpg'},
          {'id':5,'caption':'Residents tribute','src': 'img/data/bigeyeman.jpg'},
          {'id':6,'caption':'Mauvais Oeil','src': 'img/data/black_eyed.jpg'},
          {'id':7,'caption':'Bowie tribute','src': 'img/data/bowie-eye.jpg'},
          {'id':8,'caption':'Oeil de contrebande','src': 'img/data/eyes_undercover.jpg'},
          {'id':9,'caption':'Araignoeil','src': 'img/data/eyespider.jpg'},
          {'id':10,'caption':'Monsieur Oeil : Chute','src': 'img/data/freefall.jpg'},
          {'id':11,'caption':'Monsieur Oeil : Not a tribute','src': 'img/data/jul_ovni.jpg'},
          {'id':12,'caption':'Monsieur Oeil : Voyage en avion','src': 'img/data/plane.jpg'},
          {'id':13,'caption':'Mandaloeil','src': 'img/data/mandala.jpg'},
          {'id':14,'caption':'Kirby Tribute','src': 'img/data/mreye_kirby.jpg'},
          {'id':15,'caption':'Attraper','src': 'img/data/mreye_shadow.jpg'},
          {'id':16,'caption':'Jeux divins','src': 'img/data/shadow_sketch.jpg'},
          {'id':17,'caption':'Sprotch','src': 'img/data/sprotch.jpg'},
          {'id':18,'caption':'Langage des cordes','src': 'img/data/string_talking.jpg'},
          {'id':19,'caption':'Le trône du roi idiot','src': 'img/data/throne.jpg'},
          {'id':20,'caption':'Détective troisyeux','src': 'img/data/troizyeux.jpg'},
          {'id':21,'caption':'Le voile de la réalité','src': 'img/data/warp.jpg'},
          {'id':22,'caption':'Horrible Hypnose','src': 'img/data/weirdstuff.jpg'}
        ],
        'baby': [
          {'id':1,'caption':'Kirby Tribute','src': 'img/data/baby_kirby.jpg'},
          {'id':2,'caption':'Le concert','src': 'img/data/baby_live.jpg'},
          {'id':3,'caption':'Surf sur la mer de vomi','src': 'img/data/baby_surf.jpg'},
          {'id':4,'caption':'Baby Stark','src': 'img/data/got_baby.jpg'},
          {'id':5,'caption':'Baby Driver','src': 'img/data/baby_driver.jpg'},
          {'id':6,'caption':'Le petit bébé dans la prairie','src': 'img/data/baby_ingalls.jpg'},
          {'id':7,'caption':'Bébé = joie','src': 'img/data/hellbaby.jpg'},
          {'id':8,'caption':'Bébé psychédélique','src': 'img/data/psyche_baby.jpg'},
          {'id':9,'caption':'Puke my TV','src': 'img/data/puke_my_TV.jpg'},
          {'id':10,'caption':'Bébé réaliste','src': 'img/data/realbaby.png'},
          {'id':11,'caption':'Les adieux de bébé','src': 'img/data/bye_baby.jpg'}
        ],
        'planets': [
          {'id':1,'caption':'Lonely Planet','src': 'img/data/lonely_planet.jpg'},
          {'id':2,'caption':'Galathia, planète élégante','src': 'img/data/galathia.jpg'},
          {'id':3,'caption':'Patros (& Hyos), planète paternelle','src': 'img/data/patros-hyos.jpg'},
          {'id':4,'caption':'Odéole, planète lyrique','src': 'img/data/odeole.jpg'},
          {'id':5,'caption':'Traumophta, planète fragmentée','src': 'img/data/traumophta.jpg'}
        ],
        'others': [
          {'id':1,'caption':'Combat Abyssal','src': 'img/data/abyss_fight.jpg'},
          {'id':2,'caption':'Le monstre du coin','src': 'img/data/corner_monster.jpg'},
          {'id':3,'caption':'Cthulhu','src': 'img/data/cthulhu.jpg'},
          {'id':4,'caption':'Onde de choc','src': 'img/data/headshot.jpg'},
          {'id':5,'caption':'Angoisse moderne','src': 'img/data/psyche.jpg'},
          {'id':6,'caption':'Jeux de garçons','src': 'img/data/jeuxdegarcons.jpg'},
          {'id':7,'caption':'Fuite','src': 'img/data/kaibalike.jpg'},
          {'id':8,'caption':'Combattant de rue','src': 'img/data/kung_fu_sdf.jpg'},
          {'id':9,'caption':'Le bateau perdu','src': 'img/data/lost_ship.jpg'},
          {'id':10,'caption':'Vision altérée','src': 'img/data/minimal_mob.jpg'},
          {'id':11,'caption':'Autoportrait','src': 'img/data/minimal_selfportrait.jpg'},
          {'id':12,'caption':'Totojaws','src': 'img/data/rawr.jpg'},
          {'id':13,'caption':'Monstre marin','src': 'img/data/sea_monster.jpg'},
          {'id':14,'caption':'Horreur shampooinesque','src': 'img/data/shampoo_horror.jpg'},
          {'id':15,'caption':'Yoga shampoo','src': 'img/data/yoga_shampoo.jpg'},
          {'id':16,'caption':'Monstre du mur','src': 'img/data/wall_monster.jpg'},
          {'id':17,'caption':'Assemblage de guerre','src': 'img/data/warboy.jpg'},
          {'id':18,'caption':'Baleine','src': 'img/data/whale.jpg'}
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

ReactDOM.render(<App />, document.getElementById('root'));
