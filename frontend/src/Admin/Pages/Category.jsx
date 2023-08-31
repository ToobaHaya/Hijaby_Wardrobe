import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Category() {
 const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([])

    useEffect(() => {
        setLoading(true);
        axios.get('/api/all-categories')
            .then((json) => setCategory(json.data.categories),
            setLoading(false))
           
            .catch((err) => console.log(err))

    }, [])

    const deleteProduct = (CategoryName) => { console.log(CategoryName) }



    return (
        <div className="container" style={{ paddingTop: '70px' }}>
            <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{backgroundColor:"#fe7689"}}>
                <span className='fs-4 fw-bold text-white'>Categories</span>
                <CategoryModal recallData={setCategory}  />
            </div>

            <div className="container">
                <table className="table"loading={loading}>
                
                    <thead>
                        <tr>
                        <th scope="col">Category Image</th>
                            <th scope="col">ID</th>
                            <th scope="col">Category Name</th>
                        
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category?.map((val, key) =>
                                <tr key={key}>
                                     <td><img src={val.CategoryImage} className='img-fluid rounded-circle border border-secondary' style={{ height: '8vh', aspectRatio: 1 / 1, objectFit: 'contain' }} /></td>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.CategoryName}</td>
                                   
                                  
                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
