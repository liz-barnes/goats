import React, { Component } from 'react';
import getGoats from '../../helpers/data/goatData';
import Goat from '../Goat';
export default class GoatCorral extends Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    getGoats().then((resp) => {
      this.setState({
        goats: resp,
      });
    });
  }

  render() {
    const { goats } =this.state
    const renderGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} />)
    );

    return (
      <div>
        <h2>Goat Corral</h2>
        {renderGoatToDom()}
      </div>
    );
  }
}
