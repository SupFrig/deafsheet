import React, { Component } from 'react';
import Lightbox from 'react-images';

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
      /*<Lightbox
        backdropClosesModal={true}
        currentView={this.props.currentImage}
        views={this.props.images}
        isOpen={this.props.lightboxIsOpen}
        onClickImage={this.handleClickImage}
        onClickPrev={this.props.gotoPrevLightboxImage}
        onClickNext={this.props.gotoNextLightboxImage}
        openLightbox={this.props.openLightbox}
        onClose={this.props.closeLightbox}
      />*/
      <div></div>
    );
  }
}

export default Popin;