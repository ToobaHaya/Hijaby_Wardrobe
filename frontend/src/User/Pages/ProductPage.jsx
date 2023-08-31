import axios from 'axios';
import React, { useEffect, useState ,useContext } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../CartContext/context'; 


export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { cart_dispatch } = useContext(CartContext);

    useEffect(() => {
       
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/productbyId/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);
    
    const addtocart = () => {
        Swal.fire({
            title: 'Add to Cart!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        const payload = { ...product, quantity }
        console.log(payload)

        cart_dispatch({
            type: "ADD_TO_CART",
            payload
        })
       
    }

    return (
        <>
        <div className="container"  style={{ paddingTop: '70px' }}>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6 py-5">
                <h2 style={{color:"#fe7689"}}>{product.title} - {product.price}$</h2>
                    <small className="text-secondary">{product.description}</small>
                    <div className="row my-5">
                        {product?.images?.map((val, key) => (
                            <div key={key} className='col-md-4 border rounded mx-1' style={{borderColor:"#fe7689"}}>
                                <img src={val} className='img-fluid h-100' alt={`Image ${key}`} />
                            </div>
                        ))}
                    </div>

                    <div className='justify-content-around align-items-cente py-2 pr-3'>
                        <button className="btn btn-dark " style={{marginRight:"30px" ,marginLeft:"86px" }} disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btn btn-dark" style={{marginLeft:"30px"}} onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <div className='d-block  justify-content-around align-items-center py-4'>
                        <button className=" btn text-white py-2" style={{backgroundColor:"#f54961" , width:"70%"}} onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    );
}
