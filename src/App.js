import React, {Component} from 'react';
import './style.css';
import CardData from './CardData';
import Card from './Card'

//Helper Method
export function renderPlatformUI(PlatformChild) {
  return (childProps) => {
    return (<PlatformChild {...childProps} />);
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
        <div>
          <CardData render={renderPlatformUI(Card)} />
        </div>
    );
  }
}

export default App;
