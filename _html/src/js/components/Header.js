import React, { Component } from 'react';
import logoWhite from '../../img/skin/logo-white.svg';
import logoBlack from '../../img/skin/logo-black.svg';

class HeaderLink extends Component {
  constructor(props){
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    //e.preventDefault();
    this.clickAnimation();
  }

  clickAnimation() {

    function scrollTo(element, to, duration) {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;

      setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    }

    scrollTo(document.querySelector('html'), 500, 300);
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
        	<a href="http://deafsheet.fr"><img className="Header-logo" alt={this.props.title} src={logoDisplay}/></a>
        	<nav className="Header-nav">
        	  {this.props.links.map(function(link) {
                return (
                    <HeaderLink key={link.id} link={link} />
                );
            })}
        	</nav>
        </div>
      </div>
    );
  }
}

export default Header;