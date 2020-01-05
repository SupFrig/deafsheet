import React, { Component } from 'react';
import Isotope from 'isotope-layout';

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
      this.props.itemClickHandler(index,e);{item.caption}{item.caption}
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
                      <div key={item.id} className="Grid-item">
                        <div className="Grid-item-inner" onClick={(e) => Component.itemClickHandler(index,e)}>
                          <img alt={item.caption} src={item.src}/>
                        </div>
                      </div>
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

export default Grid;