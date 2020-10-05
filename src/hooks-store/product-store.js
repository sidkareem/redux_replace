import { productContext } from '../context/context-prod';
import {initStore} from './store';
 const confstore=()=> {


    const actions={
        Toggle_fav:(cur,productId)=>{
            const prodIndex = cur.products.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !cur.products[prodIndex].isFavorite;
              const updatedProducts = [...cur.products];
              updatedProducts[prodIndex] = {
                ...cur.products[prodIndex],
                isFavorite: newFavStatus
              };
            return {products:cur.products}

        }
    }
    initStore(actions,{ 
        
        products:[
            {id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }
        ]});


   const  togglefav=(productId)=>{
    setProducts(cur=>
        {
            const prodIndex = cur.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !cur[prodIndex].isFavorite;
              const updatedProducts = [...cur];
              updatedProducts[prodIndex] = {
                ...cur[prodIndex],
                isFavorite: newFavStatus
         } });

  }
}