export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = () => {
    return fetch(`http://localhost:1234/api/getAllProducts`);;
  };
  
  export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };