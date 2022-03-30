import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsAction';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {image, description, title, price, category} = product;
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductsDetails = async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Err:', err);
      })
    dispatch(selectedProduct(response.data))
  };
  useEffect(() => {
    if(productId && productId !== "")fetchProductsDetails();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId])
  return (
      <div className='ui grid container' style={{marginTop:'80px'}}>
        {Object.keys(product).length === 0 ? (
          <h2>...Loading</h2>
        ) :(
        <div className='ui placeholder segment'>
          <div className='ui two columns stockable center aligned grid'>
            <div className='ui vertical divider'>AND</div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className='ui fluid image' style={{height:'400px'}} src={image}/>
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className='ui teal tag label'>$ {price}</a>
                </h2>
                <h3 className='ui brow block header'>{category}</h3>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex="0">
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )}
  </div>
  );
};
export default ProductDetails;