import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';
import Lightbox from 'react-images';

import Header from './react-components/Header'
import ContactForm from './react-components/ContactForm'
import Footer from './react-components/Footer'

import './App.scss';

import eyeman from './img/data/thumbs/bigeyeman.jpg';
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
        {'id':4,'title':'Le reste','url':'/#others','cssClass':'highlight'}
      ],
      footerLinks: [
        {'id':1,'title':'Mentions légales','url':'/legals'},
        {'id':2,'title':'A propos','url':'/about'}
      ],
      gridItems: [
        {'id':1,'caption':'Homme oeil','src': require('./img/data/thumbs/bigeyeman.jpg')},
        {'id':2,'caption':'Blougiboulga','src': require('./img/data/thumbs/weirdstuff.jpg')},
        {'id':3,'caption':'Papa oeil','src': require('./img/data/thumbs/shadow_sketch.jpg')},
        {'id':4,'caption':'Chasseur d\'insectes','src': require('./img/data/thumbs/insect_hunter.jpg')},
        {'id':5,'caption':'Le monstre du mur','src': require('./img/data/thumbs/wall_monster.jpg')}
      ],
      imagesData: {
        'bugs': [
          {'id':1,'caption':'Libellule mimique fleur','src': require('./img/data/thumbs/dragonfly.jpg')},
          {'id':2,'caption':'Chasseur d\'insectes','src': require('./img/data/thumbs/insect_hunter.jpg')},
          {'id':3,'caption':'Chasseur d\'insectes avec sa larve de compagnie','src': require('./img/data/thumbs/insect_hunter_mask_out.jpg')},
          {'id':4,'caption':'Mite géante de combat','src': require('./img/data/thumbs/mite.jpg')},
          {'id':5,'caption':'Unité biologique de transport','src': require('./img/data/thumbs/mobile_storage.jpg')},
          {'id':6,'caption':'Unité de combat (Sauterelle réaménagée)','src': require('./img/data/thumbs/sauterelle.jpg')},
          {'id':7,'caption':'Unité de combat (Araignée améliorée)','src': require('./img/data/thumbs/spider.jpg')},
          {'id':8,'caption':'Vrombon sauvage','src': require('./img/data/thumbs/vrombon.jpg')},
          {'id':9,'caption':'Scarabée mécanique','src': require('./img/data/thumbs/scarab.jpg')},
          {'id':10,'caption':'Nausicäa Tribute','src': require('./img/data/thumbs/nausicaa.jpg')}
        ],
        'eyes': [
          {'id':1,'caption':'Bras de fer','src': require('./img/data/thumbs/alienarmwrestling.jpg')},
          {'id':2,'caption':'Space Skate','src': require('./img/data/thumbs/alienskate.jpg')},
          {'id':3,'caption':'Space Skate 2','src': require('./img/data/thumbs/alienskatepark.jpg')},
          {'id':4,'caption':'Space Dance','src': require('./img/data/thumbs/dancing_alien.jpg')},
          {'id':5,'caption':'Residents tribute','src': require('./img/data/thumbs/bigeyeman.jpg')},
          {'id':6,'caption':'Mauvais Oeil','src': require('./img/data/thumbs/black_eyed.jpg')},
          {'id':7,'caption':'Bowie tribute','src': require('./img/data/thumbs/bowie-eye.jpg')},
          {'id':8,'caption':'Oeil de contrebande','src': require('./img/data/thumbs/eyes_undercover.jpg')},
          {'id':9,'caption':'Araignoeil','src': require('./img/data/thumbs/eyespider.jpg')},
          {'id':10,'caption':'Monsieur Oeil : Chute','src': require('./img/data/thumbs/freefall.jpg')},
          {'id':11,'caption':'Monsieur Oeil : Not a tribute','src': require('./img/data/thumbs/jul_ovni.jpg')},
          {'id':12,'caption':'Monsieur Oeil : Voyage en avion','src': require('./img/data/thumbs/plane.jpg')},
          {'id':13,'caption':'Mandaloeil','src': require('./img/data/thumbs/mandala.jpg')},
          {'id':14,'caption':'Kirby Tribute','src': require('./img/data/thumbs/mreye_kirby.jpg')},
          {'id':15,'caption':'Attraper','src': require('./img/data/thumbs/mreye_shadow.jpg')},
          {'id':16,'caption':'Jeux divins','src': require('./img/data/thumbs/shadow_sketch.jpg')},
          {'id':17,'caption':'Sprotch','src': require('./img/data/thumbs/sprotch.jpg')},
          {'id':18,'caption':'Langage des cordes','src': require('./img/data/thumbs/string_talking.jpg')},
          {'id':19,'caption':'Le trône du roi idiot','src': require('./img/data/thumbs/throne.jpg')},
          {'id':20,'caption':'Détective troisyeux','src': require('./img/data/thumbs/troizyeux.jpg')},
          {'id':21,'caption':'Le voile de la réalité','src': require('./img/data/thumbs/warp.jpg')},
          {'id':22,'caption':'Horrible Hypnose','src': require('./img/data/thumbs/weirdstuff.jpg')}
        ],
        'baby': [
          {'id':1,'caption':'Kirby Tribute','src': require('./img/data/thumbs/baby_kirby.jpg')},
          {'id':2,'caption':'Le concert','src': require('./img/data/thumbs/baby_live.jpg')},
          {'id':3,'caption':'Surf sur la mer de vomi','src': require('./img/data/thumbs/baby_surf.jpg')},
          {'id':4,'caption':'Baby Stark','src': require('./img/data/thumbs/got_baby.jpg')},
          {'id':5,'caption':'Baby Driver','src': require('./img/data/thumbs/baby_driver.jpg')},
          {'id':6,'caption':'Le petit bébé dans la prairie','src': require('./img/data/thumbs/baby_ingalls.jpg')},
          {'id':7,'caption':'Bébé = joie','src': require('./img/data/thumbs/hellbaby.jpg')},
          {'id':8,'caption':'Bébé psychédélique','src': require('./img/data/thumbs/psyche_baby.jpg')},
          {'id':9,'caption':'Puke my TV','src': require('./img/data/thumbs/puke_my_TV.jpg')},
          {'id':10,'caption':'Bébé réaliste','src': require('./img/data/thumbs/realbaby.jpg')},
          {'id':11,'caption':'Les adieux de bébé','src': require('./img/data/thumbs/bye_baby.jpg')}
        ],
        'others': [
          {'id':1,'caption':'Combat Abyssal','src': require('./img/data/thumbs/abyss_fight.jpg')},
          {'id':2,'caption':'Le monstre du coin','src': require('./img/data/thumbs/corner_monster.jpg')},
          {'id':3,'caption':'Cthulhu','src': require('./img/data/thumbs/cthulhu.jpg')},
          {'id':4,'caption':'Onde de choc','src': require('./img/data/thumbs/headshot.jpg')},
          {'id':5,'caption':'Angoisse moderne','src': require('./img/data/thumbs/psyche.jpg')},
          {'id':6,'caption':'Jeux de garçons','src': require('./img/data/thumbs/jeuxdegarcons.jpg')},
          {'id':7,'caption':'Fuite','src': require('./img/data/thumbs/kaibalike.jpg')},
          {'id':8,'caption':'Combattant de rue','src': require('./img/data/thumbs/kung_fu_sdf.jpg')},
          {'id':9,'caption':'Le bateau perdu','src': require('./img/data/thumbs/lost_ship.jpg')},
          {'id':10,'caption':'Vision altérée','src': require('./img/data/thumbs/minimal_mob.jpg')},
          {'id':11,'caption':'Autoportrait','src': require('./img/data/thumbs/minimal_selfportrait.jpg')},
          {'id':12,'caption':'Totojaws','src': require('./img/data/thumbs/rawr.jpg')},
          {'id':13,'caption':'Monstre marin','src': require('./img/data/thumbs/sea_monster.jpg')},
          {'id':14,'caption':'Horreur shampooinesque','src': require('./img/data/thumbs/shampoo_horror.jpg')},
          {'id':15,'caption':'Yoga shampoo','src': require('./img/data/thumbs/yoga_shampoo.jpg')},
          {'id':16,'caption':'Monstre du mur','src': require('./img/data/thumbs/wall_monster.jpg')},
          {'id':17,'caption':'Assemblage de guerre','src': require('./img/data/thumbs/warboy.jpg')},
          {'id':18,'caption':'Baleine','src': require('./img/data/thumbs/whale.jpg')}
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
    console.log('current hash',hash);

    this.updateGridItems(hash,5);

    
  }

  updateGridItems(slug, number) {
    if(typeof number === 'undefined'){
      var number = 5;
    }

    var data = this.state.imagesData[slug];
    console.log(data);
    this.setState({
        gridItems: data
    });

    this.setState({
        isotope: new Isotope(
          this.state.container,
          {
            layoutMode: 'packery',
            itemSelector : '.Grid-item'
        })
    });
    
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
        </div>
      </div>
    );
  }

  buildIsotopeGrid() {
    console.log(this.state.isotope);
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
  componentDidMount() {
    this.buildIsotopeGrid();
  }
}
export default App;
