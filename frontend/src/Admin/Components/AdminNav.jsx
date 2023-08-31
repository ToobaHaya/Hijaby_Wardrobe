import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState ,useContext } from "react";
import { getComments, getOrders } from "../API";
import { GlobalContext } from '../../Context/context'
import axios from "axios"; 
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./AdminNav.css"


function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/all-orders");
        const ordersArray = response.data.orders;
        const productTitles = ordersArray.flatMap(order =>

          order.items.map((item) => ({
            key: item._id,
            title: item.title,
          }))
          );
console.log(productTitles)
        setOrders(productTitles);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);


  console.log(orders)
  return (
   
    <Navbar expand="lg"  id="navs" >  
      <Container >
      {/* <Nav> */}
      <Navbar.Brand href="" className="logo" >Hijaby Wardrobe</Navbar.Brand>
      {/* </Nav> */}
      <Nav className="d-none d-lg-flex">
      <Space>
    
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 , color:"#fe7689" }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 , color:"#fe7689" }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>

      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
  title="Notifications"
  open={notificationsOpen}
  onClose={() => {
    setNotificationsOpen(false);
  }}
  maskClosable
>
<List
  dataSource={orders}
  renderItem={(item) => {
    return <List.Item>{item.title} has been ordered!</List.Item>;
  }}
  />
</Drawer>

   
{/* 
<Nav.Link className=" p-3 d-flex text-white justify-content-right align-items-right"  onClick={() => dispatch({ type: "USER_LOGOUT" })} >
Logout
      </Nav.Link> */}
       <div className=" p-3 d-flex text-white justify-content-right align-items-right">
        <button style={{ borderColor:"#fe7689", color:"#fe7689"}} className="btn" onClick={() => dispatch({ type: "USER_LOGOUT" })}> 
       Logout
      </button>
      </div>
      </Nav> 
      </Container>
</Navbar>

  
  );
}

export default AppHeader;