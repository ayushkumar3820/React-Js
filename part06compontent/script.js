// Importing necessary modules and styles
import { createRoot } from 'react-dom/client'  // Importing createRoot from React 18's new API for rendering
import './style.css'  // Importing an external CSS file to style the components
import React from 'react'  // Importing React for using JSX and building React components

// Defining a functional component called Card, which accepts props
function Card(props) {
    // Destructuring the properties passed through props
    const { title, image, brand, price } = props
  
    // JSX to render a product card with the image, title, brand, and price
    return (
      <div className="card">  // Outer div with a CSS class 'card'
        <img src={image} alt="iphone" />  // Rendering the image using the 'image' prop
        <div className="card-content">  // Another div to hold the content like title, brand, and price
          <h3>{title}</h3>  // Displaying the product title
          <p>{brand}</p>  // Displaying the brand
          <p>
            <b>${price}</b>  // Displaying the price with a dollar symbol
          </p>
        </div>
      </div>
    )
  }

  const root = createRoot(document.getElementById('root'))  // Initializing React rendering into the DOM element with id 'root'
  console.log('Hello world!!!')  // Just a console log to verify that the script is running


  // Fetching product data from an API
fetch('https://dummyjson.com/products')
.then((res) => res.json())  // Parsing the response as JSON
.then((data) => {
  // Rendering the fetched data
  root.render(
    <div className="container">  // Wrapping the product cards in a div with class 'container'
      {data.products.map((product) => {  // Looping through each product from the fetched data
        return (
          <Card
            key={product.id}  // Setting a unique key for each product (React needs this to identify each component)
            title={product.title}  // Passing the product title as a prop to the Card component
            brand={product.brand}  // Passing the product brand as a prop
            price={product.price}  // Passing the product price as a prop
            image={product.thumbnail}  // Passing the product image as a prop
          />
        )
      })}
    </div>
  )
})


// root.render({
//   $$typeof: Symbol.for('react.element'),  // This is React's internal way of defining elements
//   type: Card,  // The component type (Card) is passed
//   ref: null,  // No reference is used
//   props: {  // Manually passing props for a Card component (title, image, brand, price, key)
//     title: 'iPhone 13',
//     image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     brand: 'Apple',
//     price: 899,
//     key: 12
//   }
// })
