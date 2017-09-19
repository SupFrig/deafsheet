import React, { Component } from 'react';

class FooterLink extends Component {
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
    return (
      <a key={link.id} className="Footer-link" onClick={this.clickEvent} href={link.url}><span>{link.title}</span></a>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-inner">
        	<nav className="Footer-nav">
        	  {this.props.links.map(function(link) {
                return (
                    <FooterLink link={link} />
                );
            })}
        	</nav>
        </div>
      </div>
    );
  }
}

export default Footer;