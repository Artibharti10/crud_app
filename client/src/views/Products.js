import { useEffect, useState } from "react"
import axios from "axios";

const Products = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const [ProductData,setProductData] = useState();

    const fetchData = async() => {        
        const res = await axios.get(`http://localhost:3000/api/products`);
        setProductData(res.data);
        return res;
    }

    useEffect(() => {
        fetchData();
    },[]);
    
    const handleDelete = async(id) => {
        const res = await axios.delete(`http://localhost:3000/api/:${id}`);
        return res;
    }

    const handleEdit = () => {

    }
return(
    <>
    <div>
        {
            ProductData?.map((elem) => (
                <>
                <h2 key={elem.id}>{elem.id}</h2>
                <p>{elem.name}</p>
                <p>{elem.price}</p>
                <p>{elem.quantity}</p>
                <button onClick={handleEdit}>Edit</button>
                <button onclick={handleDelete(elem.id)}>Delete</button>
                </>
            ))
        }
    </div>
    </>
)
}
export default Products