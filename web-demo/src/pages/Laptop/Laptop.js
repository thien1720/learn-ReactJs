import { useState , useEffect  } from "react";

const Laptop = ()=>{

    const [propduct , setProduct] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(rev =>rev.json())
        .then((item)=> setProduct(item))
        .catch((error) =>{
            setEroos(error)
            setLoading(false)
        })
    } ,[])
    
    return (
        <main>
            <h2>laptop</h2>
            console.log(item)
        </main>
    )
}

export default Laptop