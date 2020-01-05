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
  constructor(){
    super();
    this.state = {
      copyright: ""
    }
  }

  componentDidMount(){
    var fullYear = new Date().getFullYear();
    this.state.copyright = "© Thomas Montet "+fullYear
  }

  render() {
    return (
      <div className="Footer">
        <div className="Footer-inner">
        	  {this.state.copyright}
        </div>
      </div>
    );
  }
}

export default Footer;