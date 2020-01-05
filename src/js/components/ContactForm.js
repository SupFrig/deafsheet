import React, { Component } from 'react';

class ContactForm extends Component {
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

    return (
      <div className="Contact">
        <div className="Contact-inner">
          <h3 className="Contact-title">Envoie moi <span className="Contact-title--highlight">les messages</span></h3>
          <form action="" method="POST" className="Contact-form">
            <input type="text" name="fullname" placeholder="Votre nom*" />
            <input type="text" name="email" placeholder="Votre email*" />
            <textarea name="message" placeholder="Votre message">
            </textarea>
            <a href="#" className="Contact-submit Btn highlight"><span>Envoyer</span></a>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;