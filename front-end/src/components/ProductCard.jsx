import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../styles/productCard.module.css';

function ProductCard(props) {
  const { name, price, urlImage, index } = props;
  const numberQuantity = 0;
  const [quantity, setQuantity] = useState(numberQuantity);

  return (
    <div className={ styles.productCard }>
      <div data-testid={ `customer_products__element-card-title-${index}` }>
        { name }
      </div>
      <div data-testid={ `customer_products__element-card-price-${index}` }>
        { price }
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ urlImage }
        alt={ name }
      />
      <div className={ styles.quantityCard }>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          onClick={ () => setQuantity(quantity - 1) }
        >
          {' '}
          -
          {' '}

        </button>
        <span data-testid={ `customer_products__input-card-quantity-${index}` }>

          { quantity }

          {' '}

        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${index}` }
          onClick={ () => setQuantity(quantity + 1) }
        >
          {' '}
          +
          {' '}

        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  urlImage: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};

export default ProductCard;
