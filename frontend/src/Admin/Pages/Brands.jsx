import React, { useEffect, useState } from 'react'
import BrandModal from '../components/BrandModal'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Brands() {

    const [Brands, setBrands] = useState([])
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:1234/api/getallbrands')
    //         .then((json) => setbrands(json.data.brands))
    //         console.log(brand)
    //         .catch((err) => console.log(err))

    // }, [])
    useEffect(() => {
        setLoading(true);
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`/api/getAllbrands`);
                setBrands(response.data.Brands);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
  
  
        fetchBrands();
    }, []);

    const deleteProduct = (BrandName) => { console.log(BrandName) }



    return (
        <div className="container" style={{ paddingTop: '70px' }}>
            <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{backgroundColor:"#fe7689"}}>
                <span className='fs-4 fw-bold text-white' >Brands</span>
                <BrandModal recallData={setBrands} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Brand Image</th>
                            <th scope="col">ID</th>
                            <th scope="col">Brand Name</th>
                           
                          


                        </tr>
                    </thead>
                    <tbody  loading={loading}>
                        {
                            Brands?.map((val, key) =>
                                <tr key={key}>
                                      <td><img src={val.BrandImage} className='img-fluid' style={{ height: '8vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.BrandName}</td>
                                  
                                  
                                </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
