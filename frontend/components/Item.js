import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        <ItemStyles>
          <Title>{item.title}</Title>
        </ItemStyles>
      </div>
    );
  }
}


export default Item;