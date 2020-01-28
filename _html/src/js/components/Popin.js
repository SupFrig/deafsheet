import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class Popin extends Component {
  constructor(props){
    super(props);
    
    this.handleClickImage = this.handleClickImage.bind(this);
    this.state = {
      popinIsOpen: false
    }
  }

  componentDidMount(){
    this.state.popinIsOpen = this.props.popinIsOpen;
  };

  gotoImage (index) {
    this.setState({
      currentImage: this.props.currentImage,
      popinIsOpen: true,
    });
  }

  handleClickImage () {
    //if (this.props.currentImage === this.props.images.length - 1) return;

    window.open(this.props.images[this.props.currentImage].src,'_blank');
  }

  render () {
    const popinStyles = {
      blanket: (base) => ({
        ...base,
        zIndex: 4
      }),
      positioner: (base) => ({
        ...base,
        zIndex: 5
      }),
    }

    return (
      <ModalGateway>
        {!this.props.isLoading && this.props.popinIsOpen ? (
        <Modal
          backdropClosesModal={true}
          allowFullscreen={false}
          styles={popinStyles}
          isOpen={this.props.popinIsOpen}
          onClick={this.handleClickImage}
          onClickPrev={this.props.gotoPrevPopinImage}
          onClickNext={this.props.gotoNextPopinImage}
          openLightbox={this.props.openPopin}
          onClose={this.props.closePopin}
        >
          <Carousel
            currentIndex={this.props.currentIndex}
            views={this.props.images}
          />
        </Modal> 
        ) : null}
      </ModalGateway>
    );
  }
}

export default Popin;