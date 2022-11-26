
import {Link} from 'react-router-dom'
import { useGetAllProductsQuery } from "../../services/product.service"
const Products = () =>{
  const {isFetching,data,error} = useGetAllProductsQuery();

  if(isFetching){
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
    <>
      <p>Sản phẩm</p>

        <div className="list-item">
          {data.map(e=>{
              return(
                <div className="product-item" key={e.id}>
                  <div className="product-img">
                    <img 
                    src={e.image} 
                    alt={e.title}
                    />
                  </div>
                  <p className="mt-2">${e.price}</p>
                    <Link to={`/product/${e.id}`}>
                      <p className="name">{e.title}</p>
                    </Link>
                </div>
              )
          })}
        </div>
    </>
  )
}

export default Products;