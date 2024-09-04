import { useState } from "react"
import axios from "axios";

const AddProducts = () => {
    const [payload,setPayload] = useState();

    const handleChange = (event) => {
        console.log(event.target.name,"kkk");
        setPayload((prev) => ({...prev,[event.target.name]:event.target.value}))
    }

    const handleSubmit = async() => {
        const res = await axios.post(`http://localhost:3000/api/products`,payload);
        console.log(res,"popopopopo");
    }
return(
    <>
    <form>
    <input type="text" key="name" name="name" placeholder="name" value={payload?.name} onChange={handleChange}/>
    <input type="text" key="price" name="price" placeholder="price" value={payload?.price} onChange={handleChange}/>
    <input type="text" key="quantity" name="quantity" placeholder="quantity" value={payload?.quantity} onChange={handleChange}/>
    <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
    </>
)
}
export default AddProducts