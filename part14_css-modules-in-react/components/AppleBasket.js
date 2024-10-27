import React from 'react'; // Import the React library to use JSX and create components

// Define a functional component named AppleBasket that accepts props
const AppleBasket = ({ appleCount, basketName }) => {
  return ( // Return the JSX to render
    <div className="apple-basket"> {/* Container div with a class for styling */}
      <h1>
        <span>{appleCount}</span> apples {/* Display the number of apples */}
      </h1>
      <p>
        {basketName} {/* Display the name of the basket */}
        {appleCount === 10 && '(full)'} {/* Show "(full)" if appleCount is exactly 10 */}
        {appleCount === 0 && '(empty)'} {/* Show "(empty)" if appleCount is 0 */}
        {(appleCount >= 5 && appleCount !== 10) && '(half full)'} {/* Show "(half full)" if appleCount is between 5 and 9 */}
      </p>
    </div>
  )
}

// Export the AppleBasket component so it can be used in other files
export default AppleBasket;
