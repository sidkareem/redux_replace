import React, { useContext } from 'react';


import Card from '../UI/Card';
import './ProductItem.css';
import {useStore} from '../../hooks-store/store';
//import { toggleFav } from '../../store/actions/products';
//import {productContext} from '../../context/context-prod';
const ProductItem = props => {
  const dispatch =useStore()[1];
  const toggleFavHandler = () => {
       dispatch('Toggle_fav',props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
