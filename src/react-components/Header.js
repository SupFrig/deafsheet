import React, { Component } from 'react';
import logoWhite from '../img/skin/logo-white.svg';
import logoBlack from '../img/skin/logo-black.svg';

class HeaderLink extends Component {
  constructor(props){
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    
    e.preventDefault();
    
    this.clickAnimation();
  }

  clickAnimation() {
    console.log('animate');
  }

  render () {
    var link = this.props.link;
    var cssClassString = 'Btn';
    if(typeof link.cssClass !== 'undefined'){
      cssClassString += ' '+link.cssClass;
    }
    return (
      <a key={link.id} className={cssClassString} onClick={this.clickEvent} href={link.url}><span>{link.title}</span></a>
    );
  }
}

class Header extends Component {

  render() {
    var logoDisplay = (this.props.sticky) ? logoWhite : logoBlack;

    return (
      <div className="Header">
        <div className="Header-inner">
        	<img className="Header-logo" alt={this.props.title} src={logoDisplay}/>
        	<nav className="Header-nav">
        	  {this.props.links.map(function(link) {
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

export default Header;