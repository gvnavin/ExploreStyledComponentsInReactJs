import React, { Component } from 'react';

// This is the common code for Card Data in Expo
// we need to have an abstraction of all the data props that will go in an out of the component
// writing the code in one Platform and then spearting per render props design Pattern it is much faster in // my opion

class CardData extends Component {
  constructor() {
    super();
    // we can have state here to be passed to the Render Comp
  }

  onClick = () => {
    alert('Via Render Props');
  }

  render() {
    return (
        this.props.render({...this.props, ...{click: this.onClick}}) /*pass State if need be */
    );
  }
}

export default CardData
