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
        const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
        console.log(res,"responseeee");
        if(res.status === 200){
            fetchData(); 
        }
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
                <p key={elem._id}>{elem.name}</p>
                <p>{elem.price}</p>
                <p>{elem.quantity}</p>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleDelete(elem._id)}>Delete</button>
                </>
            ))
        }
    </div>
    </>
)
}
export default Products