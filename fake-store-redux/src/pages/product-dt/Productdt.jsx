import {useParams} from 'react-router-dom'
import { useState,useEffect, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart.slice'

const Productdt = () =>{
  const dispatch = useDispatch()
  const [product,setProduct] = useState([])
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)
  let params = useParams();
  useEffect(
    ()=>{
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then(res=>res.json())
            .then(json=>{
              setProduct(json)
              setLoading(false)
            })
            .catch(error=>{
              setError(error)
              setLoading(false)
            })
  },[params])


  if(loading){
    return (
      <p>Loading...</p>
    )
  }
  if(error){
    return(
      <p>Có lỗi xảy ra !</p>
    )
  }
  return(
    <div className="product-item">
      <p>Chi tiết sản phẩm</p>
      <div className="row align-items-center justify-content-between mt-5">
        <div className='product-img col-lg-5'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info col-lg-7">
          <p className='price'>${product.price}</p>
          <p className="name">{product.title}</p>
          <p className='category'>Category: {product.category}</p>
          <p className='description'>Description: {product.description}</p>
          <button className='mb-3 btn btn-primary' onClick={()=>dispatch(addToCart(product))}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  )
}
export default Productdt;



  
  // export const selectbyId = (id) => (state) => state.product.data.