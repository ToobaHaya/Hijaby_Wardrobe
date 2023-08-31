import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { AppRoute } from '../../App'

export default function Products() {

    const [Products, setProducts] = useState([]);
   

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`/api/getAllProducts`);
            setProducts(response.data.Products);
            // setLoader(false);
        } catch (error) {
            console.log(error);
        }
    };

    fetchProducts();
}, []);


    const deleteproduct = (_id) => {
        console.log(_id)
        const payload = { _id }


        let config = {
            method: 'delete',
            url: '/api/delete-products',
            data: payload
        };


        axios(config).then(json => console.log(json.data)).catch(err => console.log(err))

    }

    return (
        <div className="container" style={{ paddingTop: '70px' }}>
            <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{backgroundColor:"#fe7689"}}>
                <span className='fs-4 fw-bold text-white' >Products</span>
                <ProductModal recallData={setProducts}/>
            </div>

            <div className="container">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Product</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map((val, key) =>
                                <tr key={key}>
                                    <td><img src={val.thumbnail} className='img-fluid rounded-circle border border-secondary' style={{ height: '8vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>{val.title}</td>
                                    <td>{val.category}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description.length < 20 ? val.description : val.description.substring(0, 20) + "..."}</td>
                                  


                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
