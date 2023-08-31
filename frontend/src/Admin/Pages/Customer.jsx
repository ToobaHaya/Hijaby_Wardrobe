import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios'


function Customers() {
    const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   getCustomers().then((res) => {
  //     setDataSource(res.users);
  //     setLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    
    const fetchCustomer = async () => {
        try {
            
            const response = await axios.get(`/api/all-orders`);
            console.log(response.data); 
            setDataSource(response.data.orders);
            setLoading(false);
            console.log(dataSource); 

        } catch (error) {
            console.log(error);
        }
    };

    fetchCustomer();
}, []);

              return (
                <>
                <Typography.Title level={4} style={{ paddingTop: '70px' }}>Customers</Typography.Title>
                <div className="container" >
                    <table className="table" >
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No:</th>            
                                <th scope="col">Address</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataSource?.map((val, key) =>
                                    <tr key={key}>
                                        <td scope="row">{val._id}</td>
                                        <td>{val.customerName}</td>
                                        <td>{val.customerEmail}</td>
                                        <td>{val.customerContact}</td>
                                        <td>{val.customerAddress}</td>
                                       
                                    </tr>)
                            }
    
                        </tbody>
                    </table>
    
                </div>
           
                </>
  );
}
export default Customers;