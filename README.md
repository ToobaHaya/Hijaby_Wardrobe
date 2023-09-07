
# HIJABY WARDROBE - MERN_Stack Website

Welcome to Hijaby Wardrobe! A dynamic web platform specializing in Hijab items. This website providing valuable services related to hijab. Whether our website aims is to serve hijab for hijabean. This project utilizes the MERN_Stack (MongoDB, Express.js, React.js, Node.js)

# Live URL
excited-gray-outerwear.cyclic.app/

# Features
. Authentication: User registration and login functionality to access personalized features.

. Hijab Collection: Display a wide variety of hijab styles, colors, and materials for users to browse and purchase.Category options to help users find specific hijab products.

. Shopping Cart and Checkout: Enable users to add hijab products to their shopping cart and proceed to a secure checkout process.

. User Reviews and Ratings:
Enable users to leave reviews and ratings for hijab products.

. Admin Dashboard: Develop an admin dashboard where the admin can log in and access various features. Manage customer data, notification , add product, Category, brand and user.

# Technologies
Hijaby Wardrobe is powered by the MERN stack:

# Frontend:
React.js: A JavaScript library for building user interfaces.

Context API: Manage application state efficiently.

Firebase: Handle image storage.

# Backend: 
Node.js: A runtime environment for running JavaScript on the server.

Express.js: A minimalist web application framework for Node.js.

MongoDB: A database for storing data.

JWT: JSON Web Tokens for user authentication.


# API's Reference

## Product API's

#### Get all Products

```http
  GET /api/getAllProducts
```

#### Get Product by Id

```http
  GET /api/productbyId/:id
```

#### Get Products by Name

```http
  GET /api/productbyname/:title
```

#### Get Products by brand

```http
  GET /api/productsbybrand/:brand
```

#### Get Product by category

```http
  GET /api/Productbycategory/:category
```

#### Post Product

```http
  POST /api/products
```

#### Update Product

```http
  PUT /api/updateproduct/:_id
```

#### Delete Product

```http
  DELETE /api/deleteproduct/:_id
```
        

## Brand API's

#### Get all Brand

```http
  GET /api/getallbrands
```

#### Get Brand by Id

```http
  GET /api/brandbyid/id
```

#### Get Brands by Name

```http
  GET /api/brandbyname/BrandName
```

#### Post Brand

```http
  POST /api/add-brand
```

#### Update Brand

```http
  PUT /api/updatebrands/_id
```

#### Delete Brand

```http
  DELETE /api/deletebrand/_id
```
                

## Category API's

#### Get all Category

```http
  GET /api/all-categories
```

#### Get category by Id

```http
  GET /api/categorybyid/_id
```

#### Get Category by Name

```http
  GET /api/categorybyname
```

#### Post Category

```http
  POST /api/add-category
```

#### Update Category

```http
  PUT /api/update-category/_id
```

#### Delete Category

```http
  DELETE /api/delete-category/_id
```
                

## User API's

#### Get all User

```http
  GET /api/getallusers
```

#### Get User by Id

```http
  GET /api/userbyid/:_id
```

#### Get User by Email

```http
  GET /api/userbyemail/:email
```

#### Post User Signup

```http
  POST /api/signup
```

#### Post User Login

```http
  POST /api/login
```

#### Update User

```http
  PUT /api/updateuser/:_id
```

#### Delete User

```http
  DELETE /api/deleteuser/:_id
```
                


# Feedback

If you have any feedback, please reach out to us at toobaabdulrazzak11@gmail.com

